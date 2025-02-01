import { Copy } from "lucide-react";
import React, { useState } from "react";

function App() {
  const [selectedParts, setSelectedParts] = useState({
    base: "(",
    eyes: "•",
    mouth: "ω",
    arms: "づ",
  });

  const options = {
    base: [
      { open: "(", close: ")" },
      { open: "[", close: "]" },
      { open: "{", close: "}" },
      { open: "<", close: ">" },
      { open: "⸂", close: "⸃" },
    ],
    eyes: ["•", "◕", "ᵔ", "˘", "⚆", "ㆆ", "◠", "ಠ"],
    mouth: ["ω", "◡", "▽", "ᴥ", "౪", "ロ", "⌂", "_", "‿"],
    arms: ["づ", "ノ", "つ", "⊂", "ʕ", "ᕙ", "╯", "¯\\"],
  };

  const generateEmoticon = () => {
    const baseOption =
      options.base.find((b) => b.open === selectedParts.base) ||
      options.base[0];
    return `${baseOption.open}${selectedParts.arms}${selectedParts.eyes}${selectedParts.mouth}${selectedParts.eyes}${baseOption.close}${selectedParts.arms}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmoticon());
  };

  return (
    <div className="min-h-screen bg-[#1D2B53] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#29366F] rounded-xl shadow-lg p-6 space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-center text-[#7DCCFF]">
            Emoticon Generator
          </h1>

          <div className="bg-[#1D2B53] p-4 rounded-lg text-center">
            <span className="text-2xl font-mono text-[#7DCCFF]">
              {generateEmoticon()}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(options).map(([key, values]) => (
            <div key={key} className="space-y-1">
              <label className="text-sm font-medium text-[#7DCCFF] capitalize">
                {key}
              </label>
              <select
                className="w-full p-2 rounded-lg bg-[#1D2B53] border border-[#7DCCFF] text-[#7DCCFF] 
                          focus:border-[#7DCCFF] focus:ring-1 focus:ring-[#7DCCFF]"
                value={selectedParts[key]}
                onChange={(e) =>
                  setSelectedParts((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
              >
                {values.map((value) => (
                  <option
                    key={typeof value === "object" ? value.open : value}
                    value={typeof value === "object" ? value.open : value}
                  >
                    {typeof value === "object"
                      ? `${value.open}${value.close}`
                      : value}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full flex items-center justify-center gap-2 bg-[#7DCCFF] hover:bg-[#9DD9FF] 
                     text-[#1D2B53] p-2 rounded-lg transition-colors font-semibold"
        >
          <Copy className="w-4 h-4" />
          Copy Emoticon
        </button>
      </div>
    </div>
  );
}

export default App;

//(つ⚆_⚆)つ
