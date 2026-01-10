import { useState } from "react";
import "../styling/Scientific.css";
import on_click from "../Eventhandler";
import useCalculatorEngine from "../CalculatorEngine";

export default function ScientificCalculator(){

  const calEngine=useCalculatorEngine()

    const scientific_button = [
  "2nd","pi","e","c","del",
   "x^2","1/x","|x|","exp","mod",
    "x^1/2","(",")","n!","/", 
    "^","7","8","9","*", 
    "10^x","4","5","6","-", 
    "log","1","2","3","+", "ln",
    "+/-","0",".","="
];

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">

    {/* Calculator Card */}
    <div className="w-[520px] bg-white rounded-3xl shadow-2xl p-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        Scientific Calculator
      </h1>

      {/* Display */}
      <div className="bg-gray-900 rounded-2xl p-4 mb-6 text-right">
        {/* Evaluator (TOP) */}
        <input
          type="text"
          value={calEngine.evaluator}
          disabled
          className="w-full bg-transparent text-white text-3xl font-semibold outline-none text-right"
        />

        {/* Expression (BOTTOM) */}
        <input
          type="text"
          value={calEngine.expression}
          disabled
          className="w-full bg-transparent text-gray-400 text-sm outline-none text-right mt-1"
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-5 gap-3">
        {scientific_button.map((btn, index) => {
          const isEqual = btn === "=";
          const isOperator = ["+", "−", "×", "÷", "^"].includes(btn);
          const isFunction = [
            "log", "ln", "√x", "x²", "10ˣ", "n!", "|x|", "exp", "mod"
          ].includes(btn);

          return (
            <button
              key={index}
              onClick={() => on_click(btn, calEngine)}
              className={`
                h-14 rounded-xl font-semibold text-sm
                transition-all duration-150
                active:scale-95
                shadow-md
                ${isEqual
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : isOperator
                  ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  : isFunction
                  ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }
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

