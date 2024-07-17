import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value ? parseInt(event.target.value) : undefined);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value ? parseFloat(event.target.value) : undefined);
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(event.target.value ? parseFloat(event.target.value) : undefined);
  };

  const calculateTriangleArea = (height: number, width: number): number => {
    return 0.5 * height * width;
  };

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="input-group">
        <label className="label" htmlFor="numberInput">
          Max Number to Print:
        </label>
        <input id="numberInput" type="number" value={number ?? ''} onChange={handleNumberChange} />
      </div>
      <div className="display-box">
        {number ? Array.from({ length: number }, (_, i) => i + 1).join(', ') : 'The printed numbers'}
      </div>
      <div className="row">
        <div className="input-group half-width">
          <label className="label" htmlFor="heightInput">
            Height:
          </label>
          <input id="heightInput" type="number" value={height ?? ''} onChange={handleHeightChange} />
        </div>
        <div className="input-group half-width">
          <label className="label" htmlFor="widthInput">
            Width:
          </label>
          <input id="widthInput" type="number" value={width ?? ''} onChange={handleWidthChange} />
        </div>
      </div>
      <div className="display-box">
        {height && width ? `Area of Triangle: ${calculateTriangleArea(height, width)}` : 'The calculated area is printed here'}
      </div>
    </div>
  );
}

export default App;
