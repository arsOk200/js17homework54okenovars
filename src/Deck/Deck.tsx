import React from 'react';
import "./Deck.css"

interface Props {
  item:any[];
  hasItem:boolean;
  clicked:boolean;
  key:number;
  id:string;
  onItemClick:React.MouseEventHandler;
}
const Deck:React.FC<Props> = (props) => {
  let blockStyle:string = 'block';
  let itemStyle:string = 'item';
  if(props.clicked) {
    blockStyle = blockStyle+' clicked';
  }
  if(props.hasItem&& props.clicked) {
    blockStyle = blockStyle+' find';
    itemStyle = itemStyle+' catch';
  }


  return (
      <div className={blockStyle} key={props.id} onClick={props.onItemClick}><p className={itemStyle}>{props.item}</p></div>
  );
};

export default Deck;