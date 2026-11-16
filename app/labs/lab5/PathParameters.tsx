"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      <input
        className="mb-2 block w-24 rounded border border-neutral-300 px-2 py-1"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="mb-2 block w-24 rounded border border-neutral-300 px-2 py-1"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a id="wd-path-parameter-add" className="mb-1 block text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-path-parameter-subtract" className="mb-1 block text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-path-parameter-multiply" className="mb-1 block text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
        Multiply {a} × {b}
      </a>
      <a id="wd-path-parameter-divide" className="mb-1 block text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}