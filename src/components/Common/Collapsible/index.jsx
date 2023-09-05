import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Collapsible(props) {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle} className="flex justify-between items-center text-h3 text-left font-bold w-full py-4 px-16 rounded-[1rem] relative bg-[#F5FBFF]">
        <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 rounded-l-[1rem]"></div>
        <div>{props.location}</div>
        <div>
          {!open && <FaChevronDown />}
          {open && <FaChevronUp />}
        </div>
      </button>
      {open && (
        <div>
          {props.children}
        </div>
      )}
    </div>
  );
}
