import Image from "next/image";
import Link from "next/link";
import React from "react";

import batteryMain from "../../../public/revampImages/battery-stationWhite.png";

export default function BatterySection() {
  return (
    <div className="bg-[#F2F2F2] pb-20 mt-[-1px]">
      <div className="h-full sm:w-10/12 md:w-9/12 mx-auto flex sm:flex-col-reverse md:flex-row items-center sm:gap-y-8">
        <div className="flex-1"></div>
        <div className="flex flex-4 flex-col gap-y-8">
          <div className="text-h2 text-primary leading-tight font-bold md:whitespace-nowrap" data-aos="fade-up">
            Swap2Go in a flash.
          </div>
          <div className="text-body2 text-black pb-4" data-aos="fade-up">
            With our patented battery technology, it only takes seconds to swap and go. We&apos;re building BlueStations across strategic locations to keep your journey smooth. Plus, you can charge at home in just 3.5 hours with a charging cradle.
          </div>
          <div data-aos="fade-up">
            <Link href="/battery">
              <button className="text-button text-primary hover:text-white bg-transparent hover:bg-primary border-2 border-primary transition ease-in duration-200 cta">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex-6">
          <Image
            src={batteryMain}
            alt=""
          />
        </div>
      </div>
    </div>

  );
};
