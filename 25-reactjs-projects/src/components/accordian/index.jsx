import { useEffect, useState } from "react";
import data from './data'
import './style.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [openAccordian, setOpenAccordian] = useState('+')

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    setOpenAccordian(getCurrentId === selected ? '-' : '+');



  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);

  }

  function isOpen(id) {
    if (enableMultiSelection) {
      return multiple.indexOf(id) !== -1;
    } else {
      return selected === id;
    }
  }
  
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col gap-5 bg-black">
      <h1 className="font-bold text-5xl text-white">React Js Accordian </h1>
      <div className="w-1/2">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="rounded bg-[#614101] mb-2.5 px-5 py-2.5">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="text-white flex justify-between items-center cursor-pointer"
              >
                <h3>{dataItem.question}</h3>
                <span>{isOpen(dataItem.id) ? '-' : '+'}</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="text-white heigt-auto bg-black w-100 rounded p-5 mt-2">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="text-white heigt-auto bg-black w-100 rounded p-5 mt-2">{dataItem.answer}</div>
                  )}
             
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>

      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="rounded py-2.5 px-5 bg-[#614101] text-white font-bold text-xl cursor-pointer"
        >
        {enableMultiSelection ? 'Disable' : 'Enable' } Multi Selection
      </button>
    </div>
  );
}