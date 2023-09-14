import { menuSecond } from 'models/options';
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { activePage } from 'helpers/handleString';
import { useScrollPosition } from 'hooks/useScrollPosition';
import { headerHeight } from 'models/const';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const Header = ({
  setDisplayMenu,
  displayMenu,
}: {
  displayMenu: boolean;
  setDisplayMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openR1Nav, setOpenR1Nav] = useState(false);
  const [size] = useWindowSize();
  const height = useScrollPosition();
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggle = () => {
    setOpenR1Nav(!openR1Nav);
  };

  useEffect(() => {
    if (size > 1024) {
      setDisplayMenu(false);
      setOpenR1Nav(false);
    }
  }, [size]);

  return (
    <div>
      <nav
        className={`${
          router.pathname === '/' ||
          router.pathname === '/r-series/overview' ||
          router.pathname === '/r-series/specification' ||
          router.pathname === '/r-series/pricing' ||
          router.pathname === '/battery' ||
          router.pathname === '/about-us' ||
          router.pathname === '/contact' ||
          router.pathname === '/news' ||
          router.pathname === '/news/first-article'
            ? 'bg-transparent overviewParentNav'
            : ''
          // ${router.pathname === '/' ? 'bg-transparent parentNav' : ''} Add to to make hover navbar effect
        } sm:px-[20px] md:px-0 h-[60px] absolute w-full ${height >= headerHeight && 'fixed top-0'} z-30`}
        id="header-nav"
      >
        <div className="flex sm:w-full md:w-10/12 lg:w-8/12 mx-auto items-center justify-between h-full">
          {/* ------------ LOGO -------------- */}
          <div className="flex gap-x-12 items-center h-full sm:justify-between xl:justify-normal sm:w-full xl:w-auto">
            <div className="flex flex-shrink-0 text-white mr-6">
              <Link href={'/'}>
                <a>
                  <img className="cursor-pointer" src="/blueshark-logo.png" alt="blueshark logo" />
                </a>
              </Link>
            </div>
            {/* ------------ MENU ICON FOR MOBILE-------------- */}
            <div className="block xl:hidden">
              <button
                className="flex items-center"
                onClick={() => {
                  setDisplayMenu(true);
                }}
              >
                <img src="/menu.svg" alt="blueshark logo" />
              </button>
            </div>
            {/* ------------ DESKTOP MENU -------------- */}
            <Link key={'/r-series/overview'} href="/r-series/overview">
              <a
                className={`hidden xl:flex items-center px-4 text-[16px] cursor-default lg:mt-0 font-medium h-full ${
                  router.pathname === '/r-series/overview' ||
                  router.pathname === '/r-series/specification' ||
                  router.pathname === '/r-series/pricing'
                    ? 'active-header'
                    : `${
                        router.pathname === '/' ? 'text-white' : 'text-white'
                      }  border-t-[3px] border-b-[3px] border-transparent hover:border-t-[3px] hover:border-t-white`
                }`}
              >
                <p className="cursor-pointer">Smart Vehicle</p>
              </a>
            </Link>
            <Link key={'/battery'} href="/battery">
              <a
                className={`hidden xl:flex items-center px-4 text-[16px] cursor-default lg:mt-0 font-medium h-full ${
                  activePage(router.pathname, '/battery')
                    ? 'active-header'
                    : `${
                        router.pathname === '/' ? 'text-white' : 'text-white'
                      } border-t-[3px] border-b-[3px] border-transparent hover:border-t-[3px] hover:border-t-white`
                }`}
              >
                <p className="cursor-pointer">Smart Energy</p>
              </a>
            </Link>
            <Link key={'/about-us'} href="/about-us">
              <a
                className={`hidden xl:flex items-center px-4 text-[16px] cursor-default lg:mt-0 font-medium h-full ${
                  activePage(router.pathname, '/about-us')
                    ? 'active-header'
                    : `${
                        router.pathname === '/' ? 'text-white' : 'text-white'
                      } border-t-[3px] border-b-[3px] border-transparent hover:border-t-[3px] hover:border-t-white`
                }`}
              >
                <p className="cursor-pointer">About Blueshark</p>
              </a>
            </Link>
            <Link key={'/news'} href="/news">
              <a
                className={`hidden xl:flex items-center px-4 text-[16px] cursor-default lg:mt-0 font-medium h-full ${
                  activePage(router.pathname, '/news')
                    ? 'active-header'
                    : `${
                        router.pathname === '/' ? 'text-white' : 'text-white'
                      } border-t-[3px] border-b-[3px] border-transparent hover:border-t-[3px] hover:border-t-white`
                }`}
              >
                <p className="cursor-pointer">News</p>
              </a>
            </Link>
          </div>
          <div>
            <Link key={'/contact'} href="/contact">
              <a
                className={`hidden xl:block cta border-2 border-transparent hover:border-white hover:bg-white hover:text-black transition ease-in duration-200 text-[16px] cursor-default lg:mt-0 font-medium text-center ${
                  activePage(router.pathname, '/contact')
                    ? 'text-white'
                    : `${router.pathname === '/' ? 'contact__navText' : 'text-white'}`
                }`}
              >
                <p className="cursor-pointer">Get in Touch</p>
              </a>
            </Link>
          </div>

          {/* ------------ TOP MOBILE MENU -------------- */}
          <div
            className={`z-20 w-[290px] ease-in-out duration-300 min-h-[100vh] h-full flex flex-col items-center fixed bg-[#020D14] overflow-y-scroll top-0 pr-[20px] pl-[35px] ${
              displayMenu ? 'right-0' : '-right-[290px]'
            }  transform`}
          >
            <div className="w-full">
              <div className="flex py-[17.5px] justify-between items-center w-full">
                <img src="/logo.svg" alt="blueshark logo" />
                <button
                  className="flex items-center px-3 py-2"
                  onClick={() => {
                    setDisplayMenu(false);
                    // setOpenSubMenu(false);
                  }}
                >
                  <img src="/close.svg" alt="blueshark logo" />
                </button>
              </div>
              <div className="text-sm flex-col w-full h-auto flex mt-[40px]">
                <Link key={'/'} href={'/'}>
                  <p
                    onClick={() => setDisplayMenu(false)}
                    className={`block pb-[25px] text-base mt-0 font-bold  hover:text-blue cursor-pointer ${
                      activePage(router.pathname, '/') ? 'text-blue' : 'text-white'
                    }`}
                  >
                    Home
                  </p>
                </Link>
                <Link key={'/r-series/overview'} href={'/r-series/overview'}>
                  <p
                    onClick={() => setDisplayMenu(false)}
                    className={`block pb-[25px] text-base mt-0 font-bold  hover:text-blue cursor-pointer ${
                      activePage(router.pathname, '/r-series/overview') ? 'text-blue' : 'text-white'
                    }`}
                  >
                    Smart Vehicle
                  </p>
                </Link>
                <Link key={'/battery'} href={'/battery'}>
                  <p
                    onClick={() => setDisplayMenu(false)}
                    className={`block pb-[25px] text-base mt-0 font-bold  hover:text-blue cursor-pointer ${
                      activePage(router.pathname, '/battery') ? 'text-blue' : 'text-white'
                    }`}
                  >
                    Smart Energy
                  </p>
                </Link>
                <Link key={'/about-us'} href={'/about-us'}>
                  <p
                    onClick={() => setDisplayMenu(false)}
                    className={`block pb-[25px] text-base mt-0 font-bold  hover:text-blue cursor-pointer ${
                      activePage(router.pathname, '/about-us') ? 'text-blue' : 'text-white'
                    }`}
                  >
                    About Blueshark
                  </p>
                </Link>
                <Link key={'/news'} href={'/news'}>
                  <p
                    onClick={() => setDisplayMenu(false)}
                    className={`block pb-[25px] text-base mt-0 font-bold  hover:text-blue cursor-pointer ${
                      activePage(router.pathname, '/news') ? 'text-blue' : 'text-white'
                    }`}
                  >
                    News
                  </p>
                </Link>
                <Link key={'/contact'} href={'/contact'}>
                  <p
                    onClick={() => setDisplayMenu(false)}
                    className={`block pb-[25px] text-base mt-0 font-bold  hover:text-blue cursor-pointer ${
                      activePage(router.pathname, '/contact') ? 'text-blue' : 'text-white'
                    }`}
                  >
                    Get in Touch
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`${
          router.pathname === '/' ||
          router.pathname === '/r-series/overview' ||
          router.pathname === '/r-series/specification' ||
          router.pathname === '/r-series/pricing' ||
          router.pathname === '/battery' ||
          router.pathname === '/about-us' ||
          router.pathname === '/contact' ||
          router.pathname === '/news' ||
          router.pathname === '/news/first-article'
            ? ' transition ease-in duration-200 siblingNav z-20'
            : 'bg-black'
        } h-[60px] absolute w-full`}
      ></nav>

      {(router.pathname === '/r-series/overview' ||
        router.pathname === '/r-series/specification' ||
        router.pathname === '/r-series/pricing' ||
        router.pathname === '/r-series/form') && (
        <>
          <nav
            className={`flex items-center ${
              router.pathname === '/r-series/overview' ||
              router.pathname === '/r-series/specification' ||
              router.pathname === '/r-series/pricing'
                ? 'bg-transparent'
                : 'bg-black'
            } sm:h-[60px] md:h-[60px] absolute w-full top-[60px] border-[#707070] ${
              height >= headerHeight && 'top-0'
            } sm:z-20 lg:z-30`}
            id="header-nav"
          >
            <div className="flex sm:px-[20px] md:px-0 sm:w-full md:w-10/12 lg:w-8/12 mx-auto justify-between items-center h-full">
              {/* ------------ LOGO -------------- */}
              <div className="text-[22px] font-medium items-center flex-shrink-0 text-white">R Series</div>
              {/* ------------ MENU ICON FOR MOBILE-------------- */}
              <a onClick={toggle}>
                <div className="flex xl:hidden text-base text-[#0091F2] gap-x-4 items-center pl-16">
                  {router.pathname === '/r-series/overview' && <div>Overview</div>}
                  {router.pathname === '/r-series/specification' && <div>Specs</div>}
                  {router.pathname === '/r-series/pricing' && <div>Pricing</div>}
                  {router.pathname === '/r-series/form' && <div>Pre-Order Now</div>}
                  <div className="text-white mt-[3px]">
                    {!openR1Nav && <FaChevronDown />}
                    {openR1Nav && <FaChevronUp />}
                  </div>
                </div>
              </a>
              {/* ------------ DESKTOP MENU -------------- */}
              <div className="w-full md:flex-wrap hidden xl:flex lg:items-center lg:w-auto h-full">
                <div className="text-sm hidden md:flex gap-x-12 mr-6 h-full items-center">
                  {menuSecond.map(({ path, keyTranslate }) => {
                    return (
                      <Link key={path} href={path}>
                        <a
                          className={`flex items-center font-medium px-4 text-[16px] cursor-default lg:mt-0 h-full ${
                            activePage(router.pathname, path)
                              ? 'active-header'
                              : 'text-white border-t-[3px] border-b-[3px] border-transparent hover:border-t-[3px] hover:border-t-white'
                          }`}
                        >
                          <p className=" cursor-pointer capitalize">{t(`${keyTranslate}`)}</p>
                        </a>
                      </Link>
                    );
                  })}
                </div>
                <Link href="/r-series/form">
                  <button
                    className={`text-[16px] font-medium border-2 bg-transparent ${
                      router.pathname === '/r-series/form'
                        ? 'text-white border-white bg-white'
                        : 'hover:text-black hover:bg-white border-white text-white border-transparent bg-transparent'
                    } text-white cta transition ease-in duration-200`}
                  >
                    Pre-Order Now
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <nav
            className={`flex items-center ${
              router.pathname === '/r-series/overview' ||
              router.pathname === '/r-series/specification' ||
              router.pathname === '/r-series/pricing'
                ? 'subNav z-10'
                : 'bg-black'
            } h-[60px] absolute w-full top-[60px] border-[#707070] ${height >= headerHeight && 'top-0'}`}
            id="header-nav"
          ></nav>
        </>
      )}
      {openR1Nav &&
        router.pathname !== '/' &&
        router.pathname !== '/battery' &&
        router.pathname !== '/about-us' &&
        router.pathname !== '/contact' && (
          <div
            className={`text-white flex flex-col text-[16px] items-start gap-y-10 py-8  bg-[#000000] h-fit absolute w-full border-t-2 top-[120px] border-[#707070] z-20 opacity-70`}
          >
            <div className="flex flex-col gap-y-10 py-8 sm:px-[20px] md:px-0 sm:w-full md:w-10/12 lg:w-8/12 mx-auto">
              {router.pathname === '/r-series/overview' ? (
                ''
              ) : (
                <div className="flex flex-col gap-y-8 w-full">
                  <div>
                    <a href={'/r-series/overview'} onClick={toggle}>
                      Overview
                    </a>
                  </div>
                  <div className="border-b-2 w-full xl:w-0 border-[#707070]"></div>
                </div>
              )}
              {router.pathname === '/r-series/specification' ? (
                ''
              ) : (
                <div className="flex flex-col gap-y-8 w-full">
                  <div>
                    <a href={'/r-series/specification'} onClick={toggle}>
                      Specs
                    </a>
                  </div>
                  <div className="border-b-2 w-full xl:w-0 border-[#707070]"></div>
                </div>
              )}
              {router.pathname === '/r-series/pricing' ? (
                ''
              ) : (
                <div className="flex flex-col gap-y-8 w-full">
                  <div>
                    <a href={'/r-series/pricing'} onClick={toggle}>
                      Pricing
                    </a>
                  </div>
                  <div className="border-b-2 w-full xl:w-0 border-[#707070]"></div>
                </div>
              )}
              {router.pathname === '/r-series/form' ? (
                ''
              ) : (
                <div className="flex flex-col gap-y-8 w-full">
                  <div>
                    <a href={'/r-series/form'} onClick={toggle}>
                      Pre-Order Now
                    </a>
                  </div>
                  <div className="border-b-2 w-full xl:w-0 border-[#707070]"></div>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  );
};
