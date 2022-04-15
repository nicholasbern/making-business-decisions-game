import React, { useState, useEffect, useContext } from "react";

import TerminalOutput from "./terminal_output";
import InputArea from "./input_area";
import { TerminalPrompt } from "../constants";
import { gameContext, processInput as processUserInput} from "../store";

import styles from '../app.module.css';


const Terminal = () => {
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    // TODO: delete or use state
    const { dispatch, state: {output} } = useContext(gameContext );

    const inputRef = React.useRef<HTMLInputElement>(null);
    const scrollRef = React.useRef<HTMLDivElement | null>(null);

    const scrollLastInputTop = () => {
      scrollRef.current?.scrollIntoView();
    };

    useEffect(scrollLastInputTop, [output]);

    const processInput = (input: string) => {
        // store a record of this input with a ref to allow us to scroll it into view.
        // TODO: actually do this, maybe by adding the input the output in the reducer
        const inputRecord = (
            <div ref={(el) => (scrollRef.current = el)}>
              <span className={styles.terminalPrompt}>{TerminalPrompt}</span>{" "}
              <span>{input}</span>
            </div>
        );

        // add input to to history if the input is not empty
        if (input.trim()) {
            setHistory([...history, input]);
            setHistoryIndex(history.length + 1);
        }

        const processedInput = input.toLowerCase();
      
        // TODO: figure out a way to make these names different
        dispatch(processUserInput(processedInput));
    };

    const getHistory = (direction: "up" | "down") => {
        let updatedIndex;
        if (direction === "up") {
            updatedIndex = historyIndex === 0 ? 0 : historyIndex - 1;
        } else {
            updatedIndex = historyIndex === history.length ? history.length : historyIndex + 1;
        }
        setHistoryIndex(updatedIndex);
        return updatedIndex === history.length ? "" : history[updatedIndex];
    };

    const focusInputArea = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Tab") {
            // prevent tab from moving focus
            event.preventDefault();
        }
        inputRef.current?.focus();
    };

    return (
        <div tabIndex={-1} onKeyDown={focusInputArea} className={styles.terminalContainer}>
            <TerminalOutput outputs={output} />
            <InputArea
                processInput={processInput}
                getHistory={getHistory}
                inputRef={inputRef}
                terminalPrompt={TerminalPrompt}
            />
        </div>
    );
};

export {Terminal};
