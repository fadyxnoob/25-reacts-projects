import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="acc-wrapper">
      <button >
        Enable Multi Selection
      </button>
      <div className="accordian">
            <div className="item">
              <div
                className="title"
              >
                <h3></h3>
                <span>+</span>
              </div>
                    <div className="acc-content "></div>
                    <div className="acc-content "></div>
              
            </div>
        
      </div>
    </div>
  );
}

export default App
