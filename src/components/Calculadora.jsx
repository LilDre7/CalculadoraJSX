import React, { useEffect } from "react";
import "../App.css";
import { useCounter, useCalculadora } from "../store/useStoreCalc";

const calculadora = () => {
  const { currentDigit, setCurrentDigit } = useCalculadora();
  console.log(currentDigit);

  const handleButtonClick = (value) => {
    setCurrentDigit((prevDigit) => prevDigit + value);
    console.log(value);
  };

  return (
    <section className="">
      <div className="container__digitate">
        <span className="number__digitate">{currentDigit}</span>
      </div>

      {/* **************************************/}
      <div className="relative container__numbers grid grid-cols-4 grid-rows-5 text-center">
        {/**************************************/}
        <button
          onClick={() => handleButtonClick("7")}
          className="button__number"
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick("8")}
          className="button__number"
        >
          8
        </button>
        <button className="button__number">9</button>
        <button className="button__DEL">DEL</button>
        <button className="button__number">4</button>
        <button className="button__number">5</button>
        <button className="button__number">6</button>
        <button className="button__number">+</button>
        <button className="button__number">1</button>
        <button className="button__number">2</button>
        <button className="button__number">3</button>
        <button className="button__number">-</button>
        <button className="button__number">.</button>
        <button className="button__number">0</button>
        <button className="button__number">/</button>
        <button className="button__number">x</button>
        {/* **************************************/}
        <div className="container__button__reset absolute grid grid-cols-2 grid-rows-1 w-full bottom-0">
          <button className="button__result reset">RESET</button>
          <button className="button__result result"> = </button>
        </div>
        {/* **************************************/}
      </div>
    </section>
  );
};

export default calculadora;
