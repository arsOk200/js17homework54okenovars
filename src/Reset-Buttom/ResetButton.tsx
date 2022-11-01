import React from 'react';
import "./reset-Buttom.css"
interface Props {
  onResetClick:React.MouseEventHandler;
}


const ResetButton:React.FC<Props> = (props) => {
  return (
    <div>
      <button className="btn" onClick={props.onResetClick}>reset</button>
    </div>
  );
};

export default ResetButton;