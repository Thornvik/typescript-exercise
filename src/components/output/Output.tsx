import React from "react";

import styles from "./Output.module.scss";

type OutputProps = {
  name: string;
  paragraph: string;
};

const Output = ({ name, paragraph }: OutputProps) => {
  return (
    <div className={styles.outputContainer}>
      <p className={styles.name}>{name}</p>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Output;
