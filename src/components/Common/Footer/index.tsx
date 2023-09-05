import Image from 'next/image';

import iconGoogle from '../../../../public/revampImages/google-play.png';
import iconApp from '../../../../public/revampImages/app-store.png';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#000000] relative lg:h-[115px]">
      <div className="flex sm:flex-col md:flex-row justify-between sm:w-10/12 md:w-8/12 mx-auto pt-8">
        {/* ------------ LOGO -------------- */}
        <div className="text-white flex sm:flex-col md:flex-row items-center gap-x-4 gap-y-4">
          {/* <div>
            <img width={130} src="/blueshark-logo.svg" alt="blueshark logo" />
          </div>
          <div className="sm:border-b-[2px] md:border-b-0 sm:w-full md:w-0 md:border-l-[2px] md:h-[2rem] border-[#707070]"></div> */}
          <div className="text-[18px]">Ride the tide</div>
        </div>
        {/* ------------ DESKTOP MENU -------------- */}
        <div className="flex-col md:flex-row md:text-center flex items-center w-auto sm:mx-auto lg:m-0 sm:pb-8 md:pb-0 gap-y-8">
          <div className="mt-3 md:mt-0 flex items-center ">
            <a href="https://www.facebook.com/bluesharkmalaysia/" target={'_blank'} rel="noreferrer">
              <img className="mr-3 cursor-pointer text-white" src="/images/home/fb.svg" alt="facebook" />
            </a>
            <a href=" https://www.linkedin.com/company/bluesharkmalaysia/" target={'_blank'} rel="noreferrer">
              <img className="mr-3 cursor-pointer" src="/images/home/linkedin.svg" alt="linked in" />
            </a>
            <a href="https://www.instagram.com/bluesharkmalaysia/" target={'_blank'} rel="noreferrer">
              <img className="mr-6 cursor-pointer" src="/images/home/insta.svg" alt="insta" />
            </a>
            <a
              className="border-[1px] rounded-[5px] border-gray-800 mr-3"
              href="https://apps.apple.com/vn/app/blueshark-asean/id6444028703"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={100} height={35} src={iconApp} alt="" />
            </a>
            <a
              className="border-[1px] rounded-[5px] border-gray-800 mr-3"
              href="https://play.google.com/store/apps/details?id=com.my.bluesharkasean"
              target="_blank"
              rel="noreferrer"
            >
              <Image width={100} height={35} src={iconGoogle} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row items-center sm:gap-y-4 justify-between sm:w-10/12 md:w-8/12 mx-auto pt-4 pb-8">
        <div>
          <p className="text-normal font-inter text-[14px] leading-[21px] text-white">
            © 2023 Blueshark Asean All rights reserved.
          </p>
        </div>
        <div className="flex text-white text-[14px]">
          <Link href={'/about-us/terms-conditions'}>
            <a target="_blank" rel="noreferrer">
              <p className="px-5 py-[2px]">Terms & Conditions</p>
            </a>
          </Link>
          <Link href={'/about-us/privacy-policy'}>
            <a target="_blank" rel="noreferrer">
              <p className="px-5 py-[2px]">Privacy Policy</p>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
