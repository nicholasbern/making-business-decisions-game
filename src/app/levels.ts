export interface LevelReturn {
    completed: boolean;
    output: string;
}

type levelFunction = (input: string) => LevelReturn;

export interface LevelState {
    activeFunction: levelFunction;
}

const causalityTestFunction1 = (input: string) => {
    causalityLevelState.activeFunction = causalityTestFunction2; // TODO: this seems bad
    return {completed: false, output: "Choose a color, red or blue. Valid inputs include: \"red\" and \"blue\""};;
}

const causalityTestFunction2 = (input: string) => {
    if (input === "red") {
        return {completed: true, output: "Good job!"};
    } else if (input === "blue") {
        causalityLevelState.activeFunction = causalityTestFunction1; // TODO: this seems bad
        return {completed: false, output: "Oops, try again!"};
    }
    return {completed: false, output: "Valid inputs include: \"red\" and \"blue\""};;
}

const causalityLevelState: LevelState = {
    activeFunction: causalityTestFunction1
}

const levelNumberToLevel = new Map<number, LevelState >([
    [0, causalityLevelState],
])

const levels = [causalityLevelState]

export {levels}
