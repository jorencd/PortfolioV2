import { Icon } from "@iconify/react";

function Techstack({ svg, text, darkMode }) {
  return (
    <div className={`flex p-2 flex-col items-center justify-center rounded-xl lg:size-20 size-17  ${darkMode ? "bg-[#1d242e]" : "bg-neutral-300"}`}>
      {svg}
      <p className="text-xs">{text}</p>
    </div>
  );
}

export default Techstack;
