import useCalculatorEngine from "../CalculatorEngine";
import on_click from "../Eventhandler";

export default function StandardCalculator(){

    const engine = useCalculatorEngine();

    const standard_button=[
      "%","ce","c","del",
      "1/x","x^2","x^1/2","/",
      "7","8","9","*",
      "4","5","6","-",
      "1","2","3","+",
      "+/-", "0",".","="
    ]
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">

    {/* Calculator Card */}
    <div className="w-[420px] bg-white rounded-3xl shadow-2xl p-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        Standard Calculator
      </h1>

      {/* Display */}
      <div className="bg-gray-900 rounded-2xl p-4 mb-6 text-right">
        {/* Evaluator (TOP) */}
        <input
          type="text"
          value={engine.evaluator}
          disabled
          className="w-full bg-transparent text-white text-3xl font-semibold outline-none text-right"
        />

        {/* Expression (BOTTOM) */}
        <input
          type="text"
          value={engine.expression}
          disabled
          className="w-full bg-transparent text-gray-400 text-sm outline-none text-right mt-1"
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-3">
        {standard_button.map((btn, index) => {
          const isEqual = btn === "=";
          const isOperator = ["+", "−", "×", "÷"].includes(btn);

          return (
            <button
              key={index}
              onClick={() => on_click(btn, engine)}
              className={`
                h-14 rounded-xl font-semibold text-lg
                transition-all duration-150
                active:scale-95
                ${isEqual
                  ? "col-span-2 bg-indigo-600 text-white hover:bg-indigo-700"
                  : isOperator
                  ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }
                shadow-md
              `}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  </div>
    )
}