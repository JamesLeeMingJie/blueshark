import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from '../../../styles/Background.module.css';

// Images
import KVBike from '../../../../public/images/pricing/pricing__bike-white.png';
import R1BrochureQR from '../../../../public/images/overview-new/r1-brochure-qr.png';
import R1PricingQR from '../../../../public/images/overview-new/r1-pricing-qr.png';

// Icons
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import exclamationIcon from '../../../../public/icons-new/exclamation-icon.svg';

// Custom components
import DownloadPDF from "components/Common/DownloadPDF";

/***** Old assets below, to categorised based on images/pageName *****/

// import bikePurchase from '../../../../public/revampImages/bike-purchase.png';
// import bikeTop from '../../../../public/revampImages/bike-top.png';
import cimbBikes from '../../../../public/revampImages/cimb-bikes.png';
import duoBikes from '../../../../public/revampImages/plans-duoBikes.png';
// import plansFeatureModes from "../../../../public/revampImages/plans-featureModes.png";
import duoBikesRight from "../../../../public/revampImages/plans-duoBikesRight.png";
import batteryMain from "../../../../public/revampImages/battery-image.png";
// import blueSwapPlan from "../../../../public/revampImages/blueswap-plan.png";
import iconPhone from "../../../../public/revampImages/icon-phone.png";
// import iconGoogle from "../../../../public/revampImages/google-play.png";
// import iconApp from "../../../../public/revampImages/app-store.png";
// import iconQR1 from "../../../../public/revampImages/icon-qr1.png";
// import iconQR2 from "../../../../public/revampImages/icon-qr2.png";

import iconFlux from "../../../../public/revampImages/flux-logo.png";
// import iconCIMB from "../../../../public/revampImages/cimb-logo.png";

import BackToTop from '../../../components/Common/BackToTop';
// import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Link from "next/link";

function BuyPricing() {
  return (
    <div className="grid grid-cols-2 sm:w-[310px] md:w-[350px]">
      <div className="border-r-2 border-[#808080]">
        <div className="text-black text-body1">
          R1
        </div>
        <div className="text-h2 leading-tight">
          RM14,800
        </div>
      </div>
      <div className="pl-8">
        <div className="text-black text-body1">
          R1 Lite
        </div>
        <div className="text-h2 leading-tight">
          RM12,600
        </div>
      </div>
    </div>
  );
}

function RentPricing() {
  return (
    <div className="grid grid-cols-2 sm:w-[310px] md:w-[350px]">
      <div className="border-r-2 border-[#808080]">
        <div className="text-black text-body1">
          R1
        </div>
        <div className="text-h2 leading-tight">
          RM9,390
        </div>
      </div>
      <div className="pl-8">
        <div className="text-black text-body1">
          R1 Lite
        </div>
        <div className="text-h2 leading-tight">
          RM7,190
        </div>
      </div>
    </div>
  );
}

function BatteryPricing({ buyOrRent }) {
  const [popover1, setPopover1] = useState(false);
  const [popover2, setPopover2] = useState(false);

  return (
    <div>
      <div className="text-primary text-title font-bold pb-4 fadeIn">
        {buyOrRent === "buy" ? <BuyPricing /> : <RentPricing />}
      </div>

      {buyOrRent === "buy" &&
        (<ul className="list-none text-body3">
          <li className="flex items-center pb-4 gap-x-4">
            <AiFillCloseCircle className="text-[#ff4f4e] text-[28px] my-auto" /> Not entitled for BlueSwap service
          </li>
          <li className="flex items-center pb-4 gap-x-4">
            <AiFillCheckCircle className="text-[#3ada80] text-[28px] my-auto" /> Free portable battery charging kit
          </li>
          <li className="flex items-center pb-4 gap-x-4">
            <AiFillCheckCircle className="text-[#3ada80] text-[28px] my-auto" /> Includes dual-batteries with warranty (T&C apply)
          </li>
          <li className="grid grid-cols-[15px_1fr]">
            <span>*</span>
            <span className="italic">
              Selling price excluding insurance, JPJ inspection fee, number plate and stamp duty.
            </span>
          </li>
        </ul>)}

      {/* list-none is not necessary, but for backup just in case Tailwind base styles fail */}
      {buyOrRent === "rent" &&
        (<ul className="list-none text-body3">
          <li className="flex items-center pb-4 gap-x-4 relative">
            <AiFillCheckCircle className="text-[#3ada80] text-[28px] my-auto" /> Rent your batteries for RM79/month

            <span className="relative">
              <Image onMouseEnter={() => setPopover1(true)} onMouseLeave={() => setPopover1(false)} src={exclamationIcon} alt="" />

              {/* First popover */}
              {popover1 && (
                <div className="absolute top-0 right-0 md:translate-x-[110%] sm:translate-y-[25%] md:translate-y-[-5%] w-[300px] z-10">
                  <div className="text-[14px] font-normal text-white bg-[#30629F] py-4 px-8 rounded-[15px]">
                    Our flexible BlueSwap battery subscription plans means that you will never need to worry about battery lifespan or warranty. Let us manage the batteries while you enjoy the latest battery technology and you can still unsubscribe anytime.
                  </div>
                </div>
              )}
            </span>
          </li>
          <li className="flex items-center pb-4 gap-x-4">
            <AiFillCheckCircle className="text-[#3ada80] text-[28px] my-auto" /> Option for BlueSwap subscription
          </li>
          <li className="flex items-center justify-center pb-4 gap-x-4">
            <AiFillCheckCircle className="text-[#3ada80] text-[28px] my-auto" /> Free portable battery charging kit
            <span className="relative">
              <Image onMouseEnter={() => setPopover2(true)} onMouseLeave={() => setPopover2(false)} src={exclamationIcon} alt="" />

              {/* Second popover */}
              {popover2 && (
                <div className="absolute top-0 right-0 md:translate-x-[110%] sm:translate-y-[35%] md:translate-y-[-5%] w-[250px] z-10">
                  <div className="text-[14px] font-normal text-white bg-[#30629F] py-4 px-8 rounded-[15px]">
                    Inclusive of battery rental with a security deposit of RM250, refundable upon cancellation of subscription.
                  </div>
                </div>
              )}
            </span>

          </li>
          <li className="grid grid-cols-[15px_1fr]">
            <span>*</span>
            <span className="italic">
              Selling price excluding insurance, JPJ inspection fee, number plate and stamp duty.
            </span>
          </li>
        </ul>)}

    </div>
  );
}

export default function PricingPage() {
  const [buyOrRent, setBuyOrRent] = useState("buy");

  return (
    <div className="relative">
      <Head>
        <title>Blueshark R1 | Pricing</title>
      </Head>

      <section>
        <div className={`sm:h-fit md:h-screen sm:pb-20 md:pb-0 ${styles.pricingBackground}`}>
          {/* flex sm:flex-col md:flex-row */}
          <div className="sm:w-10/12 lg:w-8/12 mx-auto text-left items-center sm:pt-[40%] md:pt-[17%] lg:pt-0 lg:flex lg:h-full">
            <div className="w-full lg:w-5/12">
              <div className="text-primary text-title font-bold">
                Own the R1 series
              </div>
              <div className="text-black text-body2 pb-8">
                Choose to rent or buy with batteries*
              </div>
              <div className="flex pb-8">
                <button onClick={() => setBuyOrRent("buy")} className={`${buyOrRent === "buy" ? "bg-primary text-white" : "bg-transparent text-primary"} text-button hover:text-white hover:bg-primary border-2 border-primary transition ease-in duration-200 cta font-bold mr-8`}>Buy Batteries</button>

                <button onClick={() => setBuyOrRent("rent")} className={`${buyOrRent === "rent" ? "bg-primary text-white" : "bg-transparent text-primary"} text-button hover:text-white hover:bg-primary border-2 border-primary transition ease-in duration-200 cta font-bold`}>Rent Batteries</button>
              </div>
              <BatteryPricing buyOrRent={buyOrRent} />
              <div className="sm:block mobileOnly pt-12">
                <Image src={KVBike} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="lg:h-[70vh] 3xl:pb-0 sm:pb-20 md:pb-0">
        <div className="sm:w-full lg:w-6/12 float-left h-full flex items-center">
          <Image src={duoBikes} alt="" />
        </div>
        <div className="sm:w-10/12 mx-auto lg:w-4/12 lg:float-left md:flex flex-col justify-center gap-y-4 h-full lg:pl-40">
          <div className="pb-8 md:pb-0 text-h2 text-primary font-bold leading-tight" data-aos="fade-up">
            Buy To Own
          </div>
          <div className="text-body2" data-aos="fade-up">
            Option to purchase with battery, or rent the batteries from us at RM79 per month!
          </div>
          <div className="flex flex-col pt-8" data-aos="fade-up">
            <div className="pb-4 md:pb-0 text-custom-gray">
              As Low As
            </div>
            <div className="pb-8 md:pb-0 text-title text-primary font-bold">
              RM7,190
            </div>
          </div>
          <div data-aos="fade-up">
            <Link href="/r-series/form">
              <button className="text-button text-primary hover:text-white bg-transparent hover:bg-primary border-2 border-primary transition ease-in duration-200 cta font-bold">I'm interested</button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* <section className="relative">
        <div className={`lg:h-[90vh] ${styles.cimbBackground} mb-20`}>
          <div className="lg:w-2/12 lg:float-left sm:hidden lg:block">&nbsp;</div>
          <div className="sm:w-10/12 mx-auto lg:w-5/12 lg:float-left h-full items-center lg:hidden flex py-20">
            <Image src={cimbBikes} alt="" />
          </div>
          <div className="sm:w-10/12 mx-auto lg:w-4/12 lg:float-left md:flex flex-col justify-center gap-y-4 h-full">
            <div className="flex sm:flex-col md:flex-row md:items-center gap-x-8 text-h2 text-primary font-bold leading-tight" data-aos="fade-up">
              <div className="whitespace-nowrap">
                Own Yours with
              </div>
              <div>
                <Image width={400} height={70} src={iconCIMB} alt="" />
              </div>
            </div>
            <div className="text-body2" data-aos="fade-up">
              Exclusive offer for all CIMB credit cardholders! <br className="hidden lg:block" /> Purchase the Blueshark R Series Smart<br className="hidden lg:block" /> Electric Scooter with <span className="font-bold">CIMB 0% Easy Pay Plan</span><br className="hidden lg:block" /> now (up to 60-months instalment payment <br className="hidden lg:block" /> plan available. Terms & Conditions apply.)
            </div>
            <div data-aos="fade-up">
              <div className="text-custom-gray">
                Starting From
              </div>
              <div className="text-title text-primary font-bold">
                RM120<span className="text-body1 text-black font-normal">/month</span>
              </div>
            </div>
            <div data-aos="fade-up">
              <Link href="/r-series/form">
                <button className="text-button text-primary hover:text-white bg-transparent hover:bg-primary cta border-primary transition ease-in duration-200 font-bold z-10">I'm interested</button>
              </Link>
            </div>
          </div>
          <div className="sm:w-full lg:w-5/12 lg:float-left h-full items-center hidden lg:flex">
            <Image src={cimbBikes} alt="" />
          </div>
        </div>
      </section> */}

      <section className="sm:w-10/12 md:w-11/12 mx-auto xl:flex items-center py-20">
        <div className="sm:w-7/12 md:w-3/12 3xl:w-2/12 2xl:float-left mx-auto pb-12 xl:pb-0">
          <Image
            src={batteryMain}
            alt=""
          />
        </div>
        <div className="w-full 3xl:w-10/12 xl:float-left lg:pl-20">
          <div className="text-h2 text-primary font-bold leading-tight pb-4" data-aos="fade-up">
            BlueSwap Subscription Plans
          </div>
          <div className="text-body2 pb-4" data-aos="fade-up">
            Optional Battery Swap Pricing (per month)
          </div>

          {/* Desktop / Tablet */}
          <div className="sm:hidden md:flex items-center justify-between text-white relative h-[24vh]" data-aos="fade-up">
            <div className="absolute left-0 bg-primary w-full h-full rounded-[2rem] -z-10"></div>
            <div className="absolute left-0 bg-white opacity-10 w-full h-full rounded-[2rem]"></div>
            <div className="tracking-widest flex-1 flex flex-col items-center justify-center h-full">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Lite</span>
              </div>
              <div className="text-title font-bold">
                RM59
              </div>
              <div className="text-h4">
                FOR 36X SWAPS
              </div>
            </div>
            <div className="sm:border-b-2 md:border-l-2 md:border-b-0 sm:w-[20rem] md:w-0 md:h-[10rem] border-white"></div>
            <div className="tracking-widest flex-1 flex flex-col items-center justify-center h-full">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Standard</span>
              </div>
              <div className="text-title font-bold">
                RM99
              </div>
              <div className="text-h4">
                FOR 70X SWAPS
              </div>
            </div>
            <div className="sm:border-b-2 md:border-l-2 md:border-b-0 sm:w-[20rem] md:w-0 md:h-[10rem] border-white"></div>
            <div className="tracking-widest flex-1 flex flex-col items-center justify-center h-full">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Pro</span>
              </div>
              <div className="text-title font-bold">
                RM139
              </div>
              <div className="text-h4">
                FOR 120X SWAPS
              </div>
            </div>
            <div className="sm:border-b-2 md:border-l-2 md:border-b-0 sm:w-[20rem] md:w-0 md:h-[10rem] border-white"></div>
            <div className="tracking-widest flex-1 flex flex-col items-center justify-center h-full">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Flex</span>
              </div>
              <div className="text-title font-bold">
                RM1.95
              </div>
              <div className="text-h4">
                PAY-PER-SWAP
              </div>
            </div>
            <div className="sm:border-b-2 sm:w-[20rem] md:w-0 border-white md:hidden"></div>
          </div>

          {/* Mobile */}
          <div className="sm:flex md:hidden sm:flex-col md:flex-row sm:justify-around md:justify-between text-white relative sm:py-20 md:py-12 px-12 3xl:px-16 items-center text-center gap-y-20 " data-aos="fade-up">
            <div className="absolute left-0 bg-primary w-full h-full rounded-[2rem] -z-10"></div>
            <div className="absolute left-0 bg-white opacity-10 w-full h-full rounded-[2rem]"></div>
            <div className="flex flex-col tracking-widest">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Lite</span>
              </div>
              <div className="text-title font-bold">
                RM59
              </div>
              <div className="text-h4">
                FOR 36X SWAPS
              </div>
            </div>
            <div className="sm:border-b-2 md:border-l-2 md:border-b-0 sm:w-[20rem] md:w-0 md:h-[10rem] border-white"></div>
            <div className="flex flex-col tracking-widest">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Standard</span>
              </div>
              <div className="text-title font-bold">
                RM99
              </div>
              <div className="text-h4">
                FOR 70X SWAPS
              </div>
            </div>
            <div className="sm:border-b-2 md:border-l-2 md:border-b-0 sm:w-[20rem] md:w-0 md:h-[10rem] border-white"></div>
            <div className="flex flex-col tracking-widest">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Pro</span>
              </div>
              <div className="text-title font-bold">
                RM139
              </div>
              <div className="text-h4">
                FOR 120X SWAPS
              </div>
            </div>
            <div className="sm:border-b-2 md:border-l-2 md:border-b-0 sm:w-[20rem] md:w-0 md:h-[10rem] border-white"></div>
            <div className="flex flex-col tracking-widest">
              <div className="text-body2-white">
                BlueSwap<span className="italic">Flex</span>
              </div>
              <div className="text-title font-bold">
                RM1.95
              </div>
              <div className="text-h4">
                PAY-PER-SWAP
              </div>
            </div>
            <div className="sm:border-b-2 sm:w-[20rem] md:w-0 border-white md:hidden"></div>
          </div>
        </div>
      </section>

      <section className="lg:h-[70vh] pb-20">
        <div className="lg:w-2/12 lg:float-left sm:hidden lg:block">&nbsp;</div>
        <div className="sm:w-10/12 mx-auto lg:w-4/12 lg:float-left md:flex flex-col justify-center gap-y-4 h-full lg:pr-40">
          <div className="flex sm:flex-col md:flex-row md:items-center gap-x-8 text-h2 text-primary font-bold leading-tight" data-aos="fade-up">
            <div>
              Rent with
            </div>
            <div className="pb-8 md:pb-0">
              <Image width={200} height={80} src={iconFlux} alt="" />
            </div>
          </div>
          <div className="text-body2 pb-8 md:pb-0" data-aos="fade-up">
            Streamlined vehicle subscription plans with FLUX Malaysia with the option to purchase at the end.
          </div>
          <div data-aos="fade-up">
            <div className="text-custom-gray pb-4 md:pb-0">
              As Low As
            </div>
            <div className="text-title text-primary font-bold pb-8 md:pb-0">
              RM358<span className="text-body1 text-black font-normal">/month</span>
            </div>
          </div>
          <div className="pb-8 md:pb-0" data-aos="fade-up">
            <a href="https://driveflux.com/motorcycles/kuala-lumpur--malaysia?planType=plan60" target="_blank" rel="noreferrer">
              <button className="text-button text-primary hover:text-white bg-transparent hover:bg-primary cta border-primary transition ease-in duration-200font-bold">Subscribe now</button>
            </a>
          </div>
          <div className="text-body2" data-aos="fade-up">
            For corporate rental rates, contact us <a className="cursor-pointer text-blue" href="/contact" target="_blank" rel="noreferrer">here</a>.
          </div>
        </div>
        <div className="sm:w-full lg:w-6/12 lg:pl-40 lg:float-left h-full flex items-center">
          <Image src={duoBikesRight} alt="" />
        </div>
      </section>

      {/* <section className="sm:h-[25vh] md:h-[60vh] -skew-y-[15deg] sm:py-40 md:py-0 sm:mt-[20rem] md:mt-[-15rem] 3xl:mt-[-40rem] relative -z-10">
        <div className="absolute min-w-[20%] max-w-[75%] 3xl:w-[30%] top-0 right-[12%] md:right-[10rem] skew-y-[15deg] -translate-y-[65%] 3xl:scale-110 3xl:-translate-x-[20%] 3xl:-translate-y-[65%]">
          <Image
            src={plansFeatureModes}
            alt=""
          />
        </div>
      </section> */}

      {/* bg-[#3165A4] */}

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
      <BackToTop />
    </div>
  );
}
