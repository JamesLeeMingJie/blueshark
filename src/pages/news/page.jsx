import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import News from 'components/Common/news';
// import newsData from '../../lib/page(Not Used).json';

import newsDataNew from '../../lib/new-page.json';

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

  const sortedDataDesc = newsDataNew.sort(function (a, b) {
    const dateAArray = a.date.split('-').map(Number); // Split and convert to numbers
    const dateBArray = b.date.split('-').map(Number); // Split and convert to numbers

    // Compare years first
    if (dateAArray[2] !== dateBArray[2]) {
      return dateBArray[2] - dateAArray[2];
    }

    // If years are the same, compare months
    if (dateAArray[1] !== dateBArray[1]) {
      return dateBArray[1] - dateAArray[1];
    }

    // If months are the same, compare days
    return dateBArray[0] - dateAArray[0];
  });

  // =================================================================================

  // Filtered Categories

  const filteredBrand = sortedDataDesc.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'brand';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('brand');
    }
    return false;
  });

  const filteredProducts = sortedDataDesc.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'products&tech';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('products&tech');
    }
    return false;
  });

  const filteredEvents = sortedDataDesc.filter(function (item) {
    if (typeof item.subcategories === 'string') {
      return item.subcategories === 'events';
    } else if (Array.isArray(item.subcategories)) {
      return item.subcategories.includes('events');
    }
    return false;
  });

  const filteredReviews = sortedDataDesc.filter(function (item) {
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
  const [currentLimitReviews, setCurrentLimitReviews] = useState(0);

  const limit = 6;

  const totalData = (sortedDataDesc.length);
  const totalDataBrand = (filteredBrand.length);
  const totalDataProducts = (filteredProducts.length);
  const totalDataReviews = (filteredReviews.length);

  const totalCategoryData = Math.ceil(totalData / limit);
  const totalBrandCategoryData = Math.ceil(totalDataBrand / limit);
  const totalProductsCategoryData = Math.ceil(totalDataProducts / limit);
  const totalReviewsCategoryData = Math.ceil(totalDataReviews / limit);

  // Shallow copy of the data to mutate
  const consolidatedData = sortedDataDesc.slice();
  const consolidatedBrandData = filteredBrand.slice();
  const consolidatedProductsData = filteredProducts.slice();
  const consolidatedEventsData = filteredEvents.slice();
  const consolidatedReviewsData = filteredReviews.slice();

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

  const [paginationNumberReviews, setPaginationNumberReviews] = useState(1);
  const [outputDataReviews, setOutputDataReviews] = useState([]);

  const handleSubtractSixReviews = () => {
    if (paginationNumberReviews === 1) {
      return;
    } else {
      setPaginationNumberReviews((current) => current - 1);
      setCurrentLimitReviews((prevTotal) => prevTotal - 6);
    };
  };

  const handleAddSixReviews = () => {
    if (paginationNumberReviews < totalReviewsCategoryData) {
      setPaginationNumberReviews((current) => current + 1);
      setCurrentLimitReviews((prevTotal) => prevTotal + 6);
    } else {
      return;
    };
  };

  useEffect(() => {
    const newData = [];
    for (let i = currentLimitReviews; i < currentLimitReviews + limit && i < totalDataReviews; i++) {
      newData.push(consolidatedReviewsData[i]);
    }
    setOutputDataReviews(newData);
  }, [currentLimitReviews]);

  // =================================================================================

  // Filtered Months

  const [currentLimitMarch, setCurrentLimitMarch] = useState(0);
  const [currentLimitJuly, setCurrentLimitJuly] = useState(0);
  const [currentLimitAugust, setCurrentLimitAugust] = useState(0);

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

  // =================================================================================

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

  const totalDataJuly = filterJuly.length;
  const totalJulyPages = Math.ceil(totalDataJuly / limit);

  const [paginationNumberJuly, setPaginationNumberJuly] = useState(1);
  const [outputDataJuly, setOutputDataJuly] = useState([]);

  const handleSubtractSixJuly = () => {
    if (paginationNumberJuly === 1) {
      return;
    } else {
      setPaginationNumberJuly((current) => current - 1);
      setCurrentLimitJuly((prevTotal) => prevTotal - 6);
    };
  };

  const handleAddSixJuly = () => {
    if (paginationNumberJuly < totalJulyPages) {
      setPaginationNumberJuly((current) => current + 1);
      setCurrentLimitJuly((prevTotal) => prevTotal + 6);
    } else {
      return;
    };
  };

  useEffect(() => {
    const newData = [];
    for (let i = currentLimitJuly; i < currentLimitJuly + limit && i < totalDataJuly; i++) {
      newData.push(filterJuly[i]);
    }
    setOutputDataJuly(newData);
  }, [currentLimitJuly]);

  // =================================================================================

  const totalDataAugust = filterAugust.length;
  const totalAugustPages = Math.ceil(totalDataAugust / limit);

  const [paginationNumberAugust, setPaginationNumberAugust] = useState(1);
  const [outputDataAugust, setOutputDataAugust] = useState([]);

  const handleSubtractSixAugust = () => {
    if (paginationNumberAugust === 1) {
      return;
    } else {
      setPaginationNumberAugust((current) => current - 1);
      setCurrentLimitAugust((prevTotal) => prevTotal - 6);
    };
  };

  const handleAddSixAugust = () => {
    if (paginationNumberAugust < totalAugustPages) {
      setPaginationNumberAugust((current) => current + 1);
      setCurrentLimitAugust((prevTotal) => prevTotal + 6);
    } else {
      return;
    };
  };

  useEffect(() => {
    const newData = [];
    for (let i = currentLimitAugust; i < currentLimitAugust + limit && i < totalDataAugust; i++) {
      newData.push(filterAugust[i]);
    }
    setOutputDataAugust(newData);
  }, [currentLimitAugust]);

  // =================================================================================

  return (
    <>
      <section className="bg-white min-h-[calc(100vh-115px)]">
        <div className="pt-[60px]">
          <div className="pb-20 lg:flex">

            <div className="flex-7 articleImage bg-[#323237]">
              {/* Aspect ratio to fix cause it's not dynamic right now */}
              <img className='md:aspect-[3/2] w-full h-full object-contain object-top' src={`${sortedDataDesc[0].img}`} alt="" />
            </div>
            <div className="flex-6 flex items-center bg-[#323237] text-white sm:mt-[-4px] lg:mt-0">
              <div className="w-10/12 mx-auto py-16">
                <div className="text-body3-white pb-4"></div>
                <div className="text-h2 leading-none pb-8">{sortedDataDesc[0].description}
                </div>
                {/* Paragraph below is not dynamic */}
                <div className="text-body2-white leading-tight pb-8">
                  Take Advantage of Local Government Incentives and Benefits to Grow Your Business and Save Big!
                  <br /><br />
                  In an era driven by environmental consciousness and cost-effectiveness, it is evident that local tax incentives and benefits play a crucial role in promoting the acquisition of electric vehicle (EV) fleets by businesses and individuals.
                </div>
                <a href={`${sortedDataDesc[0].link}`} target="_blank" rel="noreferrer">
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
              className={`${firstTab ? 'bg-gray-400 text-white'
                : 'hover:bg-gray-100 hover:text-white bg-white transition ease-in duration-200'} p-[15px] rounded-[1rem] cursor-pointer`}
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
              className={`${secondTab ? 'bg-gray-400 text-white'
                : 'hover:bg-gray-100 hover:text-white bg-white transition ease-in duration-200'} p-[15px] rounded-[1rem] cursor-pointer`}
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
              className={`${thirdTab ? 'bg-gray-400 text-white'
                : 'hover:bg-gray-100 hover:text-white bg-white transition ease-in duration-200'} p-[15px] rounded-[1rem] cursor-pointer`}
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
              className={`${fourthTab ? 'bg-gray-400 text-white'
                : 'hover:bg-gray-100 hover:text-white bg-white transition ease-in duration-200'} p-[15px] rounded-[1rem] cursor-pointer`}
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
              className={`${fifthTab ? 'bg-gray-400 text-white'
                : 'hover:bg-gray-100 hover:text-white bg-white transition ease-in duration-200'} p-[15px] rounded-[1rem] cursor-pointer`}
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

          {filterDate === '' && (
            <>
              <div className="sm:w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-[15rem] grid sm:grid-cols-1 justify-center smToMd-grid-cols-2 md:grid-cols-3 gap-8 relative">
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
                        {consolidatedEventsData.map(function (data) {
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
                        {outputDataReviews.map(function (data) {
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

                {filterDate === '' && (
                  <div className="pb-20 absolute bottom-0 right-[50%] translate-x-[50%]">
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

                    {fifthCategory && resetCategory && (
                      <div className="flex items-center justify-center gap-x-12 text-base">
                        <div
                          onClick={handleSubtractSixReviews}
                          className={`${currentLimitReviews === 0 ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                        >
                          <GoChevronLeft />
                        </div>
                        <div
                          className={`bg-[#F6F6F6] px-[15px] py-[10px] rounded-[1rem]`}
                        >
                          {paginationNumberReviews}
                        </div>
                        <div>
                          of
                        </div>
                        <div className={`px-[15px] py-[10px] rounded-[1rem]`}>
                          {totalReviewsCategoryData}
                        </div>
                        <div
                          onClick={handleAddSixReviews}
                          className={`${paginationNumberReviews === totalReviewsCategoryData ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                        >
                          <GoChevronRight />
                        </div>
                      </div>
                    )}
                  </div>
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

          {filterDate === 'March' && (
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-[15rem] grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {outputDataMarch.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target='_blank' rel='noreferrer'>
                    <div className={`rounded-[1rem] overflow-hidden block h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}

              <div className="pb-20 absolute bottom-0 right-[50%] translate-x-[50%]">
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
            </div>
          )}

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
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-[15rem] grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {outputDataJuly.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target='_blank' rel='noreferrer'>
                    <div className={`rounded-[1rem] overflow-hidden block h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}

              <div className="pb-20 absolute bottom-0 right-[50%] translate-x-[50%]">
                <div className="flex items-center justify-center gap-x-12 text-base">
                  <div
                    onClick={handleSubtractSixJuly}
                    className={`${currentLimitJuly === 0 ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronLeft />
                  </div>
                  <div
                    className={`bg-[#F6F6F6] px-[15px] py-[10px] rounded-[1rem]`}
                  >
                    {paginationNumberJuly}
                  </div>
                  <div>
                    of
                  </div>
                  <div className={`px-[15px] py-[10px] rounded-[1rem]`}>
                    {totalJulyPages}
                  </div>
                  <div
                    onClick={handleAddSixJuly}
                    className={`${paginationNumberJuly === totalJulyPages ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronRight />
                  </div>
                </div>
              </div>
            </div>
          )}
          {filterDate === 'August' && (
            <div className="w-10/12 lg:w-8/12 mx-auto 3xl:px-20 pb-[15rem] grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {outputDataAugust.map(function (data) {
                return (
                  <a id={data.id} key={data.id} href={data.link} target='_blank' rel='noreferrer'>
                    <div className={`rounded-[1rem] overflow-hidden block h-full`}>
                      <News day={data.date} img={data.img} description={data.description} source={data.source} />
                    </div>
                  </a>
                );
              })}

              <div className="pb-20 absolute bottom-0 right-[50%] translate-x-[50%]">
                <div className="flex items-center justify-center gap-x-12 text-base">
                  <div
                    onClick={handleSubtractSixAugust}
                    className={`${currentLimitAugust === 0 ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronLeft />
                  </div>
                  <div
                    className={`bg-[#F6F6F6] px-[15px] py-[10px] rounded-[1rem]`}
                  >
                    {paginationNumberAugust}
                  </div>
                  <div>
                    of
                  </div>
                  <div className={`px-[15px] py-[10px] rounded-[1rem]`}>
                    {totalAugustPages}
                  </div>
                  <div
                    onClick={handleAddSixAugust}
                    className={`${paginationNumberAugust === totalAugustPages ? 'text-gray-100' : 'text-black cursor-pointer'}`}
                  >
                    <GoChevronRight />
                  </div>
                </div>
              </div>
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

        </div>
      </section>
    </>
  );
}
