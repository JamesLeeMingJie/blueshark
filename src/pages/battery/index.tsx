import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Collapsible from '../../components/Common/Collapsible/index';
import styles from '../../styles/Background.module.css';

// Images
import petrolMotorcycle from '../../../public/images/battery/petrol-motorcycle.png';
import evMotorcycle from '../../../public/images/battery/blueshark-ev-motorcycle.png';
import smallBatteryIcon from '../../../public/images/battery/battery-icon.png';
import smallPetrolIcon from '../../../public/images/battery/petrol-icon.png';
import smallChargingIcon from '../../../public/images/battery/charging-icon.png';
import exclamationIcon from '../../../public/icons-new/exclamation-icon.svg';

// import mainBg from '../../../public/background/battery-bg.jpg';
// import mainBgMobile from '../../../public/background/battery-bg-mobile.jpg';
// import blueSharkBg from '../../../public/background/blueshark-bg.png';
// import blueSharkBgMobile from '../../../public/background/blueshark-mobileBg.png';

import batteryKV from '../../../public/revampImages/battery-kvImage.png';
import iconPhone from '../../../public/revampImages/icon-phone.png';
import batteryVertical from '../../../public/revampImages/battery-vertical.png';
import batteryStation from '../../../public/revampImages/battery-station.png';
// import batteryStationMobile from '../../../public/revampImages/battery-station.png';
import iconGoogle from '../../../public/revampImages/google-play.png';
import iconApp from '../../../public/revampImages/app-store.png';
import iconQR1 from '../../../public/revampImages/icon-qr1.png';
import iconQR2 from '../../../public/revampImages/icon-qr2.png';
import lifespanIcon from '../../../public/revampImages/lifespan-icon.png';
import batteryIcon from '../../../public/revampImages/battery-icon.png';
import dualIcon from '../../../public/revampImages/dual-icon.png';
import cycleIcon from '../../../public/revampImages/cycle-icon.png';

// import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import { GrCircleInformation } from 'react-icons/gr';

import BackToTop from '../../components/Common/BackToTop';

export default function BatteryPage() {
  const [addLocation, setAddLocation] = useState(false);

  const toggle = () => {
    setAddLocation(!addLocation);
  };

  console.log(toggle);

  // Mobile popovers
  const [popover1, setPopover1] = useState(false);
  const [popover2, setPopover2] = useState(false);
  const [popover3, setPopover3] = useState(false);
  const [popover4, setPopover4] = useState(false);
  const [popover5, setPopover5] = useState(false);
  const [popover6, setPopover6] = useState(false);
  const [popover7, setPopover7] = useState(false);
  const [popover8, setPopover8] = useState(false);

  // Desktop popovers
  const [popoverDesktop1, setPopoverDesktop1] = useState(false);
  const [popoverDesktop2, setPopoverDesktop2] = useState(false);
  const [popoverDesktop3, setPopoverDesktop3] = useState(false);
  const [popoverDesktop4, setPopoverDesktop4] = useState(false);
  const [popoverDesktop5, setPopoverDesktop5] = useState(false);
  const [popoverDesktop6, setPopoverDesktop6] = useState(false);
  const [popoverDesktop7, setPopoverDesktop7] = useState(false);
  const [popoverDesktop8, setPopoverDesktop8] = useState(false);

  return (
    <div>
      <Head>
        <title>Smart Energy</title>
      </Head>

      <section>
        <div className={`h-screen ${styles.batteryBackground}`}>
          <div className="sm:w-10/12 md:w-8/12 mx-auto flex text-center">
            <div className="pt-[10rem] text-white">
              <div className="text-title font-bold text-primary pb-8">Electrifying. Empowering.</div>
              <div className="text-body1 text-black">
                We lead the charge in making green mobility and energy accessible to all. Seamlessly swap to a charged
                and ready-to-go clean energy source. All in under 10 seconds, anytime across locations near you.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:block lg:hidden">
        <p className="text-h2 text-primary w-10/12 mx-auto py-16 leading-tight">Travel Cost Comparison</p>
        <div className="w-10/12 mx-auto grid grid-cols-3 grid-rows-[80px_60px_1fr_80px_80px_80px_80px_80px_80px] rounded-[5px] mb-20 border-b-[1px] overflow-visible">
          {/* First row */}
          <div className="bg-secondary text-travel-title-white flex items-center text-center p-4">
            Petrol Motorcycle
          </div>
          <div className="bg-secondary text-travel-title-white flex items-center text-center p-4">
            EV (Home Charging)
          </div>
          <div className="bg-secondary text-travel-title-white flex items-center text-center p-4">
            EV (BlueSwap Plan)
          </div>

          {/* Second row */}
          <div className="col-span-3 text-travel-title-black bg-[#F2F2F2] flex items-center px-6">
            Calculation Method
          </div>

          {/* Third row */}
          <div className="col-span-1 flex items-center justify-center text-travel-title-blue py-12 border-x-[1px]">
            <div className="px-4 grid gap-y-2">
              <p>Average Travel Cost</p>
              <div>
                = 45km/L petrol
                <span
                  className="relative pl-4 mobile-popover-adjustment"
                  onMouseEnter={() => setPopover7(true)}
                  onMouseLeave={() => setPopover7(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover7 && (
                    <p className="absolute top-[165%] right-[-130%] basic-box-shadow rounded-[5px] bg-secondary smalltext-body-white-bold p-4 whitespace-nowrap">
                      (RON95 @ RM2.05/L)
                    </p>
                  )}
                </span>
              </div>
              <p className="whitespace-nowrap">= RM0.046/km</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center text-travel-title-blue py-12">
            <div className="px-4 grid gap-y-2">
              <p>Average Travel Cost</p>
              <div>
                = Full Charge 110km
                <span
                  className="relative pl-4 mobile-popover-adjustment"
                  onMouseEnter={() => setPopover8(true)}
                  onMouseLeave={() => setPopover8(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover8 && (
                    <p className="absolute top-[165%] left-[-180%] basic-box-shadow rounded-[5px] bg-secondary smalltext-body-white-bold p-4 whitespace-nowrap">
                      (Average electricity tariff @ RM0.44/kWh)
                    </p>
                  )}
                </span>
              </div>
              <p>= RM0.012/km</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center text-center text-travel-title-blue py-12 border-x-[1px]">
            <div className="px-4">
              <p>Average Travel Cost depending on BlueSwap subscription plan</p>
            </div>
          </div>

          {/* Fourth row */}
          <div className="col-span-3 text-travel-title-black bg-[#F2F2F2] flex items-center px-6">
            <div>
              <p>Commute 60km/day</p>
              <p>(Annual travel distance: 21,900km)</p>
            </div>
          </div>

          {/* Fifth row */}
          <div className="text-center flex items-center justify-center text-travel-title-blue border-x-[1px]">
            RM1,007.40
          </div>
          <div className="text-center flex items-center justify-center text-travel-title-blue">
            <div>
              <p className="flex items-center justify-center gap-x-2">
                RM262.80
                <span
                  className="relative flex"
                  onMouseEnter={() => setPopover1(true)}
                  onMouseLeave={() => setPopover1(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover1 && (
                    <p className="absolute top-[150%] right-[-80%] basic-box-shadow rounded-[5px] bg-secondary text-travel-title-white p-4">
                      Saves RM744.60&nbsp;<span className="smalltext-body-white-bold ">/year</span>
                    </p>
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center flex items-center justify-center text-travel-title-blue border-x-[1px]">
            <div>
              <p className="flex items-center justify-center gap-x-2">
                RM708
                <span
                  className="relative flex"
                  onMouseEnter={() => setPopover2(true)}
                  onMouseLeave={() => setPopover2(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover2 && (
                    <p className="absolute top-[200%] right-[-70%] basic-box-shadow rounded-[5px] bg-secondary text-travel-title-white p-4">
                      Saves RM299.40 <span className="smalltext-body-white-bold ">/year</span>
                    </p>
                  )}
                </span>
              </p>
            </div>
          </div>

          {/* Sixth row */}
          <div className="col-span-3 text-travel-title-black bg-[#F2F2F2] flex items-center px-6">
            <div>
              <p>Lifestyle 120km/day</p>
              <p>(Annual travel distance: 43,800km)</p>
            </div>
          </div>

          {/* Seventh row */}
          <div className="text-center flex items-center justify-center text-travel-title-blue border-x-[1px]">
            RM2,014.80
          </div>
          <div className="text-center flex items-center justify-center text-travel-title-blue">
            <div>
              <p className="flex items-center justify-center gap-x-2">
                RM525.60
                <span
                  className="flex relative"
                  onMouseEnter={() => setPopover3(true)}
                  onMouseLeave={() => setPopover3(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover3 && (
                    <p className="absolute top-[200%] right-[-50%] basic-box-shadow rounded-[5px] bg-secondary text-travel-title-white p-4">
                      Saves RM1,489.20 <span className="smalltext-body-white-bold ">/year</span>
                    </p>
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center flex items-center justify-center text-travel-title-blue border-x-[1px]">
            <div>
              <p className="flex items-center justify-center gap-x-2">
                RM1,188
                <span
                  className="flex relative"
                  onMouseEnter={() => setPopover4(true)}
                  onMouseLeave={() => setPopover4(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover4 && (
                    <p className="absolute top-[200%] right-[-60%] basic-box-shadow rounded-[5px] bg-secondary text-travel-title-white p-4">
                      Saves RM826.80 <span className="smalltext-body-white-bold ">/year</span>
                    </p>
                  )}
                </span>
              </p>
            </div>
          </div>

          {/* Eighth row */}
          <div className="col-span-3 text-travel-title-black bg-[#F2F2F2] flex items-center px-6">
            <div>
              <p>Delivery 200km/day</p>
              <p>(Annual travel distance: 73,800km)</p>
            </div>
          </div>

          {/* Ninth row */}
          <div className="text-center flex items-center justify-center text-travel-title-blue border-x-[1px]">
            RM3,358.00
          </div>
          <div className="text-center flex items-center justify-center text-travel-title-blue">
            <div>
              <p className="flex items-center justify-center gap-x-2">
                RM885.60
                <span
                  className="flex relative"
                  onMouseEnter={() => setPopover5(true)}
                  onMouseLeave={() => setPopover5(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover5 && (
                    <p className="absolute top-[200%] right-[-50%] basic-box-shadow rounded-[5px] bg-secondary text-travel-title-white p-4">
                      Saves RM2,472.40 <span className="smalltext-body-white-bold">/year</span>
                    </p>
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className="text-center flex items-center justify-center text-travel-title-blue border-x-[1px]">
            <div>
              <p className="flex items-center justify-center gap-x-2">
                RM1,668
                <span
                  className="flex relative"
                  onMouseEnter={() => setPopover6(true)}
                  onMouseLeave={() => setPopover6(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popover6 && (
                    <p className="absolute top-[200%] right-[-10%] basic-box-shadow rounded-[5px] bg-secondary text-travel-title-white p-4">
                      Saves RM1,690 <span className="smalltext-body-white-bold ">/year</span>
                    </p>
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:hidden lg:block">
        <p className="text-h2 text-primary w-10/12 mx-auto py-20">Travel Cost Comparison</p>
        <div className="w-10/12 mx-auto grid grid-cols-8 grid-rows-[1fr_180px_80px_80px_80px] gap-4 pb-40 text-base">
          {/* First row */}
          <div className="col-start-3 col-end-5 col-span-2 basic-box-shadow rounded-[5px] py-12 grid grid-rows-[80px_1fr]">
            <div className="flex gap-x-4 items-center justify-center pb-8 px-8">
              <div>
                <Image src={smallPetrolIcon} width={50} height={55} alt="" />
              </div>
              <div>
                <p className="text-body-blue-bolder pb-2">Petrol Motorcycle</p>
                <p className="text-travel-title-blue">150cc & Below</p>
                <p className="text-travel-title-blue">Estimated 45km/L petrol</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src={petrolMotorcycle} width={140} height={110} alt="" />
            </div>
          </div>
          <div className="col-start-5 col-end-9 col-span-4 basic-box-shadow rounded-[5px] py-12 grid grid-rows-[80px_1fr]">
            <div className="flex gap-x-4 items-center justify-center pb-8">
              <div>
                <Image src={smallChargingIcon} width={30} height={55} alt="" />
              </div>
              <div>
                <p className="text-body-blue-bolder pb-2">Blueshark EV Motorcycle</p>
                <p className="text-travel-title-blue">Dual-battery of</p>
                <p className="text-travel-title-blue">48V x 30Ah = 2.88kWh</p>
              </div>
            </div>
            <div className="flex justify-center gap-x-8">
              <div>
                <Image src={evMotorcycle} width={150} height={110} alt="" />
              </div>
              <div className="pt-4">
                <Image src={smallBatteryIcon} width={100} height={100} alt="" />
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="bg-secondary text-travel-title-white px-4 py-12 text-center rounded-[5px] flex items-center justify-center basic-box-shadow">
            Purpose of usage
          </div>
          <div className="bg-secondary text-travel-title-white px-4 py-12 text-center rounded-[5px] flex items-center justify-center basic-box-shadow">
            Annual Travel Distance
          </div>
          <div className="col-span-2 flex items-center justify-center text-travel-title-blue py-12 rounded-[5px] basic-box-shadow">
            <div className="w-10/12 mx-auto grid gap-y-2">
              <p>Average Travel Cost</p>
              <div className="flex items-center">
                = 45km/L petrol
                <p
                  className="relative flex pl-4"
                  onMouseEnter={() => setPopoverDesktop7(true)}
                  onMouseLeave={() => setPopoverDesktop7(false)}
                >
                  <Image src={exclamationIcon} alt="" />

                  {popoverDesktop7 && (
                    <p className="absolute top-0 right-0 translate-x-[110%] basic-box-shadow rounded-[5px] bg-secondary smalltext-body-white-bold whitespace-nowrap px-6 py-4">
                      (RON95 @ RM2.05/L)
                    </p>
                  )}
                </p>
              </div>
              <p>= RM0.046/km</p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 grid-rows-[30px_1fr] gap-y-4">
            <div className="bg-secondary text-travel-title-white px-4 py-4 justify-center rounded-[5px] flex items-center basic-box-shadow">
              Home Charging
            </div>
            <div className="col-span-2 flex items-center justify-center text-travel-title-blue py-12 rounded-[5px] basic-box-shadow">
              <div className="w-10/12 mx-auto grid gap-y-2">
                <p>Average Travel Cost</p>
                <div className="flex items-center">
                  = Full Charge 110km
                  <p
                    className="relative flex pl-4"
                    onMouseEnter={() => setPopoverDesktop8(true)}
                    onMouseLeave={() => setPopoverDesktop8(false)}
                  >
                    <Image src={exclamationIcon} alt="" />

                    {popoverDesktop8 && (
                      <p className="absolute top-0 right-0 translate-x-[105%] basic-box-shadow rounded-[5px] bg-secondary smalltext-body-white-bold whitespace-nowrap px-6 py-4">
                        (Average electricity tariff @ RM0.44/kWh)
                      </p>
                    )}
                  </p>
                </div>
                <p>= RM0.012/km</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-1 grid-rows-[30px_1fr] gap-y-4">
            <div className="bg-secondary text-travel-title-white px-4 py-4 justify-center rounded-[5px] flex items-center basic-box-shadow">
              BlueSwap Plan
            </div>
            <div className="col-span-2 flex items-center text-center text-travel-title-blue py-12 rounded-[5px] basic-box-shadow">
              <div className="w-8/12 mx-auto">
                <p className="leading-tight">Average Travel Cost depending on BlueSwap subscription plan</p>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="text-center flex items-center justify-center rounded-[5px] basic-box-shadow">
            <div>
              <p className="pb-2 text-body-blue-bolder">Commute</p>
              <span className="text-body-grey-bold">
                60
                <span className="smalltext-body-grey-bold inline-block -translate-y-2">km</span>
                <span className="smalltext-body-grey-bold inline-block translate-y-1">/day</span>
              </span>
            </div>
          </div>
          <div className="text-center flex items-center justify-center text-body-blue-bold rounded-[5px] basic-box-shadow">
            <div>
              21,900
              <span className="smalltext-body-blue-bold inline-block translate-y-2">km</span>
            </div>
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow text-body-blue-bold">
            RM1,007.40
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow bg-secondary text-body-white-bold">
            <div className="flex items-center">
              <p className="leading-normal pr-4">RM262.80</p>
              <p
                className="relative flex"
                onMouseEnter={() => setPopoverDesktop1(true)}
                onMouseLeave={() => setPopoverDesktop1(false)}
              >
                <Image src={exclamationIcon} alt="" />

                {popoverDesktop1 && (
                  <p className="absolute top-0 right-0 translate-x-[110%] basic-box-shadow rounded-[5px] bg-white text-travel-title-blue px-8 py-4 leading-tight">
                    Saves RM744.60&nbsp;<span className="smalltext-body-blue-bold">/year</span>
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow bg-secondary text-body-white-bold">
            <div className="flex items-center">
              <p className="leading-normal pr-4">RM708</p>
              <p
                className="relative flex"
                onMouseEnter={() => setPopoverDesktop2(true)}
                onMouseLeave={() => setPopoverDesktop2(false)}
              >
                <Image src={exclamationIcon} alt="" />

                {popoverDesktop2 && (
                  <p className="absolute top-0 right-0 translate-x-[110%] basic-box-shadow rounded-[5px] bg-white text-travel-title-blue px-8 py-4 leading-tight">
                    Saves RM299.40&nbsp;<span className="smalltext-body-blue-bold ">/year</span>
                  </p>
                )}
              </p>
            </div>
          </div>

          {/* Fourth row */}
          <div className="text-center flex items-center justify-center rounded-[5px] basic-box-shadow">
            <div>
              <p className="pb-2 text-body-blue-bolder">Lifestyle</p>
              <span className="text-body-grey-bold">
                120
                <span className="smalltext-body-grey-bold inline-block -translate-y-2">km</span>
                <span className="smalltext-body-grey-bold inline-block translate-y-1">/day</span>
              </span>
            </div>
          </div>
          <div className="text-center flex items-center justify-center text-body-blue-bold rounded-[5px] basic-box-shadow">
            <div>
              43,800
              <span className="smalltext-body-blue-bold inline-block translate-y-2">km</span>
            </div>
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow text-body-blue-bold">
            RM2,014.80
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow bg-secondary text-body-white-bold">
            <div className="flex items-center">
              <p className="leading-normal pr-4">RM525.60</p>
              <p
                className="relative flex"
                onMouseEnter={() => setPopoverDesktop3(true)}
                onMouseLeave={() => setPopoverDesktop3(false)}
              >
                <Image src={exclamationIcon} alt="" />

                {popoverDesktop3 && (
                  <p className="absolute top-0 right-0 translate-x-[110%] basic-box-shadow rounded-[5px] bg-white text-travel-title-blue px-8 py-4 leading-tight">
                    Saves RM1,489.20&nbsp;<span className="smalltext-body-blue-bold ">/year</span>
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow bg-secondary text-body-white-bold">
            <div className="flex items-center">
              <p className="leading-normal pr-4">RM1,188</p>
              <p
                className="relative flex"
                onMouseEnter={() => setPopoverDesktop4(true)}
                onMouseLeave={() => setPopoverDesktop4(false)}
              >
                <Image src={exclamationIcon} alt="" />

                {popoverDesktop4 && (
                  <p className="absolute top-0 right-0 translate-x-[110%] basic-box-shadow rounded-[5px] bg-white text-travel-title-blue px-8 py-4 leading-tight">
                    Saves RM826.80&nbsp;<span className="smalltext-body-blue-bold ">/year</span>
                  </p>
                )}
              </p>
            </div>
          </div>

          {/* Fifth row */}
          <div className="text-center flex items-center justify-center rounded-[5px] basic-box-shadow">
            <div>
              <p className="pb-2 text-body-blue-bolder">Delivery</p>
              <span className="text-body-grey-bold">
                200
                <span className="smalltext-body-grey-bold inline-block -translate-y-2">km</span>
                <span className="smalltext-body-grey-bold inline-block translate-y-1">/day</span>
              </span>
            </div>
          </div>
          <div className="text-center flex items-center justify-center text-body-blue-bold rounded-[5px] basic-box-shadow">
            <div>
              73,800
              <span className="smalltext-body-blue-bold inline-block translate-y-2">km</span>
            </div>
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow text-body-blue-bold">
            RM3,358.00
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow bg-secondary text-body-white-bold">
            <div className="flex items-center">
              <p className="leading-normal pr-4">RM885.60</p>
              <p
                className="relative flex"
                onMouseEnter={() => setPopoverDesktop5(true)}
                onMouseLeave={() => setPopoverDesktop5(false)}
              >
                <Image src={exclamationIcon} alt="" />

                {popoverDesktop5 && (
                  <p className="absolute top-0 right-0 translate-x-[110%] basic-box-shadow rounded-[5px] bg-white text-travel-title-blue px-8 py-4 leading-tight">
                    Saves RM2,472.40&nbsp;<span className="smalltext-body-blue-bold ">/year</span>
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className="col-span-2 text-center flex items-center justify-center rounded-[5px] basic-box-shadow bg-secondary text-body-white-bold">
            <div className="flex items-center">
              <p className="leading-normal pr-4">RM1,668</p>
              <p
                className="relative flex"
                onMouseEnter={() => setPopoverDesktop6(true)}
                onMouseLeave={() => setPopoverDesktop6(false)}
              >
                <Image src={exclamationIcon} alt="" />

                {popoverDesktop6 && (
                  <p className="absolute top-0 right-0 translate-x-[110%] basic-box-shadow rounded-[5px] bg-white text-travel-title-blue px-8 py-4 leading-tight z-40">
                    Saves RM1,690&nbsp;<span className="smalltext-body-blue-bold ">/year</span>
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white lg:h-[70vh] sm:pb-20 3xl:pb-0">
        {/* Hot fix z-index below */}
        <div className="sm:w-full lg:w-6/12 float-left h-full flex items-center sm:pb-20 lg:pb-0 relative z-20">
          <Image src={batteryKV} alt="" />
        </div>
        <div className="sm:w-10/12 mx-auto lg:w-4/12 lg:float-left md:flex flex-col justify-center gap-y-4 h-full lg:pl-40">
          <div className="text-h2 text-primary font-bold leading-tight" data-aos="fade-up">
            Swap2Go
          </div>
          <div className="text-body2 text-black" data-aos="fade-up">
            Going from zero to full-power now takes only seconds, making for lightning-fast battery swaps. Way cleaner,
            quicker and easier than fuelling or charging. You&#39;re good to go minus the wait, fumes and fuss.
          </div>
        </div>
      </section>

      <section className="h-fit 3xl:h-[90vh] bg-white relative sm:pb-[15rem] 3xl:pb-0 mb-40">
        <div className="absolute sm:h-[90vh] md:h-screen 3xl:h-[90vh] sm:w-full lg:w-1/2 sm:top-0 3xl:top-[10%] right-0 bg-[#EEF5FF] lg:z-10 overflow-hidden"></div>
        <div className="h-full flex relative sm:flex-col lg:flex-row z-10 sm:w-10/12 lg:w-8/12 mx-auto sm:gap-y-16 md:gap-y-0">
          <div className="md:flex flex-5 flex-col items-center md:justify-center sm:pt-12 lg:pt-0">
            <div className="flex flex-col w-full gap-y-4 pb-20">
              <div className="flex w-full justify-between">
                {/* before:w-full before:absolute before:bg-[#FBEEB8] before:h-3/5 before:bottom-[10%] before:-z-10 */}
                <div className="text-primary text-h2 font-bold relative flex">Durable</div>
              </div>
              <div className="text-black text-body2">
                Blueshark&apos;s cutting-edge batteries have a lifespan 4 times longer than conventional batteries.
              </div>
              <div className="border-b-2 border-[#707070]"></div>
            </div>
            <div className="flex flex-col w-full gap-y-4 pb-20">
              <div className="flex w-full justify-between items-center">
                <div className="text-primary text-h2 font-bold relative flex">Efficient</div>
              </div>
              <div className="text-black text-body2">
                It only takes seconds to swap out a depleted battery for a freshly charged one. Plus, you can charge at
                home in just 3.5 hours with a charging cradle.
              </div>
              <div className="border-b-2 border-[#707070]"></div>
            </div>
            <div className="flex flex-col w-full gap-y-4">
              <div className="flex w-full justify-between items-center">
                <div className="text-primary text-h2 font-bold relative flex">State-of-the-art</div>
              </div>
              <div className="text-black text-body2">
                Blueshark batteries are smart batteries. 20 sets of sensors are embedded within a single battery pack
                that supply data to optimise your ride.
              </div>
              <div className="border-b-2 border-[#707070]"></div>
            </div>
          </div>
          <div className="flex-1 sm:hidden lg:block"></div>
          <div className="flex-6 h-full sm:hidden lg:flex">
            <div className="self-end md:scale-150 3xl:scale-110 md:translate-x-[25%] md:translate-y-[20%] 3xl:-translate-y-[10%]">
              <Image width={700} height={700} src={batteryVertical} alt="" />
            </div>
          </div>
        </div>

        {/* Desktop Features */}
        <div className="sm:hidden lg:flex sm:flex-col lg:flex-row justify-around sm:gap-y-20 absolute md:bottom-[-13%] 3xl:bottom-[-10%] w-full md:px-60 text-primary z-20">
          <div className="bg-[#2F619E] absolute w-10/12 z-20 py-[12rem] top-[-30%] rounded-[2rem] opacity-10 sm:hidden lg:block"></div>
          <div className="bg-white absolute w-10/12 z-10 py-[12rem] top-[-30%] rounded-[2rem] sm:hidden lg:block"></div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={60} src={lifespanIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">400%</div>
            <div className="text-body2 tracking-widest">More Lifespan</div>
          </div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={90} src={batteryIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">2,880 Wh</div>
            <div className="text-body2 tracking-widest">Dual-battery Capacity</div>
          </div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={80} src={dualIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">110km</div>
            <div className="text-body2 tracking-widest">Dual-battery Range</div>
          </div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={70} src={cycleIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">2000+</div>
            <div className="text-body2 tracking-widest">Charge Cycles</div>
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="sm:flex lg:hidden flex-col mt-[-10rem]">
        <div className="flex justify-center">
          <Image width={700} height={700} src={batteryVertical} alt="" />
        </div>
        <div className="flex flex-col w-full text-primary z-20 gap-y-12 pb-40 relative mt-[-10px]">
          {/* Mobile */}
          <div className="bg-[#2F619E] absolute w-10/12 z-20 h-[730px] left-[10%] top-[-6%] rounded-[2rem] opacity-10 sm:block lg:hidden"></div>
          <div className="bg-white absolute w-10/12 z-10 h-[730px] left-[10%] top-[-6%] rounded-[2rem] sm:block lg:hidden"></div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={60} src={lifespanIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">400%</div>
            <div className="text-body2">MORE LIFESPAN</div>
          </div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={90} src={batteryIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">2,880 Wh</div>
            <div className="text-body2">DUAL-BATTERY CAPACITY</div>
          </div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={80} src={dualIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">110km</div>
            <div className="text-body2">DUAL-BATTERY RANGE</div>
          </div>
          <div className="z-10 text-center">
            <div>
              <Image height={70} width={70} src={cycleIcon} alt="" />
            </div>
            <div className="text-h2 text-center font-bold">2000+</div>
            <div className="text-body2">CHARGE CYCLES</div>
          </div>
        </div>
      </section>

      <section className="h-fit bg-white pt-48 pb-20">
        <div className="flex sm:flex-col lg:flex-row h-full">
          <div className="flex-6 -translate-x-[10%] self-center sm:hidden lg:block">
            <Image src={batteryStation} alt="" />
          </div>
          <div className="flex-6 self-center sm:block lg:hidden">
            <Image src={batteryStation} alt="" />
          </div>
          <div className="flex flex-4 flex-col justify-center sm:py-20 md:pb-20 gap-y-8 sm:w-10/12 mx-auto lg:w-full">
            <div className="text-h2 text-primary font-bold">Search, Book and Swap2Go</div>
            <div className="text-body2 text-black">
              Our BlueStations are designed to provide a fast, secure and seamless way to refuel your EV. Now, power is
              within reach of every rider in Malaysia. Our BlueStations are placed in strategic locations for your
              convenience.
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </section>

      <section className="flex flex-col bg-white pb-40">
        <div className="w-10/12 mx-auto text-primary text-h2 md:text-center font-bold">
          Locate your nearest BlueStation below.
        </div>
        <div className="sm:w-10/12 md:w-8/12 mx-auto text-body2 py-12 md:text-center">
          The Blueshark ecosystem is rapidly expanding, growing as users grow, with new sites added every month. From
          big cities to small towns, you&#39;ll soon be limited only by where you don't want to go.
        </div>
        <div className="h-full sm:w-10/12 md:w-8/12 mx-auto flex flex-col gap-y-4">
          <Collapsible location="Selangor">
            <div className="text-body3 text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              {/* If scroll is needed use codes below */}
              {/* pverflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF] */}
              <ul className="list-disc px-16 h-fit">
                <div className="flex flex-col text-body3 pb-8">
                  <li className="text-custom-gray">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-body3 pb-8">
                  <li className="text-custom-gray">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-body3 pb-8">
                  <li className="text-custom-gray">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-body3 pb-8">
                  <li className="text-custom-gray">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                {/* <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div> */}
              </ul>
            </div>
          </Collapsible>
          {/* <Collapsible location="Kelantan">
            <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
              </ul>
            </div>
          </Collapsible>
          <Collapsible location="Johor">
            <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
              </ul>
            </div>
          </Collapsible>
          <Collapsible location="Negeri Sembilan">
            <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
              </ul>
            </div>
          </Collapsible>
          <Collapsible location="Kuala Lumpur">
            <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
              </ul>
            </div>
          </Collapsible>
          <Collapsible location="Kelantan">
            <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
              </ul>
            </div>
          </Collapsible>
          <Collapsible location="Johor">
            <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
              </ul>
            </div>
          </Collapsible>
          <Collapsible location="Negeri Sembilan">
            <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
              <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
              <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Desa Mentari</li>
                  <div>
                    Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya, Selangor
                  </div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Batu 3 Federal</li>
                  <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas Seksyen 13</li>
                  <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                </div>
                <div className="flex flex-col text-base">
                  <li className="font-bold">Petronas USJ 6</li>
                  <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                </div>
              </ul>
            </div>
          </Collapsible> */}

          {/* {addLocation && (
            <div className="flex flex-col gap-y-4">
              <Collapsible location="Kelantan">
                <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
                  <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
                  <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                  </ul>
                </div>
              </Collapsible>
              <Collapsible location="Johor">
                <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
                  <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
                  <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                  </ul>
                </div>
              </Collapsible>
              <Collapsible location="Negeri Sembilan">
                <div className="text-base text-left text-black w-full py-4 px-8 mt-4 rounded-[1rem] bg-[#F5FBFF] relative">
                  <div className="absolute h-full sm:w-[2%] md:w-[0.8%] bg-[#0192F3] py-4 left-0 top-0 rounded-l-[1rem]"></div>
                  <ul className="list-disc px-16 h-[190px] overflow-auto scrollbar-thin scrollbar-thumb-rounded-[1rem] scrollbar-thumb-[#CFCFCF]">
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Desa Mentari</li>
                      <div>
                        Address: Lot PT 621, HS(D) 173396, Jalan Klang Lama, Taman Desaria, 46150 Petaling Jaya,
                        Selangor
                      </div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Batu 3 Federal</li>
                      <div>Address: Batu Tiga, Lebuhraya Persekutuan, 47500 Subang Jaya, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas Seksyen 13</li>
                      <div>Address: Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor</div>
                    </div>
                    <div className="flex flex-col text-base">
                      <li className="font-bold">Petronas USJ 6</li>
                      <div>Address: l. USJ 6/2j, Usj 6, 47500 Subang Jaya, Selangor</div>
                    </div>
                  </ul>
                </div>
              </Collapsible>
            </div>
          )} */}
        </div>
        {/* <div className="text-center my-20">
          <a
            className="text-base text-white font-bold rounded-[2rem] py-4 px-12 bg-[#0092F3] cursor-pointer"
            onClick={toggle}
          >
            {addLocation ? 'See Less' : 'See More'}
          </a>
        </div> */}
      </section>

      {/* bg-[#3165A4] */}

      <section className={`${styles.blueSharkBackground} h-fit py-20`}>
        <div className="sm:w-10/12 md:w-8/12 mx-auto h-full md:flex items-center">
          <div className="w-full xl:w-1/2 max-w-[45%] mx-auto lg:float-left text-center sm:pb-16 lg:pb-0 md:pr-8 xl:pr-0">
            <Image height={700} width={350} src={iconPhone} alt="" />
          </div>
          <div className="w-full xl:w-1/2 lg:float-left md:pl-8 xl:pl-0">
            <div className="text-h2 text-white font-bold leading-tight text-center pb-8">
              Power Up with <br /> the Blueshark Malaysia App
            </div>
            <div className="text-body2-white text-center pb-8">
              Plan your route, locate, book and Swap2Go. Check your stats and billing details. All in one always-on
              place. Just a few taps will take you wherever you want to go. Download the Blueshark app to get the most
              from your EV.
            </div>
            <div className="flex gap-x-4 items-center justify-around">
              <div className="flex flex-col items-center gap-y-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.my.bluesharkasean"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image height={70} src={iconGoogle} alt="" />
                </a>
                <div>
                  <Image height={190} width={190} src={iconQR1} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-8">
                <a href="https://apps.apple.com/vn/app/blueshark-asean/id6444028703" target="_blank" rel="noreferrer">
                  <Image height={70} src={iconApp} alt="" />
                </a>
                <div>
                  <Image height={190} width={190} src={iconQR2} alt="" />
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
