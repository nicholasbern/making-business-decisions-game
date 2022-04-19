export interface LevelReturn {
    completed: boolean;
    output: string;
}

type levelFunction = (input: string) => LevelReturn;

export interface LevelState {
    activeFunction: levelFunction;
}

const errorLevelFunction = (input: string) => {
    return {completed: false, output: "ERROR, this shouldn't be showing up!!!"}
}

const testLevelFunction0 = (input: string) => {
    testLevelState.activeFunction = testLevelFunction1; // TODO: this seems bad
    return {completed: false, output: "Choose a color, red or blue. Valid inputs include: \"red\" and \"blue\""};;
}

const testLevelFunction1 = (input: string) => {
    if (input === "red") {
        testLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {completed: true, output: "Good job!"};
    } else if (input === "blue") {
        return {completed: false, output: "Oops, try again!"};
    }
    return {completed: false, output: "Valid inputs include: \"red\" and \"blue\""};;
}

const testSecondLevelFunction0 = (input: string) => {
    testLevelState.activeFunction = testSecondLevelFunction1; // TODO: this seems bad
    return {completed: false, output: "Choose a color, red or blue. Valid inputs include: \"red\" and \"blue\""};;
}

const testSecondLevelFunction1 = (input: string) => {
    if (input === "red") {
        testLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {completed: true, output: "Good job!"};
    } else if (input === "blue") {
        return {completed: false, output: "Oops, try again!"};
    }
    return {completed: false, output: "Valid inputs include: \"red\" and \"blue\""};;
}

const testLevelState: LevelState = {
    activeFunction: testLevelFunction0
}

const testSecondLevelState: LevelState = {
    activeFunction: testSecondLevelFunction0 
}

const levels = [testLevelState, testSecondLevelState];

export {levels}
