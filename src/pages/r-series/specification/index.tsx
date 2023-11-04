import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Images
import R1BrochureQR from '../../../../public/images/overview-new/r1-brochure-qr.png';
import R1PricingQR from '../../../../public/images/overview-new/r1-pricing-qr.png';

// Old assets
import blackBikeBg from '../../../../public/bikes/black-bikeBg.png';
import blueBikeBg from '../../../../public/bikes/blue-bikeBg.png';
import whiteBikeBg from '../../../../public/bikes/white-bikeBg.png';
import pinkBikeBg from '../../../../public/bikes/pink-bikeBg.png';
import brownBikeBg from '../../../../public/bikes/brown-bikeBg.png';
import beigeBikeBg from '../../../../public/bikes/beige-bikeBg.png';
import greenBikeBg from '../../../../public/bikes/green-bikeBg.png';
import greyBikeBg from '../../../../public/bikes/grey-bikeBg.png';

import DownloadPDF from '../../../components/Common/DownloadPDF';

// import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import BackToTop from '../../../components/Common/BackToTop';

export default function SpecificationsPage() {
  const [openTab, setOpenTab] = useState('blue');
  const [openTab2, setOpenTab2] = useState('black');

  const [performance, setPerformance] = useState(false);

  const togglePerformance = () => {
    setPerformance(!performance);
  };

  const [powerTrain, setPowerTrain] = useState(false);

  const togglePowerTrain = () => {
    setPowerTrain(!powerTrain);
  };

  const [brakes, setBrakes] = useState(false);

  const toggleBrakes = () => {
    setBrakes(!brakes);
  };

  const [dimension, setDimension] = useState(false);

  const toggleDimension = () => {
    setDimension(!dimension);
  };

  const [battery, setBattery] = useState(false);

  const toggleBattery = () => {
    setBattery(!battery);
  };

  const [smartFeatures, setSmartFeatures] = useState(false);

  const toggleSmartFeatures = () => {
    setSmartFeatures(!smartFeatures);
  };

  return (
    <div>
      <Head>
        <title>Blueshark R1 | Specifications</title>
      </Head>
      <section className="h-fit bg-white">
        <div className="text-title text-center font-bold pt-[14rem] pb-12 text-primary">Specifications</div>
        <div className="flex sm:w-11/12 md:w-8/12 mx-auto sm:gap-x-8 md:gap-x-28">
          <div className="flex flex-1 flex-col">
            <div>
              <div className={`bikeImage ${openTab === 'blue' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={blueBikeBg} alt="" />
              </div>
              <div className={`bikeImage ${openTab === 'black' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={blackBikeBg} alt="" />
              </div>
              <div className={`bikeImage ${openTab === 'white' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={whiteBikeBg} alt="" />
              </div>
              <div className={`bikeImage ${openTab === 'pink' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={pinkBikeBg} alt="" />
              </div>
              <div className={`bikeImage ${openTab === 'brown' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={brownBikeBg} alt="" />
              </div>
              <div className={`bikeImage ${openTab === 'beige' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={beigeBikeBg} alt="" />
              </div>
              <div className={`bikeImage ${openTab === 'green' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={greenBikeBg} alt="" />
              </div>
              <div className={`bikeImage ${openTab === 'grey' ? 'block shadowImage' : 'hidden'}`}>
                <Image height={700} src={greyBikeBg} alt="" />
              </div>
              <div className="text-primary text-h3 font-bold">R1</div>
            </div>

            {/* Left tabs */}
            <div className="flex flex-col text-body2 font-bold gap-y-8">
              <div className="flex sm:flex-col md:flex-row text-color-desc font-bold pt-12 gap-x-4 md:items-center">
                <span className="text-primary">Color:</span>
                {openTab === 'blue' && <div>Blueshark Blue</div>}
                {openTab === 'pink' && <div>Seashell Pink</div>}
                {openTab === 'brown' && <div>Coconut Brown</div>}
                {openTab === 'beige' && <div>Coastal Beige</div>}
                {openTab === 'green' && <div>Pine Green</div>}
                {openTab === 'black' && <div>Darksea Black</div>}
                {openTab === 'white' && <div>Spindrift White</div>}
                {openTab === 'grey' && <div>Inkstone Grey</div>}
              </div>
              <div className="flex flex-wrap gap-x-8 sm:gap-y-4">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('blue');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#0084A3] focus:ring-2 focus:ring-[#0084A3] border-[#0084A3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('black');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#3D3D3D] focus:ring-2 focus:ring-[#3D3D3D] border-[#3D3D3D] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('white');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-white focus:ring-2 focus:ring-blue-600 border-white focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('pink');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#E8AFC3] focus:ring-2 focus:ring-[#E8AFC3] border-[#E8AFC3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('brown');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#604C31] focus:ring-2 focus:ring-[#604C31] border-[#604C31] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('beige');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#EAE1C3] focus:ring-2 focus:ring-[#EAE1C3] border-[#EAE1C3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('green');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#004826] focus:ring-2 focus:ring-[#004826] border-[#004826] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab('grey');
                  }}
                >
                  <input
                    type="radio"
                    className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#8A878B] focus:ring-2 focus:ring-[#8A878B] border-[#8A878B] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                  ></input>
                </a>
              </div>
            </div>
            {/* End of left tabs */}
          </div>

          <div className="flex-1">
            {/* Right tabs */}
            <div className="flex flex-1 flex-col">
              <div>
                <div className={`bikeImage ${openTab2 === 'black' ? 'block shadowImage' : 'hidden'}`}>
                  <Image height={700} src={blackBikeBg} alt="" />
                </div>
                <div className={`bikeImage ${openTab2 === 'white' ? 'block shadowImage' : 'hidden'}`}>
                  <Image height={700} src={whiteBikeBg} alt="" />
                </div>
                <div className="text-primary text-h3 font-bold">R1 Lite</div>
              </div>
              <div className="flex flex-col text-body2 font-bold gap-y-8">
                <div className="flex sm:flex-col md:flex-row text-color-desc font-bold pt-12 gap-x-4 md:items-center">
                  <span className="text-primary">Color:</span>
                  {openTab2 === 'black' && <div>Darksea Black</div>}
                  {openTab2 === 'white' && <div>Spindrift White</div>}
                </div>
                <div className="flex flex-wrap gap-x-8 sm:gap-y-4">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab2('black');
                    }}
                  >
                    <input
                      type="radio"
                      className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-[#3D3D3D] focus:ring-2 focus:ring-[#3D3D3D] border-[#3D3D3D] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                    ></input>
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab2('white');
                    }}
                  >
                    <input
                      type="radio"
                      className="sm:h-[30px] sm:w-[30px] md:h-[50px] md:w-[50px] bg-white focus:ring-2 focus:ring-blue-600 border-white focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
                    ></input>
                  </a>
                </div>
              </div>
            </div>
            {/* End of right tabs */}
          </div>
        </div>

        <div className="sm:w-11/12 md:w-8/12 mx-auto py-20 flex flex-col gap-y-16">
          {/* Collapsibles */}
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={togglePerformance}>
              <div className="text-h3 text-primary font-bold">Performance</div>
              <div className="text-body3">
                {!performance && <FaChevronDown />}
                {performance && <FaChevronUp />}
              </div>
            </div>
            <div className="border-b-[1px] w-full border-[#707070]"></div>
            {performance && (
              <div className="text-body3 flex flex-col gap-y-8 pt-4">
                <div>
                  <div className="text-custom-gray font-bold">Maximum Speed</div>
                  <div>80km/h</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Climbing Ability</div>
                  <div>28&#176;</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={togglePowerTrain}>
              <div className="text-h3 text-primary font-bold">Powertrain</div>
              <div className="text-body3">
                {!powerTrain && <FaChevronDown />}
                {powerTrain && <FaChevronUp />}
              </div>
            </div>
            <div className="border-b-[1px] w-full border-[#707070]"></div>
            {powerTrain && (
              <div className="text-body3 flex flex-col gap-y-8 pt-4">
                <div>
                  <div className="text-custom-gray font-bold">Lock Rotor Peak Torque</div>
                  <div>201 N.m</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Peak Power</div>
                  <div>5000W High Speed Electric Permanent Magnet Gear Motor</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Motor Type</div>
                  <div>Side-hung gear motor</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Smart Central Control System</div>
                  <div>Automotive Dual ECUs + CAN Bus System</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleBrakes}>
              <div className="text-h3 text-primary font-bold">Brakes</div>
              <div className="text-body3">
                {!brakes && <FaChevronDown />}
                {brakes && <FaChevronUp />}
              </div>
            </div>
            <div className="border-b-[1px] w-full border-[#707070]"></div>
            {brakes && (
              <div className="text-body3 flex flex-col gap-y-8 pt-4">
                <div>
                  <div className="text-custom-gray font-bold">Brake System</div>
                  <div>Double Hydraulic Disc Brakes with CBS</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Tyre Size</div>
                  <div>Front 100/90/12 | Rear 120/70/12</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleDimension}>
              <div className="text-h3 text-primary font-bold">Dimensions & Weight</div>
              <div className="text-body3">
                {!dimension && <FaChevronDown />}
                {dimension && <FaChevronUp />}
              </div>
            </div>
            <div className="border-b-[1px] w-full border-[#707070]"></div>
            {dimension && (
              <div className="text-body3 flex flex-col gap-y-8 pt-4">
                <div>
                  <div className="text-custom-gray font-bold">Rated Load Capacity</div>
                  <div>Up to 200kg</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Vehicle Weight & Dimension</div>
                  <div>92kg | Width 700mm x Long 1880m x Tall 1200mm</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleBattery}>
              <div className="text-h3 text-primary font-bold">Battery</div>
              <div className="text-body3">
                {!battery && <FaChevronDown />}
                {battery && <FaChevronUp />}
              </div>
            </div>
            <div className="border-b-[1px] w-full border-[#707070]"></div>
            {battery && (
              <div className="text-body3 flex flex-col gap-y-8 pt-4">
                <div>
                  <div className="text-custom-gray font-bold">Dual Battery Capacity</div>
                  <div>2,880 wh</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Dual Battery Range</div>
                  <div>110 km (NEDC Ratings)</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Battery Charging Time</div>
                  <div>3.5 hours from 0% to 100%</div>
                </div>
                <div>
                  <div className="text-custom-gray font-bold">Battery Management System</div>
                  <div>Optical Communication Multi-battery Management System</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleSmartFeatures}>
              <div className="text-h3 text-primary font-bold">Smart Features</div>
              <div className="text-body3">
                {!smartFeatures && <FaChevronDown />}
                {smartFeatures && <FaChevronUp />}
              </div>
            </div>
            <div className="border-b-[1px] w-full border-[#707070]"></div>
            {smartFeatures && (
              <div className="text-body3 flex flex-col gap-y-8 pt-4">
                <div className="text-custom-gray font-bold">Dual-direction Boost Assist</div>
                <div className="text-custom-gray font-bold">Passive Keyless Entry</div>
                <div className="text-custom-gray font-bold">GPS + Beidou + 4G Positioning System</div>
                <div className="text-custom-gray font-bold">OTA Upgrade for All Functions</div>
                <div className="text-custom-gray font-bold">Front, Rear Cameras & Radar Sensors</div>
                <div className="flex gap-x-24">
                  <div className="flex flex-1 flex-col gap-y-8">
                    <div>
                      <div className="text-h4 text-primary font-bold pb-4">R1</div>
                      <div className="border-b-2 w-full border-[#6EB0FF]"></div>
                    </div>
                    <div>
                      <div className="text-custom-gray font-bold">Sensors</div>
                      <div>74</div>
                    </div>
                    <div>
                      <div className="text-custom-gray font-bold">Instrument Cluster</div>
                      <div>10” full-colour HD IPS Screen</div>
                    </div>
                    <div>
                      <div className="text-custom-gray font-bold">Smart Operating System</div>
                      <div>ArkRide™ Smart Operating System</div>
                    </div>
                    <div>
                      <div className="text-custom-gray font-bold">ADAS</div>
                      <div>Dual Cameras & Dual Ultrasonic Sensors</div>
                    </div>
                    <div>
                      <div className="text-custom-gray font-bold">GPS</div>
                      <div>On-Scooter Navigation</div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-y-8">
                    <div>
                      <div className="text-h4 text-primary font-bold pb-4">R1 Lite</div>
                      <div className="border-b-2 w-full border-[#6EB0FF]"></div>
                    </div>
                    <div>
                      <br />
                      <div>68</div>
                    </div>
                    <div>
                      <br />
                      <div>10” mono-colour LED Screen</div>
                    </div>
                    <div>
                      <br />
                      <div>-</div>
                    </div>
                    <div>
                      <br />
                      <div>-</div>
                    </div>
                    <div>
                      <br />
                      <div>-</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#EEF5FF]">
          <div className="sm:w-11/12 md:w-8/12 mx-auto pt-20 pb-16 flex flex-col gap-y-8">
            <div className="text-primary text-h3">Pricing</div>
            <div className="flex gap-x-24">
              <div className="flex-1">
                <div className="text-primary text-h4 font-bold pb-4">R1</div>
                <div className="border-b-2 w-full border-[#808080]"></div>
              </div>
              <div className="flex-1">
                <div className="text-primary text-h4 font-bold pb-4">R1 Lite</div>
                <div className="border-b-2 w-full border-[#808080]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="text-body3">Vehicle Only</div>
              <div className="text-primary text-h4 font-bold flex gap-x-24">
                <div className="flex-1">RM 9,390*</div>
                <div className="flex-1">RM 7,190*</div>
              </div>
            </div>
            <div className="text-body4 italic flex flex-col mt-[-2rem]">
              <div>*Dual-battery rental at RM79/month only</div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="text-body3">With dual batteries</div>
              <div className="text-primary text-h4 font-bold flex gap-x-24">
                <div className="flex-1">RM 14,800</div>
                <div className="flex-1">RM 12,600</div>
              </div>
            </div>
            <div className="text-body4 text-black">
              <div className="pb-4">Applicable for all purchases:</div>
              <ul className="list-disc pl-8">
                <li>Selling price excluding insurance, JPJ inspection fee, number plate and stamp duty.</li>
                <li>Complimentary 2 Remote controls + Portable inverter charging kit + 2 Battery charging cradles</li>
              </ul>
            </div>
            <div className="flex justify-center sm:gap-x-20 md:gap-x-40 mt-8">
              <div className="flex flex-col items-center gap-y-12">
                <div className="rounded-[7px] overflow-hidden">
                  <Image height={190} width={190} src={R1BrochureQR} alt="" />
                </div>
                <div>
                  <DownloadPDF
                    filePath="/pdf/R1-brochure.pdf"
                    fileName="R1-brochure.pdf"
                    downloadText={
                      <>
                        Download <br className="sm:block md:hidden" /> R1 Specs
                      </>
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-12">
                <div className="rounded-[7px] overflow-hidden">
                  <Image height={190} width={190} src={R1PricingQR} alt="" />
                </div>
                <div>
                  <DownloadPDF
                    filePath="/pdf/pricing-brochure.pdf"
                    fileName="pricing-brochure.pdf"
                    downloadText={
                      <>
                        Download <br className="sm:block md:hidden" /> R1 Pricing
                      </>
                    }
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
