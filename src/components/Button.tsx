import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-dark" onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
