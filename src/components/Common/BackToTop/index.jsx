import React from 'react';
import { IoChevronUpCircleSharp } from 'react-icons/io5';

export default function BackToTop() {
  return (
    <div className="fixed bottom-[10%] right-[10%] z-30">
      <a href="#">
        {/* #414241 not nice */}
        <IoChevronUpCircleSharp className="text-[#0092F3] text-[50px] opacity-50" />
      </a>
    </div>
  );
}
