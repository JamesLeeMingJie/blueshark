import React from 'react';
import Image from 'next/image';

import bluesharkLogo from '../../../public/images/fav-logo.png';

import { HiOutlineExternalLink } from 'react-icons/hi';

export default function News({ img, description, day, source }) {
  return (
    <div className={`flex cursor-pointer flex-col h-full`}>
      {/* I don't understand why the image can't be filled */}
      <div className="articleImage">
        <img src={img} className='w-full h-[200px]' />
      </div>
      <div className="flex-1 px-8 py-4 bg-[#FBF5FF] mt-[-3px]">
        <div className="flex items-center text-[14px] gap-x-4">
          {source === 'external' ? (
            <HiOutlineExternalLink />
          ) : (
            <Image src={bluesharkLogo} width={14} height={14} alt="" />
          )}
          <p className="italic text-primary py-4">{day}</p>
        </div>
        <div className="pb-4">
          <p className="text-h4">{description}</p>
        </div>
      </div>
    </div>
  );
}
