import React from "react";

import styles from '../app.module.css';

type ErrorMessageProps = {
  command: string;
};
const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <div className={styles.terminalErrorGroup}>
      <span>
        {`Command not found: ${props.command}. `}
      </span>
      <span>
        {`Type 'help' to view a list of available commands`}
      </span>
    </div>
  );
};

export default ErrorMessage;