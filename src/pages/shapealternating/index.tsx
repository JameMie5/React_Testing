// script.tsx

import React, { useState } from 'react';
import './styles.scss';

const Button = ({ shape, onClick }: { shape: string, onClick: () => void }) => {
  return (
    <button className="button" onClick={onClick}>
      <div className={`button__shape button__${shape}`}></div>
    </button>
  );
};

const App = () => {
  const [positions, setPositions] = useState<[number, number]>([0, 0]);

  const handleMoveShape = () => {
    // ย้ายรูปทรงด้านล่างโดนหมุนไปทางซ้าย
    setPositions([positions[0] + 100, positions[1] + 100]);
  };

  const handleMovePosition = () => {
    // สลับ Grid Layout ขึ้นลง
    // ทำตามต้องการ
  };

  const handleRandomPosition = () => {
    // สุ่มตำแหน่งใหม่
    const newX = Math.floor(Math.random() * window.innerWidth);
    const newY = Math.floor(Math.random() * window.innerHeight);
    setPositions([newX, newY]);
  };

  return (
    <div className="app">
      <Button shape="circle" onClick={handleMoveShape} />
      <Button shape="square" onClick={handleMovePosition} />
      <Button shape="triangle" onClick={handleRandomPosition} />
      <div className="shape" style={{ left: `${positions[0]}px`, top: `${positions[1]}px` }}></div>
    </div>
  );
};

export default App;
