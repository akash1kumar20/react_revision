import { useState } from "react";

const Buttons_components = () => {
  const [finalResult, setFinalResult] = useState("");
  let values = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", "x²", 0, ".", "+"];
  function valueSelected(value) {
    let valueStr = finalResult + value;
    if (value == "x²") {
      valueStr = finalResult * finalResult;
    }
    setFinalResult(valueStr);
  }

  function calculation() {
    let resultCalled = eval(finalResult);
    setFinalResult(resultCalled);
  }

  function clearValue() {
    setFinalResult(" ");
  }

  return (
    <div className="pb-[17rem] bg-gradient-to-br from-purple-400 via-orange-400 to-pink-400 text-white font-bold pt-1">
      <input
        type="text"
        value={finalResult}
        readOnly
        className="border-4 bg-black border-white w-[40rem] text-xl mb-6 py-3 rounded-lg text-end pe-4"
      ></input>
      <div className="flex justify-center gap-10">
        <div className="grid grid-cols-4 gap-1">
          {values.map((value) => (
            <p
              className="valueStyling"
              key={value}
              onClick={() => valueSelected(value)}
            >
              {value}
            </p>
          ))}
        </div>
        <div className="flex flex-col justify-between">
          <button className="mainButtons" onClick={() => clearValue()}>
            C
          </button>
          <button className="mainButtons" onClick={() => calculation()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons_components;
