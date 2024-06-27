import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor)
    console.log(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb${r},${g},${b}`)
  }

  useEffect(()=>{
    if(typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor])
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        width: "100%",
        background: color,
      }}
    >

        <div style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "60px",
            flexDirection: "column",
        }}>
            <h3>{typeOfColor === "rgb" ? 'RGB Color': 'HEX Color' }</h3>
            <h1>{color}</h1>
        </div>
      <div className="btn-container">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
