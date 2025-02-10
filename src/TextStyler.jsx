import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

const TextStyler = () => {
  const [inputText, setInputText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const asciiLetters = {
    A: ["█████╗ ", "██╔══██╗", "███████║", "██╔══██║", "██║  ██║", "╚═╝  ╚═╝"],
    B: ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔══██╗", "██████╔╝", "╚═════╝ "],
    C: [" ██████╗", "██╔════╝", "██║     ", "██║     ", "╚██████╗", " ╚═════╝"],
    D: ["██████╗ ", "██╔══██╗", "██║  ██║", "██║  ██║", "██████╔╝", "╚═════╝ "],
    E: ["███████╗", "██╔════╝", "█████╗  ", "██╔══╝  ", "███████╗", "╚══════╝"],
    F: ["███████╗", "██╔════╝", "█████╗  ", "██╔══╝  ", "██║     ", "╚═╝     "],
    G: [
      " ██████╗ ",
      "██╔════╝ ",
      "██║  ███╗",
      "██║   ██║",
      "╚██████╔╝",
      " ╚═════╝ ",
    ],
    H: ["██╗  ██╗", "██║  ██║", "███████║", "██╔══██║", "██║  ██║", "╚═╝  ╚═╝"],
    I: ["██╗", "██║", "██║", "██║", "██║", "╚═╝"],
    J: ["     ██╗", "     ██║", "     ██║", "██   ██║", "╚█████╔╝", " ╚════╝ "],
    K: ["██╗  ██╗", "██║ ██╔╝", "█████╔╝ ", "██╔═██╗ ", "██║  ██╗", "╚═╝  ╚═╝"],
    L: ["██╗     ", "██║     ", "██║     ", "██║     ", "███████╗", "╚══════╝"],
    M: [
      "███╗   ███╗",
      "████╗ ████║",
      "██╔████╔██║",
      "██║╚██╔╝██║",
      "██║ ╚═╝ ██║",
      "╚═╝     ╚═╝",
    ],
    N: [
      "███╗   ██╗",
      "████╗  ██║",
      "██╔██╗ ██║",
      "██║╚██╗██║",
      "██║ ╚████║",
      "╚═╝  ╚═══╝",
    ],
    O: [
      " ██████╗ ",
      "██╔═══██╗",
      "██║   ██║",
      "██║   ██║",
      "╚██████╔╝",
      " ╚═════╝ ",
    ],
    P: ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔═══╝ ", "██║     ", "╚═╝     "],
    Q: [
      " ██████╗ ",
      "██╔═══██╗",
      "██║   ██║",
      "██║▄▄ ██║",
      "╚██████╔╝",
      " ╚══▀▀═╝ ",
    ],
    R: ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔══██╗", "██║  ██║", "╚═╝  ╚═╝"],
    S: ["███████╗", "██╔════╝", "███████╗", "╚════██║", "███████║", "╚══════╝"],
    T: [
      "████████╗",
      "╚══██╔══╝",
      "   ██║   ",
      "   ██║   ",
      "   ██║   ",
      "   ╚═╝   ",
    ],
    U: [
      "██╗   ██╗",
      "██║   ██║",
      "██║   ██║",
      "██║   ██║",
      "╚██████╔╝",
      " ╚═════╝ ",
    ],
    V: [
      "██╗   ██╗",
      "██║   ██║",
      "██║   ██║",
      "╚██╗ ██╔╝",
      " ╚████╔╝ ",
      "  ╚═══╝  ",
    ],
    W: [
      "██╗    ██╗",
      "██║    ██║",
      "██║ █╗ ██║",
      "██║███╗██║",
      "╚███╔███╔╝",
      " ╚══╝╚══╝ ",
    ],
    X: ["██╗  ██╗", "╚██╗██╔╝", " ╚███╔╝ ", " ██╔██╗ ", "██╔╝ ██╗", "╚═╝  ╚═╝"],
    Y: [
      "██╗   ██╗",
      "╚██╗ ██╔╝",
      " ╚████╔╝ ",
      "  ╚██╔╝  ",
      "   ██║   ",
      "   ╚═╝   ",
    ],
    Z: ["███████╗", "╚══███╔╝", "  ███╔╝ ", " ███╔╝  ", "███████╗", "╚══════╝"],
    " ": ["  ", "  ", "  ", "  ", "  ", "  "],
    "-": [
      "         ",
      "         ",
      "█████╗   ",
      "╚════╝   ",
      "         ",
      "         ",
    ],
    _: [
      "         ",
      "         ",
      "         ",
      "         ",
      "███████╗ ",
      "╚══════╝ ",
    ],
    ".": ["   ", "   ", "   ", "   ", "██╗", "╚═╝"],
    "!": ["██╗", "██║", "██║", "╚═╝", "██╗", "╚═╝"],
    "?": [
      " ██████╗ ",
      "██╔═══██╗",
      "    ██╔╝ ",
      "   ██╔╝  ",
      "         ",
      "   ╚═╝   ",
    ],
    "/": [
      "     ██╗",
      "    ██╔╝",
      "   ██╔╝ ",
      "  ██╔╝  ",
      " ██╔╝   ",
      "╚═╝     ",
    ],
    "@": [
      " ██████╗  ",
      "██╔═══██╗ ",
      "██║ █ ███╗",
      "██║ ████╔╝",
      "╚███╔███╔╝",
      " ╚══╝╚══╝ ",
    ],
    1: [" ██╗", "███║", "╚██║", " ██║", " ██║", " ╚═╝"],
    2: [
      " ██████╗ ",
      "██╔═══██╗",
      "     ██╔╝",
      "   ██╔╝  ",
      "  ██╔╝   ",
      "  ██████╗",
    ],
    3: [
      " ██████╗ ",
      "╚════██╗",
      " █████╔╝",
      " ╚═══██╗",
      " ██████╔╝",
      " ╚═════╝ ",
    ],
    4: [
      "   ██╗██╗ ",
      "  ███║██║ ",
      " ██╔██║██║ ",
      " ╚═╝██║╚═╝ ",
      "    ██║   ",
      "    ╚═╝   ",
    ],
    5: [
      " ██████╗ ",
      "██╔════╝ ",
      "██████╗  ",
      "╚════██╗ ",
      "██████╔╝ ",
      "╚═════╝  ",
    ],
    6: [
      " ██████╗ ",
      "██╔════╝ ",
      "██████╗  ",
      "██╔═══╝  ",
      "╚██████╗ ",
      " ╚═════╝ ",
    ],
    7: [
      "███████╗ ",
      "╚════██║ ",
      "    ██╔╝ ",
      "   ██╔╝  ",
      "  ██╔╝   ",
      "  ╚═╝    ",
    ],
    8: [
      " █████╗  ",
      "██╔══██╗ ",
      "╚█████╔╝ ",
      "██╔═══╝  ",
      "╚██████╗ ",
      " ╚═════╝ ",
    ],
    9: [
      " █████╗  ",
      "██╔══██╗ ",
      "╚██████║ ",
      " ╚═══██║ ",
      " █████╔╝ ",
      " ╚════╝  ",
    ],
    0: [
      " ██████╗ ",
      "██╔═████╗",
      "██║██╔██║",
      "████╔╝██║",
      "╚██████╔╝",
      " ╚═════╝ ",
    ],
  };

  const generateBlockText = (text) => {
    const lines = ["", "", "", "", "", ""]; // 6 lines for each character

    text
      .toUpperCase()
      .split("")
      .forEach((char) => {
        const pattern = asciiLetters[char] || asciiLetters[" "];
        pattern.forEach((line, index) => {
          lines[index] += line;
        });
      });

    return lines.join("\n");
  };

  useEffect(() => {
    document.title = inputText || "Text Styler";
  }, [inputText]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generateBlockText(inputText));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1D2B53] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#29366F] rounded-xl ring-1 ring-blue-500 shadow-lg shadow-blue-400 flex flex-col overflow-hidden">
        <div className="w-full bg-[#1D2B53] flex items-center justify-center p-8 ring-1 ring-blue-500">
          <pre className="text-[#7DCCFF] font-mono text-sm whitespace-pre overflow-x-auto w-full text-center">
            {inputText ? generateBlockText(inputText) : "Type something..."}
          </pre>
        </div>
        <div className="w-full p-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-[#7DCCFF]">
                Enter Text
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-lg bg-[#1D2B53] border border-[#7DCCFF] text-[#7DCCFF] 
                         focus:border-[#7DCCFF] focus:ring-1 focus:ring-[#7DCCFF]"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here..."
                maxLength={50}
              />
            </div>
          </div>

          <button
            onClick={copyToClipboard}
            className="w-full flex items-center justify-center gap-2 bg-[#7DCCFF] hover:bg-[#9DD9FF] 
                     text-[#1D2B53] p-2 rounded-lg transition-colors font-semibold"
          >
            <Copy className="w-4 h-4" />
            Copy Block Text
          </button>
        </div>
      </div>
      <div
        className={`fixed bottom-4 bg-[#7DCCFF] text-[#1D2B53] px-4 py-2 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${
          showToast
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-1 pointer-events-none"
        }`}
      >
        <Check className="w-4 h-4" />
        <span className="font-medium">Copied to clipboard!</span>
      </div>
    </div>
  );
};

export default TextStyler;
