import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Swiper assets and libraries
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

// Images
import multipleBikes from '../../public/images/home-new/home__bike-multiple.png';
import cimbLogo from '../../public/revampImages/cimb-logo.png';

// Icon
import { BsExclamationCircle } from 'react-icons/bs';
import exclamationIcon from '../../public/icons-new/exclamation-icon.svg';

import mainBg from '../../public/background/main-bg.jpg';
import mainBgMobile from '../../public/background/main-bg-mobile.png';
import r1Text from '../../public/revampImages/R1-text.png';

import styles from '../styles/Background.module.css';

import BackToTop from 'components/Common/BackToTop';

const Home: NextPage = () => {
  const [popover, setPopover] = useState(false);

  return (
    <div>
      <Head>
        <title>Blueshark Malaysia</title>
        <meta
          name="description"
          content="Blueshark, an Electric Vehicle (EV) tech company, has arrived to make green vehicles and green energy
          accessible to all. Ride the tide with us as we revolutionise urban mobility."
          key="desc"
        />
        <meta name="facebook-domain-verification" content="xfga8s64g9kyo8qt2hpsnt40wal9r0" />
      </Head>
      {/* mt-[7rem] */}
      {/* <video
        className="sm:h-screen md:w-full md:aspect-video object-cover"
        src={require('../../public/video/blueshark-video.mp4')}
        controls
        controlsList="nodownload"
        autoPlay
        muted
      >
        Sorry, your browser doesn't suppport videos
      </video> */}
      <section>
        {/* <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide> */}
        <div
          className={`sm:pt-32 sm:pb-16 md:pb-0 md:pt-20 3xl:py-0 small-mobile-banner h-screen flex flex-col items-center justify-center ${styles.homeBackground}`}
        >
          <div className="sm:w-10/12 md:w-8/12 justify-center items-center text-center mx-auto home-title md:flex gap-x-8 pb-8 md:pb-4 md:mt-4 3xl:mt-0">
            Yours with
            <span className="sm:w-9/12 md:w-3/12 h-6/12 sm:mx-auto md:mx-0 flex">
              <Image src={cimbLogo} alt="" />
            </span>
            0% Easy Pay Plan
          </div>
          <div className="sm:w-10/12 md:w-8/12 text-center home-sub-title text-primary relative pb-8 md:pb-4">
            From As Low as RM4
            <span className="text-body1">
              /day
              <span
                className="inline-icons"
                onMouseEnter={() => setPopover(true)}
                onMouseLeave={() => setPopover(false)}
              >
                <span className="relative">
                  <Image src={exclamationIcon} alt="" />

                  {popover && (
                    <div className="absolute md:top-[-5px] right-0 sm:translate-y-[10%] md:translate-y-0 md:translate-x-[110%] w-[200px]">
                      <div className="text-[14px] font-normal text-white bg-[#30629F] py-4 px-8 rounded-[15px]">
                        Monthly instalments <br /> starting from RM120
                      </div>
                    </div>
                  )}
                </span>
              </span>
            </span>
          </div>
          <div className="sm:w-9/12 md:w-6/12 text-center home-tertiary-title pb-12 md:pb-8">
            Exclusive offer for all CIMB credit cardholders to purchase the Blueshark R Series Smart Electric Scooter
            with 0% interest for up to 60-months instalment plan.
          </div>
          <div className="sm:w-10/12 md:w-7/12 3xl:w-8/12 flex justify-center pb-12 relative">
            <Image src={multipleBikes} alt="" />
            <div className="absolute right-0 bottom-0 3xl:translate-x-[-10%] sm:hidden xl:block">
              <div className="px-16 py-4 rounded-[15px] bg-white home-promotion-text text-center shadow-lg">
                <span className="font-bold">
                  FREE 1 month <br /> dual-battery rental <br />
                </span>
                (T&C apply.)
              </div>
            </div>
          </div>
          <div className="px-16 py-4 rounded-[15px] bg-white home-promotion-text text-center shadow-lg sm:block xl:hidden mb-12">
            <span className="font-bold">
              FREE 1 month <br /> dual-battery rental <br />
            </span>
            (T&C apply.)
          </div>
          <div data-aos="fade-up">
            <Link href="/r-series/form">
              <button className="text-button text-primary hover:text-white bg-transparent hover:bg-primary border-2 border-primary transition ease-in duration-200 cta font-bold">
                I'm interested
              </button>
            </Link>
          </div>
        </div>
        {/* </SwiperSlide>
          <SwiperSlide>
            <div className="text-title h-screen flex items-center justify-center">Hello world!</div>
          </SwiperSlide>
        </Swiper> */}
      </section>

      <div className="relative sm:mt-[-7rem] md:mt-0">
        <div className="sm:hidden md:block mainImage">
          <Image src={mainBg} alt="" />
        </div>
        <div className="sm:block md:hidden mt-[7rem] mainImage">
          <Image className="w-full h-full" src={mainBgMobile} alt="" />
        </div>
        <div className="md:w-9/12 mx-auto flex items-center absolute sm:top-[6%] sm:left-[10%] md:top-[20%] md:left-[16%] ">
          <div className="flex flex-4 flex-col ml-4 gap-y-4 text-white">
            <div>
              <div>
                <Image src={r1Text} width={200} height={200} alt="" />
              </div>
              <div className="text-title leading-tight">
                Revolutionising <br className="sm:hidden md:block" /> Urban Mobility
              </div>
            </div>
            <div>
              <Link href="/r-series/overview">
                <button className="text-button text-white hover:text-black cta bg-transparent hover:bg-white border-2 border-white font-bold transition ease-in duration-200">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-0.5"></div>
          <div className="flex-8"></div>
        </div>
      </div>
      <div className="bg-home-about sm:bg-center bg-cover bg-no-repeat sm:[80vh] h-[80vh] text-white relative mt-[-7px]">
        <div className="sm:w-10/12 md:w-8/12 mx-auto h-full flex flex-col gap-y-4 justify-center text-center">
          <div className="text-title md:leading-[50px] md:text-[40px] font-semibold">About Blueshark Malaysia</div>
          <p className="leading-[26px] text-body1-white mx-auto">
            Blueshark, an Electric Vehicle (EV) tech company, has arrived to make green vehicles and green energy
            accessible to all. Ride the tide with us as we revolutionise urban mobility.
          </p>
          <Link href={'/about-us'}>
            <button className="text-button hover:text-black bg-transparent hover:bg-white border-white transition ease-in duration-200 cta md:w-auto mx-auto">
              Learn More
            </button>
          </Link>
        </div>
        <BackToTop />
      </div>
    </div>
  );
};

export default Home;
