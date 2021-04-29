import React from "react";
import "./Coin.css";
import CoinTura from "../../Assets/Coin-head-Usa.png";
import CoinYazi from "../../Assets/coin-tail.usa.png";

const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.flipping ? "Coin-rotate" : ""}`}>
        <img src={CoinTura} alt="head" className={props.side === "yazi" ? "Coin-back" : "Coin-front"}/>
        <img src={CoinYazi} alt="tail" className={props.side === "yazi" ? "Coin-front" : "Coin-back"}/>
      </div>
    </div>
  );
};

export default Coin;
