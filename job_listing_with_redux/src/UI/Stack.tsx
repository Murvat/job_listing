import React from "react";

interface IStack {
  children: React.ReactNode;
  pos: string;
}
const Stack:React.FC<IStack> = ({children, pos}) => (
  <div className='stack' style={{
    justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
  }}>
     {children}
  </div>
);

export {Stack};

