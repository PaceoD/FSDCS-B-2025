import React, { useState } from 'react';
import cat from './cat.png';

function ImageManipulation() {
  const [imgHeight, setImgHeight] = useState(200);
  const [imgWidth, setImgWidth] = useState(200);
  const [rotation, setRotation] = useState(0);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  function increaseHeight() {
    setImgHeight(imgHeight + 10);
  }

  function decreaseHeight() {
    setImgHeight(imgHeight - 10);
  }

  function increaseWidth() {
    setImgWidth(imgWidth + 10);
  }

  function decreaseWidth() {
    setImgWidth(imgWidth - 10);
  }

  function rotateLeft() {
    setRotation(rotation - 15);
  }

  function rotateRight() {
    setRotation(rotation + 15);
  }

  function changeBGColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Image Manipulation</h2>

      <div
        style={{
          border: '1px solid green',
          height: '450px',
          width: '350px',
          margin: '20px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `rgb(${red},${green},${blue})`,
          color: '#000',
        }}
      >
        <img
          src={cat}
          alt="cat"
          height={imgHeight}
          width={imgWidth}
          style={{
            objectFit: 'cover',
            transform: `rotate(${rotation}deg)`
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={increaseHeight}>Increase Height</button>
        <button onClick={decreaseHeight} style={{ marginLeft: '8px' }}>Decrease Height</button>
        <button onClick={increaseWidth} style={{ marginLeft: '8px' }}>Increase Width</button>
        <button onClick={decreaseWidth} style={{ marginLeft: '8px' }}>Decrease Width</button>
        <button onClick={rotateLeft} style={{ marginLeft: '8px' }}>Rotate Left</button>
        <button onClick={rotateRight} style={{ marginLeft: '8px' }}>Rotate Right</button>
        <button onClick={changeBGColor} style={{ marginLeft: '8px' }}>Change BG Color</button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ 
          color: 'black', 
          backgroundColor: 'white', 
          display: 'inline-block', 
          margin: '8px', 
          padding: '8px 16px', 
          borderRadius: '4px',
          boxShadow: '0 0 5px rgba(0,0,0,0.1)'
        }}>
          Image Height: {imgHeight}
        </h2>
        <h2 style={{ 
          color: 'black', 
          backgroundColor: 'white', 
          display: 'inline-block', 
          margin: '8px', 
          padding: '8px 16px',
          borderRadius: '4px',
          boxShadow: '0 0 5px rgba(0,0,0,0.1)'
        }}>
          Image Width: {imgWidth}
        </h2>
        <h2 style={{ 
          color: 'black', 
          backgroundColor: 'white', 
          display: 'inline-block', 
          margin: '8px', 
          padding: '8px 16px',
          borderRadius: '4px',
          boxShadow: '0 0 5px rgba(0,0,0,0.1)'
        }}>
          Rotation: {rotation}°
        </h2>
      </div>
    </div>
  );
}

export default ImageManipulation;
