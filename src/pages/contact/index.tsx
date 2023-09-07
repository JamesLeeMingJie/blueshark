// Packages
import Aos from 'aos';
import 'aos/dist/aos.css';
import type { NextPage } from 'next';
import React, { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head';

// Images
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { MdLocationOn } from 'react-icons/md';
// import contactBikes from '../../../../public/revampImages/contact-bikes.png';
import briefcaseIcon from '../../../public/revampImages/briefcase-icon.png';
import phoneIcon from '../../../public/revampImages/phone-icon.png';
import locationIcon from '../../../public/revampImages/location-icon.png';
// import emailIcon from '../../../public/revampImages/email-icon.png';
import Image from 'next/image';
import Swal from 'sweetalert2';

import { MdEmail } from 'react-icons/md';

// Icons
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { IoLocationOutline, IoClose } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';

// Data
import dealerData from '../../lib/dealer.json';

const ContactPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(dealerData.data);

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
    filteringData(value);
  };

  const filteringData = (input: any) => {
    const newData = dealerData.data.filter((item) => {
      return item.company_name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredData(newData);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const currentTimeDate = new Date().toLocaleString('en-GB');

  // Tabs
  const [firstTab, setFirstTab] = useState(true);
  const [secondTab, setSecondTab] = useState(false);
  const [thirdTab, setThirdTab] = useState(false);

  const [state, setState] = useState('');

  // Mobile Tab Options
  const toggleFirstCategory = () => {
    setFirstTab(true);
    setSecondTab(true);
    setThirdTab(true);
  };

  const toggleSecondCategory = () => {
    setFirstTab(false);
    setSecondTab(true);
    setThirdTab(false);
  };

  const toggleThirdCategory = () => {
    setFirstTab(false);
    setSecondTab(false);
    setThirdTab(true);
  };

  // Mobile Categories
  const [mobileCategory, setMobileCategory] = useState('');

  useEffect(() => {
    mobileCategory === 'firstMobileCategory' && toggleFirstCategory();
    mobileCategory === 'secondMobileCategory' && toggleSecondCategory();
    mobileCategory === 'thirdMobileCategory' && toggleThirdCategory();
  }, [mobileCategory]);

  const Row = (props: any) => {
    return (
      <ul className="grid sm:grid-cols-[200px_150px_150px_100px_100px] md:grid-cols-[2fr_1fr_1fr_100px_100px] items-center tableRow remove-thumb-scrollbar sm:w-fit md:w-full">
        <a href={props.location} target="_blank" rel="noreferrer">
          <li className="grid grid-cols-1fr text-left items-center font-bold">
            {props.company_name}
            {/* <span className="px-8 text-left grid grid-cols-1fr items-center ">
              {props.company_name.length === 1
                ? props.company_name
                : props.company_name.map(function (item: any) {
                    return (
                      <>
                        <span className="px-8 text-left">{item}</span>
                      </>
                    );
                  })}
            </span> */}
          </li>
        </a>
        <li>{props.dealer}</li>
        <li>{props.contact_no}</li>
        <li className="mx-auto">{props.workshop === 'yes' ? <TiTick /> : <IoClose />}</li>
        <li className="mx-auto">{props.test_ride === 'yes' ? <TiTick /> : <IoClose />}</li>
      </ul>
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      number,
      topic,
      message,
      currentTimeDate,
    };

    if (name === '' || email === '' || number === '' || topic === '' || message === '') {
      Swal.fire({
        background: '#374047',
        color: '#eeeff1',
        title: 'Error!',
        text: 'Form incomplete, kindly fill in every field.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    } else {
      Swal.fire({
        background: '#374047',
        color: '#eeeff1',
        title: 'Success!',
        text: 'Thank you for submitting your interest!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    }

    const rawResponse = await fetch('../api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();
    console.log(content);

    setName('');
    setEmail('');
    setNumber('');
    setTopic('');
    setMessage('');
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      {/* <div className="bg-about-us-contact sm:bg-center bg-cover bg-no-repeat md:min-h-[300px] sm:min-h-[30vh] mt-[7rem] text-white relative">
        <div
          data-aos="fade-down"
          className="flex items-center justify-center h-[300px] sm:text-title md:text-[60px] font-semibold"
        >
          Contact Us
        </div>
      </div> */}
      <section className="sm:pt-40 hidden">
        <div className="w-10/12 lg:w-8/12 mx-auto pb-4">
          <div className="md:flex justify-between items-center pb-4">
            <p className="lg:text-[40px] sm:text-[28px] font-semibold text-primary">Find Blueshark at</p>
            <div>
              <select
                className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-[200px] py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                id="grid-state"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              >
                <option value="">[ PLEASE SELECT ]</option>
                <option value="JOHOR">JOHOR</option>
                <option value="KEDAH">KEDAH</option>
                <option value="KELANTAN">KELANTAN</option>
                <option value="MELAKA">MELAKA</option>
                <option value="NEGERI SEMBILAN">NEGERI SEMBILAN</option>
                <option value="PAHANG">PAHANG</option>
                <option value="PERAK">PERAK</option>
                <option value="PERLIS">PERLIS</option>
                <option value="PULAU PINANG">PULAU PINANG</option>
                <option value="SABAH">SABAH</option>
                <option value="SARAWAK">SARAWAK</option>
                <option value="SELANGOR">SELANGOR</option>
                <option value="TERENGGANU">TERENGGANU</option>
                <option value="WP KUALA LUMPUR">WP KUALA LUMPUR</option>
                <option value="WP LABUAN">WP LABUAN</option>
                <option value="WP PUTRAJAYA">WP PUTRAJAYA</option>
              </select>
            </div>
          </div>
          <input
            className="text-base shadow-lg p-4 mb-4 border-primary border-[1.5px] rounded-[8px]"
            placeholder="Enter keyword here..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          {/* <p className="lg:text-[28px] sm:text-[20px] font-semibold text-black">Where to find us?</p> */}
        </div>
        <div className="w-10/12 lg:w-8/12 mx-auto text-base font-semibold uppercase flex-wrap gap-x-12 items-center sm:hidden md:flex pb-4">
          <div
            onClick={() => {
              setFirstTab(true);
              setSecondTab(false);
              setThirdTab(false);
            }}
            className={`${firstTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
          >
            Display
          </div>
          <div
            onClick={() => {
              setFirstTab(false);
              setSecondTab(true);
              setThirdTab(false);
            }}
            className={`${secondTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
          >
            Test available
          </div>
          <div
            onClick={() => {
              setFirstTab(false);
              setSecondTab(false);
              setThirdTab(true);
            }}
            className={`${thirdTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
          >
            Workshop
          </div>
        </div>

        <select
          className="bg-transparent shadow appearance-none text-gray-900 border-[#30629F] border-[1.5px] rounded-[8px] w-10/12 mx-auto py-4 px-4 mb-8 focus:outline-none focus:shadow-outline text-base leading-[20px] sm:block md:hidden"
          id="grid-state"
          value={mobileCategory}
          onChange={function (e) {
            setMobileCategory(e.target.value);
          }}
          required
        >
          <option value="firstMobileCategory">Display</option>
          <option value="secondMobileCategory">Test available</option>
          <option value="thirdMobileCategory">Workshop</option>
        </select>

        {/* <div className="w-11/12 lg:w-8/12 mx-auto sm:py-8 md:py-12 sm:px-8 md:px-16 shadow-xl rounded-[15px] mb-12">
          <div className="text-[16px] text-center grid sm:grid-cols-[200px_150px_150px_100px_100px] md:grid-cols-[2fr_1fr_1fr_100px_100px] pl-4 pb-8 border-b-2 border-primary overflow-x-auto remove-thumb-scrollbar">
            <div className="flex justify-start items-center gap-x-4">
              <IoLocationOutline />
              Dealer Name
            </div>
            <div>Dealer PIC</div>
            <div>Contact no</div>
            <div>Workshop</div>
            <div>Test ride</div>
          </div>
          <div className="text-[16px] text-center overflow-x-auto">
            {firstTab && (
              <>
                {dealerData.data
                  .filter(function (item) {
                    return state ? item.state === state : item;
                  })
                  .map(function (item) {
                    return (
                      <Row
                        key={item.id}
                        company_name={item.company_name}
                        dealer={item.dealer}
                        location={item.location}
                        contact_no={item.contact_no}
                        workshop={item.workshop}
                        test_ride={item.test_ride}
                      />
                    );
                  })}
              </>
            )}

            {secondTab && (
              <>
                {dealerData.data
                  .filter(function (item) {
                    return item.test_ride === 'yes';
                  })
                  .filter(function (item) {
                    return state ? item.state === state : item;
                  })
                  .map(function (item) {
                    return (
                      <Row
                        key={item.id}
                        company_name={item.company_name}
                        dealer={item.dealer}
                        location={item.location}
                        contact_no={item.contact_no}
                        workshop={item.workshop}
                        test_ride={item.test_ride}
                      />
                    );
                  })}
              </>
            )}

            {thirdTab && (
              <>
                {dealerData.data
                  .filter(function (item) {
                    return item.workshop === 'yes';
                  })
                  .filter(function (item) {
                    return state ? item.state === state : item;
                  })
                  .map(function (item) {
                    return (
                      <Row
                        key={item.id}
                        company_name={item.company_name}
                        dealer={item.dealer}
                        location={item.location}
                        contact_no={item.contact_no}
                        workshop={item.workshop}
                        test_ride={item.test_ride}
                      />
                    );
                  })}
              </>
            )}
          </div>
        </div> */}

        <div className="mx-auto w-10/12 md:w-8/12 bg-[#F6F6F6] p-8 h-[450px] overflow-y-auto">
          {filteredData.map(function (item) {
            return (
              <div key={item.id} className="border-b-[2px] pb-4 mb-8 px-2">
                <p className="leading-none pb-4 text-dealership-name">{item.company_name}</p>
                <a href={`${item.location}`}>
                  <p className="text-body3 pb-4">{item.address}</p>
                </a>
                <p className="text-[16px] pb-4 flex items-center">
                  <span className="mr-4 p-[5px] text-[18px] text-primary border-primary border-2 rounded-[15px]">
                    <BsTelephone />
                  </span>
                  {item.contact_no}
                </p>
                <p className="text-[16px] pb-4 flex items-center">
                  <span className="mr-4 text-primary text-[32px]">
                    <HiOutlineBuildingStorefront />
                  </span>
                  {item.operation_hours}
                </p>
              </div>
            );
          })}

          {/* {dealerData.data.map(function (item) {
            return (
              <div key={item.id} className="border-b-[2px] pb-4 mb-8 px-2">
                <p className="leading-none pb-4 text-dealership-name">{item.company_name}</p>
                <a href={`${item.location}`}>
                  <p className="text-body3 pb-4">{item.address}</p>
                </a>
                <p className="text-[16px] pb-4 flex items-center">
                  <span className="mr-4 p-[5px] text-[18px] text-primary border-primary border-2 rounded-[15px]">
                    <BsTelephone />
                  </span>
                  {item.contact_no}
                </p>
                <p className="text-[16px] pb-4 flex items-center">
                  <span className="mr-4 text-primary text-[32px]">
                    <HiOutlineBuildingStorefront />
                  </span>
                  {item.operation_hours}
                </p>
              </div>
            );
          })} */}
        </div>
      </section>

      {/* Padding top below here to be changed to sm:pt-20 md:pt-0 when dealership goes live */}
      <section className="bg-white sm:pt-40 sm:pb-20 md:pt-20 lg:pb-0 h-fit lg:h-screen 3xl:h-[calc(100vh-115px)]">
        <div className="h-full flex items-center">
          <div className="sm:w-10/12 lg:w-8/12 mx-auto flex sm:flex-col lg:flex-row items-start gap-x-20">
            <div className="sm:w-full lg:w-1/2 min-w-[50%] lg:mr-8 sm:pb-12 lg:pb-0">
              <div className="w-full mx-auto">
                <div className="h-full flex sm:flex-col lg:flex-row text-white">
                  {/* <div className="flex-4" id="bikeImage">
                    <Image src={contactBikes} alt="" />
                  </div> */}
                  <div className="flex flex-8 flex-col bg-[#FBF5FF] text-body3 text-left sm:p-16 3xl:p-20 text-body2 gap-y-12">
                    <div className="text-h3 leading-tight">Book your test ride today</div>
                    <div>
                      <div className="flex border-b-2 w-full border-[#808080] items-center"></div>
                    </div>
                    <div className="flex flex-1 gap-x-8">
                      <div className="flex-1 text-center">
                        <Image src={phoneIcon} alt="" />
                      </div>
                      <div className="flex-11">
                        <a href="tel:03-55698633">03-5569 8633</a>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-x-8">
                      <div className="flex-1 text-center">
                        <Image src={briefcaseIcon} alt="" />
                      </div>
                      <div className="flex-11">9.00am to 6.00pm (Daily, except public holidays)</div>
                    </div>
                    <div className="flex flex-1 gap-x-8 items-center">
                      <div className="flex-1 text-center">
                        {/* <Image width={30} height={30} src={emailIcon} alt="" /> */}
                        <MdEmail className="mx-auto text-[23px] text-[#7A8597]" />
                      </div>
                      <div className="flex-11">
                        <a href="mailto:support@bluesharkasean.com">
                          support@bluesharkasean
                          <br className="sm:block md:hidden" />
                          .com
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-x-8">
                      <div className="flex-1 text-center">
                        <Image src={locationIcon} alt="" />
                      </div>
                      <div className="flex-11">
                        <a href="https://goo.gl/maps/qfKTjhH54wLeVrDYA" target="_blank" rel="noreferrer">
                          <div>
                            Blueshark Showroom and 3S Centre Glenmarie <br />
                            No. 1, Block A, Putra Park, Jalan Penyair U1/44, <br />
                            Hicom-glenmarie Industrial Park, <br />
                            40150 Shah Alam, Selangor
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-full lg:w-1/2 min-w-[50%] lg:ml-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-12">
                  <div className="text-left w-full">
                    <div className="text-h4-blue">Topic</div>
                    <select
                      className="bg-transparent shadow appearance-none text-gray-900 border-[#30629F] border-[1.5px] rounded-[8px] w-full py-4 px-4 focus:outline-none focus:shadow-outline text-base leading-[20px]"
                      id="grid-state"
                      value={topic}
                      onChange={(e) => {
                        setTopic(e.target.value);
                      }}
                    >
                      <option value="" disabled selected>
                        Select a Topic
                      </option>
                      <option value="Business partnership">Business partnership</option>
                      <option value="Sales enquiries">Sales enquiries</option>
                      <option value="Service enquiries">Service enquiries</option>
                      <option value="Product enquiries">Product enquiries</option>
                      <option value="Pricing enquiries">Pricing enquiries</option>
                      <option value="Careers">Careers</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="flex justify-center sm:flex-col md:flex-row gap-x-6 sm:gap-y-12">
                    <div className="text-left w-full">
                      <div className="text-h4-blue">Your Name</div>
                      <input
                        value={name}
                        type={'text'}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        id="name"
                        placeholder="Enter your name"
                        className="no-autofill-bkg h-[48px] w-full px-[16px] py-[14px] text-base text-gray-900 border-[#30629F] border-[1.5px] rounded-[8px] bg-transparent outline-none placeholder:text-gray-100"
                      />
                    </div>
                    <div className="text-left w-full">
                      <div className="text-h4-blue">
                        Email <span className="text-red">*</span>
                      </div>
                      <input
                        value={email}
                        type={'email'}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        id="email"
                        placeholder="Enter your email"
                        className={`no-autofill-bkg h-[48px] w-full px-[16px] py-[14px] text-base text-gray-900 border-[#30629F] border-[1.5px] rounded-[8px] bg-transparent outline-none placeholder:text-gray-100`}
                        // ${
                        //   errors.email ? 'border-red' : 'border-gray-700'
                        // }`}
                      />
                      {/* {errors.email && <span className="text-xs text-red">{errors?.email?.message}</span>} */}
                    </div>
                  </div>
                  <div className="text-left w-full">
                    <div className="text-h4-blue">Phone</div>
                    <input
                      value={number}
                      type={'number'}
                      onChange={(e) => setNumber(e.target.value)}
                      autoComplete="off"
                      id="phone"
                      placeholder="+601xxxx xxxx"
                      className={`no-autofill-bkg h-[48px] w-full px-[16px] py-[14px] text-base text-gray-900 border-[#30629F] border-[1.5px] rounded-[8px] bg-transparent appearance-none outline-none placeholder:text-gray-100`}
                    />
                  </div>

                  <div className="text-left w-full mt-5 mb-4">
                    <div className="text-h4-blue">Your Message</div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      placeholder="Type something if you want..."
                      className="h-auto w-full px-[16px] py-[11px] text-base text-gray-900 border-[#30629F] border-[1.5px] rounded-[8px] bg-transparent outline-none placeholder:text-gray-100"
                    ></textarea>
                  </div>
                  <input className="hidden" value={currentTimeDate} id="currentTimeDate" />
                  {/* <ReCAPTCHA type="image" sitekey={siteKey} onChange={getCaptchaResponse} /> */}
                  <button
                    type="submit"
                    className={`text-[#30629F] hover:text-white bg-transparent hover:bg-[#30629F] border-2 border-[#30629F] transition ease-in duration-200 mx-auto cta text-button font-bold py-4 cursor-pointer`}
                  >
                    {/* ${!isRecaptcha && 'disabled:opacity-70 cursor-default'} */}
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
