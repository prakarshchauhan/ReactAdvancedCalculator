import { useState } from "react";
import ScientificCalculator from "./calculators/Scientific";
import StandardCalculator from "./calculators/Standard";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("standard"); // ✅ FIX 1

  const showScientific = () => {
    setMode("scientific");
    setOpen(false);
  };

  const showStandard = () => {
    setMode("standard");
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center px-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="text-gray-700 hover:text-indigo-600"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <h1
          className={`ml-4 text-xl font-bold text-indigo-600
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-56" : "translate-x-0"}`}
        >
          Calculator
        </h1>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <span className="text-lg font-semibold text-indigo-600">
            Menu
          </span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="p-4 space-y-3">
          <button
            onClick={showScientific}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600
                       text-white font-semibold py-3 rounded-xl
                       shadow-lg shadow-purple-500/30
                       transition-all active:scale-95"
          >
            Scientific
          </button>

          <button
            onClick={showStandard}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600
                       text-white font-semibold py-3 rounded-xl
                       shadow-lg shadow-purple-500/30
                       transition-all active:scale-95"
          >
            Standard
          </button>
        </nav>
      </aside>

      {/* ✅ Page Content (MOST IMPORTANT PART) */}
      <main className="pt-20">
        {mode === "scientific" && <ScientificCalculator />}
        {mode === "standard" && <StandardCalculator />}
      </main>

    </div>
  );
}
