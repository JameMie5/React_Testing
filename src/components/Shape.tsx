import React, { useState } from "react";
import { translate } from "react-i18nify";

const Shape: React.FC = () => {
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    setSwap(!swap);
  };

  return (
    <div>
      <h1>{translate("Shape")}</h1>
      <div>
        <div className="shape-container">
          <div>
            <div style={{ marginLeft: "70px" }} className="triangleLeft"></div>
          </div>
          <div className="contanier" onClick={handleSwap}>
            <div className="triangleDown"></div>
            <div className="triangleUp"></div>
          </div>
          <div>
            <div className="triangleRigth"></div>
          </div>
        </div>
        <hr />
      </div>

      <div className="shape-container">
        {swap ? (
          <>
            <div className="square"></div>
            <div className="circle"></div>
            <div className="rhombus"></div>
          </>
        ) : (
          <>
            <div className="rectangle"></div>
            <div className="circl"></div>
            <div className="star"></div>
          </>
        )}
      </div>

      <div className="shape-container">
        {swap ? (
          <>
            <div className="rectangle"></div>

            <div className="circl"></div>
            <div className="star"></div>
          </>
        ) : (
          <>
            <div className="square"></div>
            <div className="circle"></div>
            <div className="rhombus"></div>
           
          </>
        )}
      </div>
    </div>
  );
};

export default Shape;
