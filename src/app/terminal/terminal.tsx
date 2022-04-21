import React, { useState, useEffect, useContext } from "react";

import TerminalOutput from "./terminal_output";
import InputArea from "./input_area";
import {TerminalPrompt} from "../constants";
import {gameContext, processInput as processUserInput} from "../store";

import styles from '../app.module.css';


const Terminal = () => {
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const {dispatch, state: {output}} = useContext(gameContext);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const scrollRef = React.useRef<HTMLDivElement | null>(null);

    const scrollLastInputTop = () => {
      scrollRef.current?.scrollIntoView();
    };

    useEffect(scrollLastInputTop, [output]);

    const processInput = (input: string) => {
        // add input to to history if the input is not empty
        if (input.trim()) {
            setHistory([...history, input]);
            setHistoryIndex(history.length + 1);
        }

        const processedInput = input.toLowerCase();
      
        // store a record of this input with a ref to allow us to scroll it into view.
        // TODO: get rid of this and apply it to the last output so it doesn't go off the page
        const inputElement = (
            <div ref={el => scrollRef.current = el}>
                <span className={styles.terminalPrompt}>
                    {TerminalPrompt}
                </span>
                {" "}
                <span>
                    {input}
                </span>
            </div>
        );

        dispatch(processUserInput(processedInput, inputElement));
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

    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        inputRef.current?.focus();
    }

    return (
        <div onKeyDown={focusInputArea} onClick={onClick} className={styles.terminalContainer}>
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
