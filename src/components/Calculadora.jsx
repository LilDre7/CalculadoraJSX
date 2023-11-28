import "../App.css";
import { useCalculadora } from "../store/useStoreCalc";

const Calculadora = () => {
  const {
    currentDigit,
    setCurrentDigit,
    deleteDigit,
    addDigit,
    resultOperation,
  } = useCalculadora();

   /* const handleButtonClick = (value) => {
    setCurrentDigit(currentDigit + value);
  };
  */

  const deleteOneDigit = () => {
    if (typeof currentDigit === "string" && currentDigit.length > 0) {
      setCurrentDigit(currentDigit.slice(0, -1));
    }
  };

  // Debo crear una funtion que no me permita colocar 2 veces seguidas una expresion alegebraica

  const handleButtonClick = (value) => {
    const lastChar = currentDigit[currentDigit.length - 1];
    if (/[+\-*/x]/.test(lastChar) && /[+\-*/x]/.test(value)) {
      return; // Evita agregar una expresión algebraica consecutiva
    }
    setCurrentDigit(currentDigit + value);
  };

  return (
    <section className="">
      <div className="container__digitate">
        <span className="number__digitate">
          {currentDigit === " " ? "0" : currentDigit}
        </span>
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
        <button
          onClick={() => handleButtonClick("9")}
          className="button__number"
        >
          9
        </button>
        <button onClick={() => deleteOneDigit()} className="button__DEL">
          DEL
        </button>
        <button
          onClick={() => handleButtonClick("4")}
          className="button__number"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick("5")}
          className="button__number"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick("6")}
          className="button__number"
        >
          6
        </button>
        <button onClick={() => handleButtonClick("+")} className="button__number">
          +
        </button>
        <button
          onClick={() => handleButtonClick("1")}
          className="button__number"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick("2")}
          className="button__number"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick("3")}
          className="button__number"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick("-")}
          className="button__number"
        >
          -
        </button>
        <button
          onClick={() => handleButtonClick(".")}
          className="button__number"
        >
          .
        </button>
        <button
          onClick={() => handleButtonClick("0")}
          className="button__number"
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick("/")}
          className="button__number"
        >
          /
        </button>
        <button
          onClick={() => handleButtonClick("x")}
          className="button__number"
        >
          x
        </button>

        {/* **************************************/}
        <div className="container__button__reset absolute grid grid-cols-2 grid-rows-1 w-full bottom-0">
          <button
            onClick={() => deleteDigit()}
            className="button__result reset"
          >
            RESET
          </button>
          <button
            onClick={() => resultOperation()}
            className="button__result result"
          >
            =
          </button>
        </div>
        {/* **************************************/}
      </div>
    </section>
  );
};

export default Calculadora;
