"use client";
import { useState } from "react";
export default function Calculator() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async () => {
    setError("");
    setResult("");
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${operation}`,
    );
    const data = await response.json();
    if (data.error) {
      setError(data.error);
    } else {
      const symbols: Record<string, string> = { add: "+", subtract: "-", multiply: "×", divide: "÷" };
      const symbol = symbols[data.operation] ?? "?";
      setResult(`${data.a} ${symbol} ${data.b} = ${data.result}`);
    }
  };
  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <label className="mb-1 block">A:
        <input type="number" className="ms-2 w-24 rounded border border-neutral-300 px-2 py-1"
          value={a} onChange={(e) => setA(e.target.value)} />
      </label>
      <label className="mb-1 block">B:
        <input type="number" className="ms-2 w-24 rounded border border-neutral-300 px-2 py-1"
          value={b} onChange={(e) => setB(e.target.value)} />
      </label>
      <label className="mb-2 block">Operation:
        <select className="ms-2 rounded border border-neutral-300 px-2 py-1"
          value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
      </label>
      <button type="button" onClick={calculate}
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white">
        Calculate
      </button>
      {result && <p className="rounded bg-green-100 px-3 py-2">{result}</p>}
      {error && <p className="rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
      <hr />
    </div>
  );
}