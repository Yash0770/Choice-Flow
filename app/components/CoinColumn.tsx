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

      // If same type as previous → add to existing column immutably
      if (lastColumn && lastColumn.type === selected) {
        return prev.map((col, index) => {
          if (index === prev.length - 1) {
            // Return a NEW object for the last column
            return {
              ...col,
              values: [...col.values, selected],
            };
          }
          return col;
        });
      }

      // Otherwise create new column
      return [...prev, { type: selected, values: [selected] }];
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20">
      {/* dropdown + button */}
      <div className="flex gap-4">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value as "Head" | "Tail")}
          className="border px-4 py-2 rounded dark:text-white cursor-pointer"
        >
          <option value="Head" className="dark:text-black">
            Head
          </option>
          <option value="Tail" className="dark:text-black">
            Tail
          </option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>

      {/* dynamic columns */}
      <div className="flex flex-wrap gap-x-10 gap-y-10 justify- w-full max-w-7xl p-4 ">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col items-center min-w-15">
            <h2 className="font-bold mb-2 border-b-2 border-blue-500 px-2">
              {col.type}
            </h2>

            {col.values.map((v, index) => (
              <p key={index} className="py-1">
                {v}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
