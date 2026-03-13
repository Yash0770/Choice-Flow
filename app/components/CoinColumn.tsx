"use client";
import { useState } from "react";

type Column = {
  type: "Head" | "Tail";
  values: string[];
};

export default function CoinColumns() {
  const [selected, setSelected] = useState<"Head" | "Tail">("Head");
  const [columns, setColumns] = useState<Column[]>([]);

  const handleSubmit = () => {
    setColumns((prev) => {
      const lastColumn = prev[prev.length - 1];

      // if same type as previous → push in same column
      if (lastColumn && lastColumn.type === selected) {
        const updated = [...prev];
        updated[updated.length - 1].values.push(selected);
        return updated;
      }

      // otherwise create new column
      return [...prev, { type: selected, values: [selected] }];
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">

      {/* dropdown + button */}
      <div className="flex gap-4">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value as "Head" | "Tail")}
          className="border px-4 py-2 rounded"
        >
          <option value="Head">Head</option>
          <option value="Tail">Tail</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>

      {/* dynamic columns */}
      <div className="flex gap-10">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col items-center">
            <h2 className="font-bold mb-2">{col.type}</h2>

            {col.values.map((v, index) => (
              <p key={index}>{v}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}