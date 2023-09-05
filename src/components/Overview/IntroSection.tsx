import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
// import Image from 'next/image';

// import mainBg from '../../../public/background/overview-bg.png';
// import mainBgMobile from '../../../public/background/overview-bg-mobile.png';
// import Link from 'next/link';

const IntroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section>
        <video
          className="sm:h-screen md:w-full md:aspect-video object-cover"
          src={require('../../../public/video/blueshark-video.mp4')}
          controls
          controlsList="nodownload"
          autoPlay
          muted
        >
          Sorry, your browser doesn't suppport videos
        </video>
      </section>
      <section>
        {/* Desktop */}
        <div className="sm:hidden lg:block">
          <video
            className="h-screen w-full object-cover"
            src={require('../../../public/video/overview-videoDesktop.mp4')}
            autoPlay
            muted
            loop
          >
            Sorry, your browser doesn't suppport videos
          </video>
        </div>
        {/* Tablet */}
        <div className="sm:hidden md:block lg:hidden">
          <video
            className="h-screen w-full object-cover"
            src={require('../../../public/video/overview-videoTablet.mp4')}
            autoPlay
            muted
            loop
          >
            Sorry, your browser doesn't suppport videos
          </video>
        </div>

        {/* Mobile */}
        <div className="sm:block md:hidden">
          <video
            className="h-screen w-full object-cover"
            src={require('../../../public/video/overview-videoMobile.mp4')}
            autoPlay
            muted
            loop
          >
            Sorry, your browser doesn't suppport videos
          </video>
        </div>
        {/*
        <div className="text-center">
          <div className=" text-black">
            <div className="text-title leading-tight font-bold">
              The world's smartest <br className="sm:hidden md:block" /> electric scooter has arrived.
            </div>
            <div className="text-body1">
              Introducing the R1 Smart Electric Scooter from <br className="sm:hidden md:block" /> Blueshark - here to
              revolutionise the way you move <br className="sm:hidden md:block" /> and go places.
            </div>
          </div>
          <div className="flex-6"></div>
        </div>
        <div>
          <Link href="/r-series/form">
            <button className="text-base text-primary hover:text-white bg-transparent hover:bg-primary border-2 border-primary cta font-bold transition ease duration-200">
              Get in touch
            </button>
          </Link>
        </div>
        */}
      </section>
    </div>
  );
};

export default IntroSection;
