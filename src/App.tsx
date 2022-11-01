import React, {useState} from 'react';
import './App.css';
import Deck from "./Deck/Deck";
import ResetButton from "./Reset-Buttom/ResetButton";
import Counter from "./Counter/counter";


function App() {
  const [counter, setCounter] = useState([
    {tries:0}]);

  const createItems = () => {
    const random = Math.floor(Math.random()*35);
    const array:any[] = []
    for (let i:number = 0; i < 36; i++) {
      const randomId = Math.random();
      array.push({hasItem: false, clicked: false, id: String(randomId), item:''});
    }
    const randomGoal = array[random];
    randomGoal.hasItem = true;
    randomGoal.item = '0';
    return array;
  }

  const [items, setItems] = useState(createItems());

  const onResetClick = () => {
    const triesCopy = [...counter];
    const tryCopy = {...counter[0]};
    tryCopy.tries =0;
    triesCopy[0] = tryCopy;
    setCounter([tryCopy]);
    setItems(createItems());
  }


  const onItemClick = (index:string) => {
    const currentItem = items.findIndex(i => i.id === index);
    const item = items[currentItem];
    const clickedItem = item.clicked = true;
    const itemsCopy = [...items];
    setItems(itemsCopy);
    const triesCopy = [...counter];
    const tryCopy = {...counter[0]};
    tryCopy.tries++;
    triesCopy[0] = tryCopy;
    setCounter([tryCopy]);

  };



  return (
    <div className="App">
      <div className="container">
        {items.map((item)=>
          <Deck
            item={item.item}
            hasItem={item.hasItem}
            clicked={item.clicked}
            key={item.id}
            id={item.id}
            onItemClick={() => onItemClick(item.id)}
          />)}
      </div>
      <ResetButton onResetClick={() => onResetClick()}/>
      <Counter try={counter[0].tries}/>
    </div>

  );
}

export default App;
