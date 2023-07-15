import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-dark" onClick={onClick} style={{margin:"10px",width:"200px",height:"70px",borderRadius:"30px"}}>
      {children}
    </button>
  );
};

export default button;
