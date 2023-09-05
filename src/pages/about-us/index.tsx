import Aos from 'aos';
import 'aos/dist/aos.css';
import { useGetResourceInfinite } from 'apis/aboutus';
import { useWindowSize } from 'hooks/useWindowSize';
import { get, isArray, isEmpty } from 'lodash';
import { ADMINRESOURCE } from 'models/const';
import { IResource } from 'models/menu';
import Head from 'next/head';
import React, { useEffect, Fragment, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/About.module.css';
import stylesBg from '../../styles/Background.module.css';

import BackToTop from '../../components/Common/BackToTop';

import placeholderImage from '../../../public/revampImages/cimb-logo.png';
import placeholderImage2 from '../../../public/logo.svg';
import Image from 'next/image';

const AboutUsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [size] = useWindowSize();
  const { ref: lastItem, inView } = useInView();
  console.log(lastItem);
  const {
    status,
    data: resourceAboutPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetResourceInfinite({ type: ADMINRESOURCE.aboutus });
  console.log(status);

  useEffect(() => {
    const pages = get(resourceAboutPage, 'pages');
    const lastPage = isArray(pages) ? pages[pages.length - 1] : null;

    if (inView && !isFetchingNextPage && !isEmpty(resourceAboutPage) && !isEmpty(get(lastPage, 'items', []))) {
      fetchNextPage();
    }
  }, [inView]);

  const resourceFAQs = useMemo(() => {
    return get(resourceAboutPage, 'pages', []);
  }, [resourceAboutPage]);

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <section className={`h-screen ${stylesBg.aboutBackground} text-white relative`}>
        <div className="relative text-center sm:w-10/12 md:w-8/12 mx-auto h-full flex flex-col justify-center">
          <div data-aos="fade-down" className="text-title font-semibold">
            About Blueshark Malaysia
          </div>
          <p data-aos="fade-up" className="font-normal text-body1-white mt-3">
            Blueshark will place the most advanced EV technology, features and aesthetics within reach of people from
            all walks of life. Powered by renewable energy, we revolutionise urban mobility for the world, making
            everyday life safer, cleaner and more inspiring, for everyone.
          </p>
        </div>
      </section>
      <div className="bg-[#020D14] sm:py-[2rem] md:py-[7rem]">
        {resourceFAQs.map((page: any, index: number) => {
          return (
            <Fragment key={`page_${page?.meta?.currentPage}_${index}`}>
              {get(page, 'items', []).map((about: IResource) => {
                return (
                  <div key={about.id} className="text-left ">
                    <div className="sm:w-10/12 sm:mx-auto md:w-8/12 text-h2 font-semibold text-white sm:leading-[26px] md:leading-[40px]">
                      {get(about, 'title', '_')}
                    </div>
                    <p className="sm:w-10/12 sm:mx-auto md:w-8/12 text-white font-inter text-body2-white leading-[24px] font-normal m-5 rm-reset-list">
                      Blueshark is an Electric Vehicle (EV) tech mobility company pioneering electromobility and
                      game-changing energy solutions for the world. We power smart mobility and swappable energy
                      solutions by leading the charge on green mobility and green energy for all. We aspire to be the
                      most valuable two-wheeled electric vehicle company ever, with much more to come.
                      <br></br>
                      <br></br>
                      As the Malaysian subsidiary of Sharkgulf Technologies Group, we are driven by our technology
                      leadership with over 130 invention patents filed, Internet of Vehicles, smart partnerships and
                      innovations in renewable energy solutions. Our rapidly expanding global footprint brings us closer
                      to our vision of transforming lives as we transform human mobility, empowering microenterprises
                      and encouraging EV adoption and infrastructure, while saving the planet.
                    </p>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
        <div
          className={
            'mx-auto sm:w-10/12 md:w-8/12 mt-[4rem] relative h-fit text-right flex sm:flex-col lg:flex-row pb-20 gap-y-20 gap-x-20'
          }
        >
          <div className={`min-w-[40%] ${styles.bike}`}>
            <img src="/images/about-us/bike.svg" alt="bike" />
          </div>
          <div
            className={`${styles.bikeQuote} ${
              size > 1420 ? 'w-[51%]' : 'w-full'
            } bg-dark-blue-gradient rounded-[30px] px-[12%] flex z-10`}
          >
            {/* absolute sm:translate-y-[-40%] md:translate-y-0 md:-translate-x-[45%] z-10 */}

            <div className="flex flex-col">
              <div className="flex flex-col">
                <img className="w-[25%]" src="/images/about-us/doublequote.svg" alt="double quote icon" />
                <p className="mb-6 text-body2-white md:leading-[26px] font-normal text-left mt-6">
                  In October, 2020, the Blueshark R1 proudly won Good Design Award 2020.
                </p>
              </div>
              <img src="/images/about-us/award.svg" alt="Good Design Award 2020" />
            </div>
          </div>
        </div>
        <BackToTop />
      </div>
      {/* <section className="py-20">
        <div className="text-center text-h2 text-primary">Our Partner</div>
        <div className="sm:w-10/12 md:w-8/12 mx-auto bg-white">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-20">
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-20 ">
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-20 ">
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
                <div>
                  <Image src={placeholderImage} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUsPage;
