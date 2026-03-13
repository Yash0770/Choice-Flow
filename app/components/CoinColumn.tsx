"use client";
import { useState } from "react";

export default function CoinColumn() {
  const [selected, setSelected] = useState("Head");
  const [heads, setHeads] = useState<string[]>([]);
  const [tails, setTails] = useState<string[]>([]);

  const handleSubmit = () => {
    if (selected === "Head") {
      setHeads((prev) => [...prev, "Head"]);
    } else {
      setTails((prev) => [...prev, "Tail"]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20">

      {/* Dropdown + Button */}
      <div className="flex gap-4">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="border px-4 py-2 rounded cursor-pointer"
        >
          <option value="Head" className="text-black cursor-pointer">Head</option>
          <option value="Tail" className="text-black cursor-pointer">Tail</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>

      {/* Columns */}
      <div className="flex gap-20">

        {/* Head Column */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold mb-2">Head</h2>
          {heads.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* Tail Column */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold mb-2">Tail</h2>
          {tails.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

      </div>
    </div>
  );
}