import React, { useState } from "react";

const VendingMachine = () => {
  const coins = [100, 200, 1000, 5000];
  const [nowCoin, setNowCoin] = useState(0);
  const drinks = [
    { id: "물", price: 500 },
    { id: "콜라", price: 1500 },
    { id: "레스비", price: 800 },
    { id: "우유", price: 1000 },
  ];

  const coinAdd = (coin) => {
    console.log(coin);
    setNowCoin(coin + nowCoin);
  };

  const resetCoin = () => {
    setNowCoin(0);
  };

  const chooseDrink = (price, id) => {
    console.log(price);
    if (!window.confirm(`${id} 선택 , 구입하시겠습니까?`)) {
      return;
    }
    if (price > nowCoin) {
      alert("금액이 부족합니다.");
    } else {
      setNowCoin(nowCoin - price);
    }
  };
  return (
    <div>
      <hr />
      <h2>현재 코인 : {nowCoin}</h2>
      {coins.map((coin, i) => (
        <button key={i} onClick={() => coinAdd(coin)}>
          {coin}
        </button>
      ))}
      <button onClick={resetCoin}>거스름돈 반환</button>
      <br />
      <br />
      {drinks.map(({ id, price }) => (
        <li key={id} onDoubleClick={() => chooseDrink(price, id)}>
          {id}
        </li>
      ))}
    </div>
  );
};

export default VendingMachine;
