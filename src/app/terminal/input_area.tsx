import React, { useState } from "react";

import styles from '../app.module.css';


interface InputAreaProps {
    terminalPrompt: string;
    processInput: (input: string) => void;
    getHistory: (direction: "up" | "down") => string;
    inputRef: React.RefObject<HTMLInputElement>;
}

const InputArea = (props: InputAreaProps) => {
    const [input, setInput] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setInput(inputValue);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            props.processInput(input);
            setInput("");
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setInput(props.getHistory("up"));
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            setInput(props.getHistory("down"));
        }
    };

    return (
        <div className={styles.terminalInputArea}>
            <span className={styles.terminalPrompt}>{props.terminalPrompt}</span>
            <input
              type="text"
              className={styles.terminalInput}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              ref={props.inputRef}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
            />
        </div>
    );
};

export default InputArea;
