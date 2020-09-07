import React from "react";

interface InputProps {
  name: string;
  onChange: any;
}

const Input = ({ name, onChange }: InputProps) => {
  return (
    <div>
      <input type="text" value={name} onChange={onChange} />
    </div>
  );
};

export default Input;
