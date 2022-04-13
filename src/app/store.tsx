import React, {useReducer} from 'react';

import { IntroMessage } from './constants';
import {levels, LevelState} from './levels';


interface GameState {
    levelState: LevelState,
    playingLevel: boolean,
    output: (string | JSX.Element)[]
}

const initialGameState: GameState = {
    levelState: levels[0], // TODO: figure out way to complete the game
    playingLevel: false,
    output: IntroMessage
};

export enum ActionType {
    EnterLevel,
    LeaveLevel,
    ProcessInput
}

interface EnterLevel {
    type: ActionType.EnterLevel
}

interface LeaveLevel {
    type: ActionType.LeaveLevel
}

interface ProcessInput {
    type: ActionType.ProcessInput,
    payload: {input: string}
}

type GameActions = EnterLevel | LeaveLevel | ProcessInput;

const enterLevel = (): EnterLevel => ({
    type: ActionType.EnterLevel
});

const leaveLevel = (): LeaveLevel => ({
    type: ActionType.LeaveLevel
});

const processInput = (input: string): ProcessInput => ({
    type: ActionType.ProcessInput,
    payload: {input},
});

const gameReducer = (state: GameState, action: GameActions): GameState => {
    switch(action.type) {
        case ActionType.EnterLevel:
            // TODO: play an opening bit of the game that just returns a string
            return {...state, playingLevel: true, output: ["Here's a new game, let's try it out."]};
        case ActionType.LeaveLevel:
            return {...state, playingLevel: false, output: ["Leaving the level. Go back to keep trying."]};
        case ActionType.ProcessInput:
            let output = [];
            if (state.playingLevel) {
                const levelReturn = state.levelState.activeFunction(action.payload.input);
                if (levelReturn.completed) {
                    // TODO: go to next active function, try to avoid an additional number
                }
                output = [levelReturn.output]
            } else {
                output = ["Go to a level if you want to do something. Right now you're kinda in limbo."];
            }
            return {...state, output};
        default:
            throw new Error();
    };
}

const gameContext = React.createContext<{
        state: GameState;
        dispatch: React.Dispatch<GameActions>;
    }>({
    state: initialGameState,
    dispatch: () => undefined,
});

const {Provider} = gameContext

// TODO: fix typing
const StateProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(gameReducer, initialGameState);
    return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {StateProvider, gameContext, leaveLevel, enterLevel, processInput}
