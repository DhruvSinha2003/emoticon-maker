import { useState } from "react";
import Emoticon from "./Emoticon";
import TextStyler from "./TextStyler";

function App() {
  const [toggle, setToggle] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setToggle((prev) => (prev === 0 ? 1 : 0));
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="relative">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={handleToggle}
          className="group px-6 py-3 bg-[#7DCCFF] hover:bg-[#9DD9FF] text-[#1D2B53] 
                   rounded-lg font-semibold shadow-lg 
                   ring-1 ring-blue-500 flex items-center justify-center 
                   min-w-[160px] transition-all duration-300 ease-in-out
                   hover:scale-105 active:scale-95"
        >
          <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-0.5">
            {toggle === 0 ? "Switch to Emoticon" : "Switch to Text Styler"}
          </span>
        </button>
      </div>

      <div className="relative">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isAnimating ? "opacity-90 scale-99" : "opacity-100 scale-100"
          }`}
        >
          {toggle === 0 ? <TextStyler /> : <Emoticon />}
        </div>
      </div>
    </div>
  );
}

export default App;
