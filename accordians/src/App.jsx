import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSlection, setEnableMultiSlection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // Creating single selection function
  const handleSingleSelection = (gotCurrentID) => {
    setSelected(gotCurrentID === selected ? null : gotCurrentID);
  };
  const handleMultiSelection = (gotCurrentID) => {
    const cpyMultiple = [...multiple];
    const findIndexOfCurrentID = cpyMultiple.indexOf(gotCurrentID);
    if (findIndexOfCurrentID === -1) cpyMultiple.push(gotCurrentID);
    else cpyMultiple.splice(findIndexOfCurrentID, 1);
    setMultiple(cpyMultiple);
  };
  // console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <div className="accordian">
        <h1 className="h1">React Accordian</h1>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSlection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
               </div>
              {
                enableMultiSlection ? multiple.indexOf(dataItem.id) !== -1 && 
                <div className="acc-content">{dataItem.answer}</div> : 
                selected === dataItem.id && <div className="acc-content">{dataItem.answer}</div>
              } 
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <button onClick={() => setEnableMultiSlection(!enableMultiSlection)}>
        {enableMultiSlection ? "Disable" : "Enable" } Multi Selection
      </button>
    </div>
  );
};

export default App;
