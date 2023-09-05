import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function CollapsibleBattery(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className='w-full'>
      <button onClick={toggle} className="flex w-full justify-between items-center">
        <div className="text-[#1C3D64] text-h1 font-bold relative flex md:before:w-[25%] 3xl:before:w-[20%] before:absolute before:bg-[#FBEEB8] before:h-3/5 before:bottom-0 before:-z-10">
          {props.benefit}
        </div>
        <div className='text-h2'><FaChevronDown /></div>
      </button>
      <div className="border-b-2 border-[#707070]"></div>
      {open && (
        <div>
          {props.children}
        </div>
      )}
    </div>
  );
};
