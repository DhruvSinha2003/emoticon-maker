import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [selectedParts, setSelectedParts] = useState({
    body: "(",
    eyes: "•",
    mouth: "ω",
    arms: "づ",
  });
  const [showToast, setShowToast] = useState(false);

  const options = {
    body: [
      { open: "(", close: ")" },
      { open: "[", close: "]" },
      { open: "{", close: "}" },
      { open: "<", close: ">" },
      { open: "⸂", close: "⸃" },
      { open: "ʕ", close: "ʔ" },
      { open: "≧", close: "≦" },
    ],
    eyes: ["•", "◕", "ᵔ", "˘", "⚆", "ㆆ", "◠", "ಠ"],
    mouth: ["ω", "◡", "▽", "ᴥ", "౪", "ロ", "⌂", "_", "‿", "︹"],
    arms: ["づ", "ノ", "つ", "⊂", "ʕ", "ᕙ", "╯", "¯\\"],
  };

  const generateEmoticon = () => {
    const bodyOption =
      options.body.find((b) => b.open === selectedParts.body) ||
      options.body[0];
    return `${bodyOption.open}${selectedParts.arms}${selectedParts.eyes}${selectedParts.mouth}${selectedParts.eyes}${bodyOption.close}${selectedParts.arms}`;
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generateEmoticon());
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  useEffect(() => {
    document.title = generateEmoticon();
  }, [selectedParts]);

  return (
    <div className="min-h-screen bg-[#1D2B53] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#29366F] rounded-xl ring-1 ring-blue-500 shadow-lg shadow-blue-400 flex overflow-hidden">
        <div className="w-1/2 bg-[#1D2B53] flex items-center justify-center p-8 ring-1 ring-blue-500">
          <span className="text-4xl font-mono text-[#7DCCFF] break-all text-center ">
            {generateEmoticon()}
          </span>
        </div>
        <div className="w-1/2 p-6 space-y-6">
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
      <div
        className={`
          fixed bottom-4 bg-[#7DCCFF] text-[#1D2B53] px-4 py-2 rounded-lg
          shadow-lg flex items-center justify-center gap-2 transition-all duration-300
          ${
            showToast
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-1 pointer-events-none"
          }
        `}
      >
        <Check className="w-4 h-4" />
        <span className="font-medium">Copied to clipboard!</span>
      </div>
    </div>
  );
}

export default App;
