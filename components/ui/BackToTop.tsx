"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 
                 p-3 sm:p-4 rounded-full 
                 border border-slate-800 
                 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                 bg-[length:200%_100%] animate-shimmer 
                 text-white shadow-lg 
                 hover:scale-110 active:scale-95 transition-transform 
                 focus:outline-none focus:ring-2 focus:ring-slate-400
                 min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label="Back to top"
    >
      <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
};

export default BackToTop;
