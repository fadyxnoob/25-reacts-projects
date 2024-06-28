import React, { useEffect, useState, useCallback, useRef } from "react";
import Alert from "./alert";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");
  const [alert, setAlert] = useState(null);

  // useRef Hook
  const colorRef = useRef();

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    copyColorToClipboard(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
    copyColorToClipboard(rgbColor);
  }

  const copyColorToClipboard = useCallback((newColor) => {
    colorRef.current.value = newColor;
    navigator.clipboard.writeText(newColor)
      .then(() => {
        setAlert({ message: 'Color copied to clipboard!', type: 'success' });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy color: ', err);
        setAlert({ message: 'Failed to copy color.', type: 'error' });
        setTimeout(() => setAlert(null), 3000);
      });
  }, []);

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      className="w-100 h-screen flex justify-center items-center flex-col gap-20 relative"
      style={{ background: color }}
    >
      {alert && <Alert message={alert.message} type={alert.type} />}
      <div className="flex justify-center items-center text-white text-6xl flex-col gap-20">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1 ref={colorRef}>{color}</h1>
        <input type="text" ref={colorRef} readOnly style={{ position: 'absolute', top: '-9999px' }} />
      </div>
      <div className="btn-container bg-black px-5 rounded py-2">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-300 ease-in-out"
        >
          Create HEX Color
        </button>

        <button
          onClick={() => setTypeOfColor("rgb")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-300 ease-in-out"
        >
          Create RGB Color
        </button>

        <button
          onClick={
            typeOfColor === "hex" ? handleCreateRandomHexColor :  handleCreateRandomRgbColor
          }
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2 transition duration-300 ease-in-out"
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
