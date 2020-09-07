import React from "react";

import styles from "./Input.module.sass";

interface InputProps {
  name: string;
  onChange: any;
}

const Input = ({ name, onChange }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input type="text" value={name} onChange={onChange} />
    </div>
  );
};

export default Input;
