import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';

import blackBike from '../../../public/bikes/black-bike.png';
import whiteBike from '../../../public/bikes/white-bike.png';
import blueBike from '../../../public/bikes/blue-bike.png';
import pinkBike from '../../../public/bikes/pink-bike.png';
import brownBike from '../../../public/bikes/brown-bike.png';
import beigeBike from '../../../public/bikes/beige-bike.png';
import greenBike from '../../../public/bikes/green-bike.png';
import greyBike from '../../../public/bikes/grey-bike.png';

const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const tickTriangle = {
    background: 'white',
    clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
  };

  const tickTriangleAlt = {
    background: 'black',
    clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
  };

  console.log(tickTriangle, tickTriangleAlt);

  const [openTab, setOpenTab] = useState('blue');

  return (
    <div className="bg-[#F2F2F2] py-20">
      <div className="text-center pb-28 sm:w-10/12 md:w-8/12 mx-auto">
        <div className=" text-black">
          <div className="text-title text-primary leading-tight font-bold pb-8">The next gen has arrived.</div>
          <div className="text-body1">Tech innovation, green energy, smart solutions, cutting edge design.</div>
        </div>
        <div className="flex-6"></div>
      </div>
      <div className="h-full w-10/12 mx-auto flex sm:flex-col md:flex-row items-center sm:gap-y-8">
        <div className="flex-6" data-aos="fade-up">
          <div className={openTab === 'blue' ? 'block' : 'hidden'}>
            <Image src={blueBike} alt="" />
          </div>
          <div className={openTab === 'black' ? 'block' : 'hidden'}>
            <Image src={blackBike} alt="" />
          </div>
          <div className={openTab === 'white' ? 'block' : 'hidden'}>
            <Image src={whiteBike} alt="" />
          </div>
          <div className={openTab === 'pink' ? 'block' : 'hidden'}>
            <Image src={pinkBike} alt="" />
          </div>
          <div className={openTab === 'brown' ? 'block' : 'hidden'}>
            <Image src={brownBike} alt="" />
          </div>
          <div className={openTab === 'beige' ? 'block' : 'hidden'}>
            <Image src={beigeBike} alt="" />
          </div>
          <div className={openTab === 'green' ? 'block' : 'hidden'}>
            <Image src={greenBike} alt="" />
          </div>
          <div className={openTab === 'grey' ? 'block' : 'hidden'}>
            <Image src={greyBike} alt="" />
          </div>
        </div>
        <div className="flex-0.5"></div>
        <div className="flex sm:flex-col-reverse md:flex-col gap-y-6 flex-5 text-black">
          <div className="text-h2 text-primary leading-tight font-bold sm:hidden md:block" data-aos="fade-up">
            Find your match.
          </div>
          <div className="text-body2" data-aos="fade-up">
            Striking, subtle or somewhere in between? The R1 comes with 8 colour options to suit your style.
          </div>
          <div className="flex text-color-desc text-[#666666] font-bold gap-x-4 items-center" data-aos="fade-up">
            <span className="text-color-desc text-primary">Color:</span>
            {openTab === 'blue' && <div>Blueshark Blue</div>}
            {openTab === 'pink' && <div>Seashell Pink</div>}
            {openTab === 'brown' && <div>Coconut Brown</div>}
            {openTab === 'beige' && <div>Coastal Beige</div>}
            {openTab === 'green' && <div>Pine Green</div>}
            {openTab === 'black' && <div>Darksea Black</div>}
            {openTab === 'white' && <div>Spindrift White</div>}
            {openTab === 'grey' && <div>Inkstone Grey</div>}
          </div>
          <div className="text-h2 text-primary leading-tight font-bold sm:block md:hidden" data-aos="fade-up">
            Go green with 8 colours.
          </div>
          <div className="flex flex-wrap gap-x-8 sm:gap-y-4" data-aos="fade-up">
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab('blue');
              }}
            >
              <input
                type="radio"
                className="h-[50px] w-[50px] bg-[#0084A3] focus:ring-2 focus:ring-[#0084A3] border-[#0084A3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
              >
                {/* {openTab === 'blue' && (
                  <div className="absolute top-0 right-0 w-[45%] h-[45%] text-[8px] ml-auto" style={tickTriangle}>
                    <FontAwesomeIcon icon={faCheck} className="float-right p-1" />
                  </div>
                )} */}
              </input>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab('black');
              }}
            >
              <input
                type="radio"
                className="h-[50px] w-[50px] bg-[#3D3D3D] focus:ring-2 focus:ring-[#3D3D3D] border-[#3D3D3D] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
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
                className="h-[50px] w-[50px] bg-white focus:ring-2 focus:ring-blue-600 border-white focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
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
                className="h-[50px] w-[50px] bg-[#E8AFC3] focus:ring-2 focus:ring-[#E8AFC3] border-[#E8AFC3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
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
                className="h-[50px] w-[50px] bg-[#604C31] focus:ring-2 focus:ring-[#604C31] border-[#604C31] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
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
                className="h-[50px] w-[50px] bg-[#EAE1C3] focus:ring-2 focus:ring-[#EAE1C3] border-[#EAE1C3] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
              >
              </input>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab('green');
              }}
            >
              <input
                type="radio"
                className="h-[50px] w-[50px] bg-[#004826] focus:ring-2 focus:ring-[#004826] border-[#004826] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
              >
              </input>
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab('grey');
              }}
            >
              <input
                type="radio"
                className="h-[50px] w-[50px] bg-[#8A878B] focus:ring-2 focus:ring-[#8A878B] border-[#8A878B] focus:border-white focus:border-2 rounded-full shadow-lg cursor-pointer relative overflow-hidden"
              >
              </input>
            </a>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex-0.5"></div>
      </div>
    </div>
  );
};

export default AboutSection;
