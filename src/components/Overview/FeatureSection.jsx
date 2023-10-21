import Image from "next/image";
import React from "react";

// Images
import bikeImage01 from "../../../public/images/overview-new/bike-image-01.jpg";
import bikeImage02 from "../../../public/images/overview-new/bike-image-02.jpg";
import featureGif from "../../../public/images/overview-new/feature-gif.gif";
import R1BrochureQR from '../../../public/images/overview-new/r1-brochure-qr.png';
import R1PricingQR from '../../../public/images/overview-new/r1-pricing-qr.png';

// import bikePurchase from '../../../public/revampImages/bike-purchase.png';
import featureFront1 from "../../../public/revampImages/feature-front1.jpg";
import featureFront2 from "../../../public/revampImages/feature-front2.jpg";
import featureADAS from "../../../public/revampImages/feature-adas.png";
import featureAI from "../../../public/revampImages/feature-ai.png";
// import iconGoogle from "../../../public/revampImages/google-play.png";
// import iconApp from "../../../public/revampImages/app-store.png";
// import iconQR1 from "../../../public/revampImages/icon-qr1.png";
// import iconQR2 from "../../../public/revampImages/icon-qr2.png";
import iconPhone from "../../../public/revampImages/icon-phone.png";

// import gradientBg from '../../../public/background/gradient-bg.png';
import kvfeatureBg from '../../../public/background/feature-kv.jpg';
import kvfeatureBgMobile from '../../../public/background/feature-kvMobile.jpg';
import featureBg from '../../../public/background/feature-bg.png';
import styles from '../../styles/Background.module.css';

// import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import BackToTop from '../../components/Common/BackToTop';
import DownloadPDF from "components/Common/DownloadPDF";

export default function FeatureSection() {
  return (
    <div>
      <section className="bg-white md:mt-[-1px]">
        <div>
          <div className="relative">
            <div className="sm:hidden md:block mainImage">
              <Image src={kvfeatureBg} alt="" />
            </div>
            <div className="sm:block md:hidden">
              <Image src={kvfeatureBgMobile} alt="" />
            </div>

            <div className="h-full absolute sm:w-10/12 md:w-8/12 sm:top-[5%] md:top-[10%] left-1/2 translate-x-[-50%] flex flex-col flex-4 gap-y-8 items-center text-center 3xl:pt-12">
              <div className="text-title text-primary leading-tight font-bold" data-aos="fade-down">
                Smart OS for smart riders.
              </div>
              <div className="text-body1 text-black pb-4" data-aos="fade-up">
                The R1 comes loaded with tech, never-before-seen on scooters. Powered by ArkRide™ to keep your journeys smooth.
              </div>
            </div>
          </div>
        </div>

        <div className="py-40">
          <div className="sm:w-10/12 md:w-8/12 mx-auto flex flex-col gap-y-40">
            <div className="flex sm:flex-col lg:flex-row sm:gap-y-8">
              <div className="min-w-[45%] max-w-[75%] mx-auto flex-2 scale-110 shadowImageRight" data-aos="fade-up">
                <Image
                  src={bikeImage01}
                  alt=""
                />
              </div>
              <div className="flex-0.5"></div>
              <div className="flex flex-2 flex-col gap-y-8 justify-center relative" data-aos="fade-up">
                <div className="text-h2 text-primary font-bold">
                  HD display with real-time stats
                </div>
                <div className="text-body2 text-black">
                  10” full-colour HD interface with comprehensive displays from battery levels and speed to mileage and riding modes.
                </div>
                <div className="absolute text-gray-600 font-thin top-0 text-number sm:translate-x-[-15%] md:translate-x-[-25%] translate-y-[-25%] opacity-10">01</div>
              </div>
            </div>

            <div className="flex sm:flex-col-reverse lg:flex-row sm:gap-y-8">
              <div className="flex flex-2 flex-col gap-y-8 justify-center relative" data-aos="fade-up">
                <div className="text-h2 leading-tight font-bold text-primary" >
                  Built-in speakers for music playback
                </div>
                <div className="text-body2 pb-4">
                  Bluetooth connectivity allows you to ride to the beat of any music playback.
                </div>
                <div className="absolute text-gray-600 font-thin top-0 text-number sm:translate-x-[-15%] md:translate-x-[-25%] translate-y-[-25%] opacity-10">02</div>
              </div>
              <div className="flex-0.5"></div>
              <div className="min-w-[45%] max-w-[75%] mx-auto flex-2 scale-110 shadowImageLeft" data-aos="fade-up">
                <Image
                  src={bikeImage02}
                  alt=""
                />
              </div>
            </div>

            <div className="flex sm:flex-col lg:flex-row sm:gap-y-8">
              <div className="min-w-[45%] max-w-[75%] mx-auto flex-2 scale-110 shadowImageRight" data-aos="fade-up">
                <Image
                  src={featureAI}
                  alt=""
                />
              </div>
              <div className="flex-0.5"></div>
              <div className="flex flex-2 flex-col gap-y-8 justify-center relative" data-aos="fade-up">
                <div className="text-h2 text-primary leading-tight font-bold">
                  AI-driven range estimation
                </div>
                <div className="text-body2 text-black pb-4">
                  The R1 tells you precisely how much further you can go, based on intelligent calculations using speed, battery and environmental temperature data.
                </div>
                <div className="absolute text-gray-600 font-thin top-0 text-number sm:translate-x-[-15%] md:translate-x-[-25%] translate-y-[-25%] opacity-10">03</div>
              </div>
            </div>

            <div className="flex sm:flex-col-reverse lg:flex-row sm:gap-y-8">
              <div className="flex flex-2 flex-col gap-y-8 justify-center relative" data-aos="fade-up">
                <div className="text-h2 text-primary leading-tight font-bold">
                  Advanced Driver-Assistance Systems (ADAS)
                </div>
                <div className="text-body2 text-black pb-4">
                  ADAS tech isn&apos;t just for cars. The R1 uses cameras and sensors to help you see what you can&apos;t, so you&apos;re always safe and sound.
                </div>
                <div className="absolute text-gray-600 font-thin top-0 text-number sm:translate-x-[-15%] md:translate-x-[-25%] translate-y-[-25%] opacity-10">04</div>
              </div>
              <div className="flex-0.5"></div>
              <div className="min-w-[45%] max-w-[75%] mx-auto flex-2 scale-110 shadowImageLeft" data-aos="fade-up">
                <Image
                  src={featureADAS}
                  alt=""
                />
              </div>
            </div>

            <div className="flex sm:flex-col lg:flex-row sm:gap-y-8">
              <div className="min-w-[45%] max-w-[75%] mx-auto flex-2 scale-110 shadowImageRight" data-aos="fade-up">
                <Image
                  src={featureGif}
                  alt=""
                />
              </div>
              <div className="flex-0.5"></div>
              <div className="flex flex-2 flex-col gap-y-8 justify-center relative" data-aos="fade-up">
                <div className="text-h2 text-primary leading-tight font-bold">
                  5 Riding Modes
                </div>
                <div className="text-body2 text-black pb-4">
                  The R1 supports 5 riding modes: Eco, Comfort, Sport, Turbo and unique Move Assist Mode (MAM). Our Turbo goes from 0-50km/h in just 4.9s - just the right balance of speed and safety.
                </div>
                <div className="absolute text-gray-600 font-thin top-0 text-number sm:translate-x-[-15%] md:translate-x-[-25%] translate-y-[-25%] opacity-10">05</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.blueSharkBackground} h-fit py-20`}>
        <div className="sm:w-10/12 md:w-8/12 mx-auto h-full md:flex items-center">
          <div className="w-full xl:w-1/2 max-w-[45%] mx-auto lg:float-left text-center sm:pb-16 lg:pb-0 md:pr-8 xl:pr-0">
            <Image
              height={700}
              width={350}
              src={iconPhone}
              alt=""
            />
          </div>
          <div className="w-full xl:w-1/2 lg:float-left md:pl-8 xl:pl-0">
            <div className="text-h2 text-white font-bold leading-tight text-center pb-8">
              Discover Our Brochures & Pricing
            </div>
            <div className="text-body2-white text-center pb-8">
              Redefine and revolutionise sustainable mobility with our cutting-edge electric vehicles and innovative energy solutions. Download our brochures to learn more about the features, specifications, and pricing of our innovative R1 Smart Electric Scooter.
            </div>
            <div className="flex sm:gap-x-20 md:gap-x-4 items-center justify-around">
              <div className="flex flex-col items-center gap-y-8">
                {/* <a
                  href="https://play.google.com/store/apps/details?id=com.my.bluesharkasean"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image height={70} src={iconGoogle} alt="" />
                </a> */}
                <div className="rounded-[7px] overflow-hidden">
                  <Image height={190} width={190} src={R1BrochureQR} alt="" />
                </div>
                <div>
                  <DownloadPDF filePath="/pdf/R1-brochure.pdf" fileName="R1-brochure.pdf" downloadText={<>Download <br className="sm:block md:hidden" /> R1 Specs </>} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-8">
                {/* <a href="https://apps.apple.com/vn/app/blueshark-asean/id6444028703" target="_blank" rel="noreferrer">
                  <Image height={70} src={iconApp} alt="" />
                </a> */}
                <div className="rounded-[7px] overflow-hidden">
                  <Image height={190} width={190} src={R1PricingQR} alt="" />
                </div>
                <div>
                  <DownloadPDF
                    filePath="/pdf/pricing-brochure.pdf"
                    fileName="pricing-brochure.pdf"
                    downloadText={<>Download <br className="sm:block md:hidden" /> R1 Pricing </>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is the width too less? */}
      <section className="bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: `url(${featureBg.src})` }}>
        <div className="h-full sm:w-10/12 md:w-5/12 mx-auto flex flex-col items-center justify-center text-center text-white" data-aos="fade-up">
          <div className="text-title leading-tight pb-8 font-bold">
            Welcome to the Internet of Vehicles
          </div>
          <div className="text-body1-white">
            The Blueshark R1 integrates with the Internet of Vehicles (IoV), an AI-learning network that collects and analyses usage patterns between riders, vehicles and devices to better anticipate your needs. The more you ride, the better your scooter knows you.
          </div>
        </div>
      </section>
      <BackToTop />
    </div>
  );
};
