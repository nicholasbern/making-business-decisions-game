import React, {useReducer} from 'react';

import { IntroMessage } from './constants';
import {levels, LevelState} from './levels';
import {maps, PositionTile} from './constants';


interface GameState {
    level: number, // TODO: do this better, you nimrod
    levelState: LevelState,
    playingLevel: boolean,
    map: PositionTile[],
    output: (string | JSX.Element)[]
}

const initialGameState: GameState = {
    level: 0,
    levelState: levels[0], // TODO: figure out way to complete the game
    playingLevel: false,
    map: maps[0],
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
    payload: {input: string, inputElement: JSX.Element}
}

type GameActions = EnterLevel | LeaveLevel | ProcessInput;

const enterLevel = (): EnterLevel => ({
    type: ActionType.EnterLevel
});

const leaveLevel = (): LeaveLevel => ({
    type: ActionType.LeaveLevel
});

const processInput = (input: string, inputElement: JSX.Element): ProcessInput => ({
    type: ActionType.ProcessInput,
    payload: {input, inputElement},
});

const gameReducer = (state: GameState, action: GameActions): GameState => {
    switch(action.type) {
        case ActionType.EnterLevel:
            // TODO: play an opening bit of the game that just returns a string
            const {output} = state.levelState.activeFunction("");
            return {...state, playingLevel: true, output: [...state.output, "Here's a new game, let's try it out.", output]};
        case ActionType.LeaveLevel:
            return {...state, playingLevel: false, output: [...state.output, "Leaving the level. Go back to keep trying."]};
        case ActionType.ProcessInput:
            let processOutput = "";
            if (state.playingLevel) {
                const levelReturn = state.levelState.activeFunction(action.payload.input);
                let newState = {}
                if (levelReturn.completed) {
                    // TODO: do this better, you nimrod
                    const level = state.level + 1;
                    const levelState = levels[level];
                    const playingLevel = false;
                    const oldMap = state.map.map(tile => 
                        ({
                            ...tile, 
                            tile: {
                                ...tile.tile, 
                                type: "road", 
                                ascii: tile.tile.type === "road" && tile.tile.ascii !== "^" ? "#" : "^"
                            }
                        })
                    )
                    const map = [...oldMap, ...maps[level]];
                    newState = {level, levelState, playingLevel, map}
                }
                processOutput = levelReturn.output
                return {
                    ...state,
                    ...newState, 
                    output: [...state.output, action.payload.inputElement, processOutput]
                };
            } else {
                processOutput = "Go to a level if you want to do something. Right now you're kinda in limbo.";
                return {
                    ...state, 
                    output: [...state.output, action.payload.inputElement, processOutput]
                };
            }
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
