import Link from 'next/link';
import React from 'react';
// const advange = [
//   {
//     advange: '160 km Range * per fully charge',
//   },
//   {
//     advange: 'Top Speed: 80 km / h ',
//   },
//   {
//     advange: '5000W High-speed Electric Motor',
//   },
//   {
//     advange: 'Smart Central Control System: Dual ECUs + CAN Bus ',
//   },
//   {
//     advange: 'Blueshark Smart Operating System: ArkRideTM OS ',
//   },
// ];
interface BikeModel {
  img: string;
  model: string;
  title: string;
  description: string;
}
export default function Model({ model, img, title, description }: BikeModel) {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="h-[285px]">
          <img src="/images/Union.png" alt="" className="z-0 absolute " />
          <img src={img} alt="" width={'380px'} height="285px" className=" relative top-[10px] z-10" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" pl-[20px] lg:pl-[15px] xl:pl-[30px] ">
          <div className=" bg-[#28475c] rounded-[3px]  px-[9px] py-[1px] inline-block whitespace-nowrap mt-[30px]">
            <p className="text-[#F7D567] text-[12px] font-medium">{model}</p>
          </div>
          <div className="mt-[11px]">
            <p className="text-white text-[20px] font-semibold">{title}</p>
          </div>
          <div className=" mt-[15px] max-w-[353px]">
            <p
              className="font-normal text-[14px] text-[white] opacity-50 rm-reset-list"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
          <div className="mt-[30px]">
            <div className="flex ">
              <Link href={'/r-series'}>
                <a className="text-[#38BDF8]  text-[14px] font-bold cursor-pointer">Learn more</a>
              </Link>
              <div className="pt-[7px] pl-[11px]">
                <img src="/icons/arrow-right.svg" className="max-w-[13px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
