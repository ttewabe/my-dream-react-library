import { useState } from 'react'
import './App.css'

const App = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const availableItems= [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape"
  ];

  const toggleItem = (item:string) => {
    setSelectedItems((prev) =>
      prev.includes(item) //check if item is already selected
        ? prev.filter((i) => i !== item)//create a new array without the item
        : [...prev, item]//add new item to the array
    );
  };

  return (
    <div
      className="multi-select-container"
      tabIndex={0}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="multi-select-input">
        {selectedItems.slice(0, 3).map((item, index) => (
          <span className="chip" key={index}>
            {item}
          </span>
        ))} {/* display only 3 items */}
        {selectedItems.length > 3 && (
          <span className="total">+{selectedItems.length - 3}</span>
        )} {/*display the total number of items*/}
      </div> 
      {isFocused && (
        <div className="dropdown">
          {availableItems.map((item, index) => (
            <div
              key={index}
              className={`dropdown-item ${selectedItems.includes(item) ? "selected" : ""}`}
              onClick={() => toggleItem(item)}
            >
              {item}
            </div>
          ))} {/*display the dropdown items*/}
        </div>
         )} {/*display the dropdown only when the input is focused*/}
    </div>   
  );
};
export default App;

