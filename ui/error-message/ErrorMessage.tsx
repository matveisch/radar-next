import React from "react";
import styles from "./ErrorMessage.module.scss";

interface Props {
  error: string;
}

const ErrorMessage: React.FC<Props> = (props) => {
  return <div className={styles.errorMessage}>{props.error}</div>;
};

export default ErrorMessage;
