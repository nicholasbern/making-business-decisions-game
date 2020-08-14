import React, { useState } from "react";

import styles from '../app.module.css';

type InputAreaProps = {
  terminalPrompt: string;
  setOutput: React.Dispatch<React.SetStateAction<(string | JSX.Element)[]>>;
  processCommand: (input: string) => void;
  getHistory: (direction: "up" | "down") => string;
  inputRef: React.RefObject<HTMLInputElement>;
};

const InputArea = (props: InputAreaProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter":
        props.processCommand(input);
        setInput("");
        break;
      case "ArrowUp":
        event.preventDefault();
        setInput(props.getHistory("up"));
        break;
      case "ArrowDown":
        event.preventDefault();
        setInput(props.getHistory("down"));
        break;
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
        onKeyDown={handleInputKeyDown}
        ref={props.inputRef}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
      />
    </div>
  );
};

export default InputArea;
