import React from "react";
import "../styles/Button.css"

interface Props {
  children: string;
  onClick: () => void;
}

const button = ({ children, onClick }: Props) => {
  return (
    <button className="btn-dark" onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
