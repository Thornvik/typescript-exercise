import React from "react";

type InputProps = {
  name: string;
};

const Input = ({ name }: InputProps) => {
  return (
    <div>
      <input type="text" value={name} />
    </div>
  );
};

export default Input;
