import React from "react";

type OutputProps = {
  name: string;
  paragraph: string;
};

const Output = ({ name, paragraph }: OutputProps) => {
  return (
    <div>
      <p>Output {name}</p>
      <p>Output {paragraph}</p>
    </div>
  );
};

export default Output;
