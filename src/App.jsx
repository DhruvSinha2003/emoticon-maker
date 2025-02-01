import { Copy } from "lucide-react";
import React, { useState } from "react";

function App() {
  const [selectedParts, setSelectedParts] = useState({
    base: "(",
    eyes: "•ᴗ•",
    mouth: "ω",
    arms: "づ",
    accessory: "♥",
  });

  const options = {
    base: ["(", "[", "{", "<", "⸂"],
    eyes: ["•ᴗ•", "◕ᴗ◕", "ᵔᴥᵔ", "˘ᵕ˘", "⚆ᗝ⚆", "ㆆᴗㆆ", "•̀.̫•́", "ಠ_ಠ"],
    mouth: ["ω", "◡", "▽", "ᴥ", "౪", "ロ", "⌂"],
    arms: ["づ", "ノ", "つ", "⊂", "ʕ", "ᕙ", "╯"],
    accessory: ["♥", "✿", "☆", "✧", "°", "⌒", "none"],
  };

  const generateEmoticon = () => {
    const { base, eyes, mouth, arms, accessory } = selectedParts;
    const acc = accessory === "none" ? "" : accessory;
    return `${base}${arms}${eyes}${mouth}${acc}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmoticon());
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-center text-purple-400">
            Emoticon Generator
          </h1>

          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <span className="text-2xl font-mono text-white">
              {generateEmoticon()}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(options).map(([key, values]) => (
            <div key={key} className="space-y-1">
              <label className="text-sm font-medium text-gray-300 capitalize">
                {key}
              </label>
              <select
                className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                value={selectedParts[key]}
                onChange={(e) =>
                  setSelectedParts((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
              >
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
        >
          <Copy className="w-4 h-4" />
          Copy Emoticon
        </button>
      </div>
    </div>
  );
}

export default App;
