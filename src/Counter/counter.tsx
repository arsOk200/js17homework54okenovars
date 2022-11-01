import React from 'react';
  interface Props{
    try:number;
  }
const Counter:React.FC<Props> = (props) => {
  return (
    <div>
      <p>Tries: {props.try}</p>
    </div>
  );
};

export default Counter;