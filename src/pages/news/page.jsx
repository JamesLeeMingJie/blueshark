import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import News from 'components/Common/news';
import newsData from '../../lib/page.json';

import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

import dummyImage from '../../../public/revampImages/battery-station.png';

export default function NewsPage() {
  // Filter
  const [filterDate, setFilterDate] = useState('');

  // Tabs
  const [firstTab, setFirstTab] = useState(true);
  const [secondTab, setSecondTab] = useState(false);
  const [thirdTab, setThirdTab] = useState(false);
  const [fourthTab, setFourthTab] = useState(false);
  const [fifthTab, setFifthTab] = useState(false);

  // Categories
  const [firstCategory, setFirstCategory] = useState(true);
  const [secondCategory, setSecondCategory] = useState(true);
  const [thirdCategory, setThirdCategory] = useState(true);
  const [fourthCategory, setFourthCategory] = useState(true);
  const [fifthCategory, setFifthCategory] = useState(true);

  const [resetCategory, setResetCategory] = useState(false);

  const toggleFirstCategory = () => {
    setFirstCategory(true);

    setSecondCategory(true);
    setThirdCategory(true);
    setFourthCategory(true);
    setFifthCategory(true);

    setResetCategory(false);
  };

  const toggleSecondCategory = () => {
    // All category must be false for every other tabs
    setFirstCategory(false);

    setSecondCategory(true);
    setThirdCategory(false);
    setFourthCategory(false);
    setFifthCategory(false);

    setResetCategory(true);
  };

  const toggleThirdCategory = () => {
    // All category must be false for every other tabs
    setFirstCategory(false);

    setSecondCategory(false);
    setThirdCategory(true);
    setFourthCategory(false);
    setFifthCategory(false);

    setResetCategory(true);
  };

  const toggleFourthCategory = () => {
    // All category must be false for every other tabs
    setFirstCategory(false);

    setSecondCategory(false);
    setThirdCategory(false);
    setFourthCategory(true);
    setFifthCategory(false);

    setResetCategory(true);
  };

  const toggleFifthCategory = () => {
    // All category must be false for every other tabs
    setFirstCategory(false);

    setSecondCategory(false);
    setThirdCategory(false);
    setFourthCategory(false);
    setFifthCategory(true);

    setResetCategory(true);
  };

  // Mobile Categories
  const [mobileCategory, setMobileCategory] = useState("firstMobileCategory");

  useEffect(() => {
    mobileCategory === "firstMobileCategory" && toggleFirstCategory();
    mobileCategory === "secondMobileCategory" && toggleSecondCategory();
    mobileCategory === "thirdMobileCategory" && toggleThirdCategory();
    mobileCategory === "fourthMobileCategory" && toggleFourthCategory();
    mobileCategory === "fifthMobileCategory" && toggleFifthCategory();
  }, [mobileCategory]);

  // useEffect(() => {
  //   const newData = [];
  //   for (let i = currentLimit; i < currentLimit + limit && i < totalData; i++) {
  //     newData.push(consolidatedData[i]);
  //   }
  //   setOutputData(newData);
  // }, [currentLimit]);

  // =================================================================================

  // Filtered Categories

  // From second category
  // const filteredBrandSecond = newsData.secondCategory.filter(function (item) {
  //   if (typeof item.subcategories === 'string') {
  //     return item.subcategories === 'brand';
  //   } else if (Array.isArray(item.subcategories)) {
  //     return item.subcategories.includes('brand');
  //   }
  //   return false;
  // });

  const filteredProductsSecond = newsData.secondCategory.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'products&tech';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('products&tech');
    }
    return false;
  });

  const filteredEventsSecond = newsData.secondCategory.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'events';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('events');
    }
    return false;
  });

  const filteredReviewsSecond = newsData.secondCategory.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'reviews';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('reviews');
    }
    return false;
  });

  // From third category
  const filteredBrandThird = newsData.thirdCategory.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'brand';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('brand');
    }
    return false;
  });

  // const filteredProductsThird = newsData.thirdCategory.filter(function (item) {
  //   if (typeof item.subcategories === 'string') {
  //     return item.subcategories === 'products&tech';
  //   } else if (Array.isArray(item.subcategories)) {
  //     return item.subcategories.includes('products&tech');
  //   }
  //   return false;
  // });

  const filteredEventsThird = newsData.thirdCategory.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'events';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('events');
    }
    return false;
  });

  const filteredReviewsThird = newsData.thirdCategory.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'reviews';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('reviews');
    }
    return false;
  });

  // =================================================================================

  // Pagination
  const [currentLimit, setCurrentLimit] = useState(0);
  const [currentLimitBrand, setCurrentLimitBrand] = useState(0);
  const [currentLimitProducts, setCurrentLimitProducts] = useState(0);

  const limit = 6;

  const totalData = (newsData.secondCategory.length + newsData.thirdCategory.length);
  const totalDataBrand = (newsData.secondCategory.length + filteredBrandThird.length);
  const totalDataProducts = (newsData.thirdCategory.length + filteredProductsSecond.length);

  const totalCategoryData = Math.ceil(totalData / limit);
  const totalBrandCategoryData = Math.ceil(totalDataBrand / limit);
  const totalProductsCategoryData = Math.ceil(totalDataProducts / limit);

  // Combined News Data
  const copySecondData = newsData.secondCategory.slice();
  const copySecondProductsData = filteredProductsSecond.slice();
  const copyThirdData = newsData.thirdCategory.slice();
  const copyThirdBrandData = filteredBrandThird.slice();

  const consolidatedData = [...copySecondData, ...copyThirdData];
  const consolidatedBrandData = [...copySecondData, ...copyThirdBrandData];
  const consolidatedProductsData = [...copySecondProductsData, ...copyThirdData];

  // =================================================================================

  const [paginationNumber, setPaginationNumber] = useState(1);
  const [outputData, setOutputData] = useState([]);

  const handleSubtractSix = () => {
    if (paginationNumber === 1) {
      return;
    } else {
      setPaginationNumber((current) => current - 1);
      setCurrentLimit((prevTotal) => prevTotal - 6);
    };
  };

  const handleAddSix = () => {
    if (paginationNumber < totalCategoryData) {
      setPaginationNumber((current) => current + 1);
      setCurrentLimit((prevTotal) => prevTotal + 6);
    } else {
      return;
    };
  };

  useEffect(() => {
    const newData = [];
    for (let i = currentLimit; i < currentLimit + limit && i < totalData; i++) {
      newData.push(consolidatedData[i]);
    }
    setOutputData(newData);
  }, [currentLimit]);

  // =================================================================================

  const [paginationNumberBrand, setPaginationNumberBrand] = useState(1);
  const [outputDataBrand, setOutputDataBrand] = useState([]);

  const handleSubtractSixBrand = () => {
    if (paginationNumberBrand === 1) {
      return;
    } else {
      setPaginationNumberBrand((current) => current - 1);
      setCurrentLimitBrand((prevTotal) => prevTotal - 6);
    };
  };

  const handleAddSixBrand = () => {
    if (paginationNumberBrand < totalBrandCategoryData) {
      setPaginationNumberBrand((current) => current + 1);
      setCurrentLimitBrand((prevTotal) => prevTotal + 6);
    } else {
      return;
    };
  };

  useEffect(() => {
    const newData = [];
    for (let i = currentLimitBrand; i < currentLimitBrand + limit && i < totalDataBrand; i++) {
      newData.push(consolidatedBrandData[i]);
    }
    setOutputDataBrand(newData);
  }, [currentLimitBrand]);

  // =================================================================================

  const [paginationNumberProducts, setPaginationNumberProducts] = useState(1);
  const [outputDataProducts, setOutputDataProducts] = useState([]);

  const handleSubtractSixProducts = () => {
    if (paginationNumberProducts === 1) {
      return;
    } else {
      setPaginationNumberProducts((current) => current - 1);
      setCurrentLimitProducts((prevTotal) => prevTotal - 6);
    };
  };

  const handleAddSixProducts = () => {
    if (paginationNumberProducts < totalProductsCategoryData) {
      setPaginationNumberProducts((current) => current + 1);
      setCurrentLimitProducts((prevTotal) => prevTotal + 6);
    } else {
      return;
    };
  };

  useEffect(() => {
    const newData = [];
    for (let i = currentLimitProducts; i < currentLimitProducts + limit && i < totalDataProducts; i++) {
      newData.push(consolidatedProductsData[i]);
    }
    setOutputDataProducts(newData);
  }, [currentLimitProducts]);

  // =================================================================================

  // Filtered Months

  const [currentLimitMarch, setCurrentLimitMarch] = useState(0);

  const filterMarch = consolidatedData.filter(function (mth) {
    return mth.month === 'march';
  });

  const filterJune = consolidatedData.filter(function (mth) {
    return mth.month === 'june';
  });

  const filterJuly = consolidatedData.filter(function (mth) {
    return mth.month === 'july';
  });

  const filterAugust = consolidatedData.filter(function (mth) {
    return mth.month === 'august';
  });

  const filterSeptember = consolidatedData.filter(function (mth) {
    return mth.month === 'september';
  });

  const totalDataMarch = filterMarch.length;
  const totalMarchPages = Math.ceil(totalDataMarch / limit);

  const [paginationNumberMarch, setPaginationNumberMarch] = useState(1);
  const [outputDataMarch, setOutputDataMarch] = useState([]);

  const handleSubtractSixMarch = () => {
    if (paginationNumberMarch === 1) {
      return;
    } else {
      setPaginationNumberMarch((current) => current - 1);
      setCurrentLimitMarch((prevTotal) => prevTotal - 6);
    };
  };

  const handleAddSixMarch = () => {
    if (paginationNumberMarch < totalMarchPages) {
      setPaginationNumberMarch((current) => current + 1);
      setCurrentLimitMarch((prevTotal) => prevTotal + 6);
    } else {
      return;
    };
  };

  useEffect(() => {
    const newData = [];
    for (let i = currentLimitMarch; i < currentLimitMarch + limit && i < totalDataMarch; i++) {
      newData.push(filterMarch[i]);
    }
    setOutputDataMarch(newData);
  }, [currentLimitMarch]);

  // =================================================================================

  return (
    <>
      <section className="bg-white min-h-[calc(100vh-115px)]">
        <div className="pt-[60px]">
          <div className="pb-20 lg:flex">
            <div className="flex-7 articleImage">
              <img className='h-full' src="/articleImages/brands__1.jpg" alt="" />
            </div>
            <div className="flex-6 flex items-center bg-[#323237] text-white sm:mt-[-4px] lg:mt-0">
              <div className="w-10/12 mx-auto py-16">
                <div className="text-body3-white pb-4">21-03-2023</div>
                <div className="text-h2 leading-none pb-8">Launched: Blueshark R1 Smart EV Scooter – 2 Variants, 110 KM Range, From RM7,190</div>
                <div className="text-body2-white leading-tight pb-8">
                  The local two-wheeled electric mobility space has grown today as the Blueshark brand marks its official entry. The brand, which is a subsidiary of Sharkgulf Technologies Group, launched its R1 smart EV scooter earlier today, which is available in two guises – R1 and R1 Lite.
                </div>
                <a href="https://www.caricarz.com/en/news/launched-blueshark-r1-smart-ev-scooter-2-variants-110-km-range-from-rm7190/6519" target="_blank" rel="noreferrer">
                  <button className="text-button text-white hover:text-black cta bg-transparent hover:bg-white border-2 border-white font-bold transition ease-in duration-200">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-10/12 lg:w-8/12 mx-auto flex justify-between items-center pb-8">
            <p className="lg:text-[40px] sm:text-[28px] font-semibold text-primary">News</p>
            <div>
              <select
                className="bg-[#F3F6F9] shadow appearance-none placeholder:italic placeholder:text-[#CFDAE9] border-[#F3F6F9] rounded-[0.5rem] w-[200px] py-4 px-4 focus:outline-none focus:shadow-outline text-[14px]"
                id="grid-state"
                value={filterDate}
                onChange={(e) => {
                  setFilterDate(e.target.value);
                }}
              >
                <option value="">[ PLEASE SELECT ]</option>
                {/* <option value="January">January</option>
                <option value="February">February</option> */}
                <option value="March">March</option>
                {/* <option value="April">April</option>
                <option value="May">May</option> */}
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                {/*
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>  */}
              </select>
            </div>
          </div>
          <div className="w-10/12 lg:w-8/12 mx-auto pb-12 text-base font-semibold uppercase flex-wrap gap-x-12 items-center sm:hidden md:flex">
            <div
              onClick={() => {
                setFirstTab(true);
                setSecondTab(false);
                setThirdTab(false);
                setFourthTab(false);
                setFifthTab(false);
                toggleFirstCategory();
              }}
              className={`${firstTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
            >
              All
            </div>
            <div
              onClick={() => {
                setFirstTab(false);
                setSecondTab(true);
                setThirdTab(false);
                setFourthTab(false);
                setFifthTab(false);
                toggleSecondCategory();
              }}
              className={`${secondTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
            >
              Brand
            </div>
            <div
              onClick={() => {
                setFirstTab(false);
                setSecondTab(false);
                setThirdTab(true);
                setFourthTab(false);
                setFifthTab(false);
                toggleThirdCategory();
              }}
              className={`${thirdTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
            >
              Products & Tech
            </div>
            <div
              onClick={() => {
                setFirstTab(false);
                setSecondTab(false);
                setThirdTab(false);
                setFourthTab(true);
                setFifthTab(false);
                toggleFourthCategory();
              }}
              className={`${fourthTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
            >
              Events
            </div>
            <div
              onClick={() => {
                setFirstTab(false);
                setSecondTab(false);
                setThirdTab(false);
                setFourthTab(false);
                setFifthTab(true);
                toggleFifthCategory();
              }}
              className={`${fifthTab ? 'bg-[#F6F6F6]' : 'bg-white'} p-[15px] rounded-[1rem] cursor-pointer`}
            >
              Reviews
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
            <option value="firstMobileCategory">All</option>
            <option value="secondMobileCategory">Brand</option>
            <option value="thirdMobileCategory">Products & Tech</option>
            <option value="fourthMobileCategory">Events</option>
            <option value="fifthMobileCategory">Reviews</option>
          </select>

          {(filterDate === '' || filterDate === 'March') && (
            <>
              <div className="sm:w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-20 grid sm:grid-cols-1 justify-center smToMd-grid-cols-2 md:grid-cols-3 gap-8">
                {/* Additional cards that don't fall in any categories goes here */}

                {firstCategory && (
                  <>
                    {outputData.map(function (data) {
                      return (
                        <a id={data.id} key={data.id} href={data.link} target="_blank" rel="noreferrer">
                          <div className={`rounded-[1rem] overflow-hidden h-full`}>
                            <News day={data.date} img={data.img} description={data.description} source={data.source} />
                          </div>
                        </a>
                      );
                    })}
                  </>
                )}

                {resetCategory && (
                  <>
                    {/* Brands and Products & Tech category */}

                    {/* Brands category */}
                    {secondCategory && (
                      <>
                        {outputDataBrand.map(function (data) {
                          return (
                            <a id={data.id} key={data.id} href={data.link} target="_blank" rel="noreferrer">
                              <div className={`rounded-[1rem] overflow-hidden h-full`}>
                                <News day={data.date} img={data.img} description={data.description} source={data.source} />
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}

                    {/* Products & Tech category */}
                    {thirdCategory && (
                      <>
                        {outputDataProducts.map(function (data) {
                          return (
                            <a id={data.id} key={data.id} href={data.link} target="_blank" rel="noreferrer">
                              <div className={`rounded-[1rem] overflow-hidden h-full`}>
                                <News day={data.date} img={data.img} description={data.description} source={data.source} />
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}

                    {/* Events category */}
                    {fourthCategory && (
                      <>
                        {filteredEventsSecond.map(function (data) {
                          return (
                            <a id={data.id} key={data.id} href={data.link} className={`${resetCategory ? 'block' : 'hidden'}`} target="_blank" rel="noreferrer">
                              <div className={`rounded-[1rem] overflow-hidden h-full`}>
                                <News day={data.date} img={data.img} description={data.description} source={data.source} />
                              </div>
                            </a>
                          );
                        })}
                        {filteredEventsThird.map(function (data) {
                          return (
                            <a id={data.id} key={data.id} href={data.link} className={`${resetCategory ? 'block' : 'hidden'}`} target="_blank" rel="noreferrer">
                              <div className={`rounded-[1rem] overflow-hidden h-full`}>
                                <News day={data.date} img={data.img} description={data.description} source={data.source} />
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}

                    {/* Reviews category */}
                    {fifthCategory && (
                      <>
                        {filteredReviewsSecond.map(function (data) {
                          return (
                            <a id={data.id} key={data.id} href={data.link} className={`${resetCategory ? 'block' : 'hidden'}`} target="_blank" rel="noreferrer">
                              <div className={`rounded-[1rem] overflow-hidden h-full`}>
                                <News day={data.date} img={data.img} description={data.description} source={data.source} />
                              </div>
                            </a>
                          );
                        })}
                        {filteredReviewsThird.map(function (data) {
                          return (
                            <a id={data.id} key={data.id} href={data.link} className={`${resetCategory ? 'block' : 'hidden'}`} target="_blank" rel="noreferrer">
                              <div className={`rounded-[1rem] overflow-hidden h-full`}>
                                <News day={data.date} img={data.img} description={data.description} source={data.source} />
                              </div>
                            </a>
                          );
                        })}
                      </>
                    )}
                  </>
                )}

              </div>
            </>
          )}

          {/* To refractor for month categories as well */}

          {filterDate === 'January' && (
            <div className="w-10/12 lg:w-8/12 mx-auto pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">

            </div>
          )}
          {filterDate === 'February' && (
            <div className="w-10/12 lg:w-8/12 mx-auto pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`rounded-[1rem] overflow-hidden ${fourthCategory === true ? 'block' : 'hidden'}`}>
                <News
                  day={'February 5, 2023'}
                  img={dummyImage}
                  link={`/news/seventh-article`}
                  description={'Second dummy Blueshark article'}
                />
              </div>
            </div>
          )}
          {/* {filterDate === 'March' && (
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outputDataMarch.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target="_blank" rel="noreferrer">
                    <div className={`rounded-[1rem] overflow-hidden h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}
            </div>
          )} */}
          {filterDate === 'April' && (
            <div className="w-10/12 lg:w-8/12 mx-auto pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`rounded-[1rem] overflow-hidden ${secondCategory === true ? 'block' : 'hidden'}`}>
                <News
                  day={'April 5, 2023'}
                  img={dummyImage}
                  link={`/news/third-article`}
                  description={'Second dummy company article'}
                />
              </div>
              <div className={`rounded-[1rem] overflow-hidden ${thirdCategory === true ? 'block' : 'hidden'}`}>
                <News
                  day={'April 5, 2023'}
                  img={dummyImage}
                  link={`/news/fifth-article`}
                  description={'Second dummy press release'}
                />
              </div>
            </div>
          )}
          {filterDate === 'May' && (
            <div className="w-10/12 lg:w-8/12 mx-auto pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`rounded-[1rem] overflow-hidden block`}>
                <News
                  day={'May 5, 2023'}
                  img={dummyImage}
                  link={`/news/first-article`}
                  description={"The world's smartest electric scooter has arrived."}
                />
              </div>
            </div>
          )}

          {filterDate === 'June' && (
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterJune.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target='_blank' rel='noreferrer'>
                    <div className={`rounded-[1rem] overflow-hidden block h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}
            </div>
          )}
          {filterDate === 'July' && (
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterJuly.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target='_blank' rel='noreferrer'>
                    <div className={`rounded-[1rem] overflow-hidden block h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}
            </div>
          )}
          {filterDate === 'August' && (
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterAugust.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target='_blank' rel='noreferrer'>
                    <div className={`rounded-[1rem] overflow-hidden block h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}
            </div>
          )}
          {filterDate === 'September' && (
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filterSeptember.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target='_blank' rel='noreferrer'>
                    <div className={`rounded-[1rem] overflow-hidden block h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}
            </div>
          )}
          {filterDate === 'October' && (
            <div className="w-10/12 lg:w-8/12 mx-auto pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`rounded-[1rem] overflow-hidden block`}>
                {/* <News
                  day={'January 5, 2023'}
                  img={dummyImage}
                  link={`/news/sixth-article`}
                  description={'First dummy Blueshark article'}
                /> */}
              </div>
            </div>
          )}
          {filterDate === 'November' && (
            <div className="w-10/12 lg:w-8/12 mx-auto pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`rounded-[1rem] overflow-hidden block`}>
                {/* <News
                  day={'January 5, 2023'}
                  img={dummyImage}
                  link={`/news/sixth-article`}
                  description={'First dummy Blueshark article'}
                /> */}
              </div>
            </div>
          )}
          {filterDate === 'December' && (
            <div className="w-10/12 lg:w-8/12 mx-auto pb-20 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`rounded-[1rem] overflow-hidden block`}>
                {/* <News
                  day={'January 5, 2023'}
                  img={dummyImage}
                  link={`/news/sixth-article`}
                  description={'First dummy Blueshark article'}
                /> */}
              </div>
            </div>
          )}

          {(filterDate === '' || filterDate === 'March') && (
            <div className="pb-20">
              {firstCategory && (
                <div className="flex items-center justify-center gap-x-12 text-base">
                  <div
                    onClick={handleSubtractSix}
                    className={`${currentLimit === 0 ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronLeft />
                  </div>
                  <div
                    className={`bg-[#F6F6F6] px-[15px] py-[10px] rounded-[1rem]`}
                  >
                    {paginationNumber}
                  </div>
                  <div>
                    of
                  </div>
                  <div className={`px-[15px] py-[10px] rounded-[1rem]`}>
                    {totalCategoryData}
                  </div>
                  <div
                    onClick={handleAddSix}
                    className={`${paginationNumber === totalCategoryData ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronRight />
                  </div>
                </div>
              )}

              {secondCategory && resetCategory && (
                <div className="flex items-center justify-center gap-x-12 text-base">
                  <div
                    onClick={handleSubtractSixBrand}
                    className={`${currentLimitBrand === 0 ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronLeft />
                  </div>
                  <div
                    className={`bg-[#F6F6F6] px-[15px] py-[10px] rounded-[1rem]`}
                  >
                    {paginationNumberBrand}
                  </div>
                  <div>
                    of
                  </div>
                  <div className={`px-[15px] py-[10px] rounded-[1rem]`}>
                    {totalBrandCategoryData}
                  </div>
                  <div
                    onClick={handleAddSixBrand}
                    className={`${paginationNumberBrand === totalBrandCategoryData ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronRight />
                  </div>
                </div>
              )}

              {thirdCategory && resetCategory && (
                <div className="flex items-center justify-center gap-x-12 text-base">
                  <div
                    onClick={handleSubtractSixProducts}
                    className={`${currentLimitProducts === 0 ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronLeft />
                  </div>
                  <div
                    className={`bg-[#F6F6F6] px-[15px] py-[10px] rounded-[1rem]`}
                  >
                    {paginationNumberProducts}
                  </div>
                  <div>
                    of
                  </div>
                  <div className={`px-[15px] py-[10px] rounded-[1rem]`}>
                    {totalProductsCategoryData}
                  </div>
                  <div
                    onClick={handleAddSixProducts}
                    className={`${paginationNumberProducts === totalProductsCategoryData ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronRight />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* {filterDate === 'March' && (
            <div className="pb-20">
              <div className="flex items-center justify-center gap-x-12 text-base">
                <div
                  onClick={handleSubtractSixMarch}
                  className={`${currentLimitMarch === 0 ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                >
                  <GoChevronLeft />
                </div>
                <div
                  className={`bg-[#F6F6F6] px-[15px] py-[10px] rounded-[1rem]`}
                >
                  {paginationNumberMarch}
                </div>
                <div>
                  of
                </div>
                <div className={`px-[15px] py-[10px] rounded-[1rem]`}>
                  {totalMarchPages}
                </div>
                <div
                  onClick={handleAddSixMarch}
                  className={`${paginationNumberMarch === totalMarchPages ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                >
                  <GoChevronRight />
                </div>
              </div>
            </div>
          )} */}

        </div>
      </section>
    </>
  );
}
