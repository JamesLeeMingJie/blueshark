import { Listbox, Transition } from '@headlessui/react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useGetResourceInfinite } from 'apis/aboutus';
import { useWindowSize } from 'hooks/useWindowSize';
import { last, get, isArray, isEmpty } from 'lodash';
import { InView, useInView } from 'react-intersection-observer';
import { ADMINRESOURCE } from 'models/const';
import { IResource } from 'models/menu';
import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { useScrollPosition } from 'hooks/useScrollPosition';
import Head from 'next/head';

interface IHelpOption {
  label: string;
  value: string;
  content: string;
  startPosition?: number;
}
interface ScrollElement {
  position: number;
  isMax: boolean;
  index: number;
}
function getStyle(oElm: any, strCssRule: string) {
  let strValue = '';
  if (document.defaultView && document.defaultView.getComputedStyle) {
    strValue = document.defaultView.getComputedStyle(oElm, '').getPropertyValue(strCssRule);
  } else if (oElm.currentStyle) {
    strCssRule = strCssRule.replace(/\-(\w)/g, function (_, p1) {
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
}

const checkMaxScrollElement = (data: ScrollElement[]) => {
  const isMaxElement = data.filter((item) => item.isMax);
  if (isMaxElement.length > 1) {
    const newData = data.reduce(
      (acc, currentItem) => {
        if (currentItem.isMax) {
          return {
            dataItems: [
              ...acc.dataItems,
              {
                ...currentItem,
                position: currentItem.position - 5 * (isMaxElement.length - acc.isMaxCounts),
              },
            ],
            isMaxCounts: acc.isMaxCounts + 1,
          };
        }
        return {
          ...acc,
          dataItems: [...acc.dataItems, currentItem],
        };
      },
      {
        dataItems: [] as ScrollElement[],
        isMaxCounts: 0,
      },
    );
    return newData.dataItems;
  }
  return data;
};

const sessionStorageKey = 'scrollTop';

const HelpPage = () => {
  const { inView: isReFetch } = useInView();
  const [sections, setSections] = useState<IHelpOption[]>([]);
  const [size] = useWindowSize();
  const [active, setActive] = useState<string[]>();
  const [loading, setLoading] = useState(false);
  const [width] = useWindowSize();
  const [dataLoaded, setDataLoaded] = useState(false);
  const {
    data: resourceHelpPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetResourceInfinite({ type: ADMINRESOURCE.help, limit: 50 });
  useEffect(() => {
    const pages = get(resourceHelpPage, 'pages');
    const lastPage = isArray(pages) ? pages[pages.length - 1] : null;

    if (isReFetch && !isFetchingNextPage && !isEmpty(resourceHelpPage) && !isEmpty(get(lastPage, 'items', []))) {
      fetchNextPage();
    }
  }, [isReFetch]);

  const helpOptions = useMemo(() => {
    let _resourceHelp: any[] = [];
    const pages = get(resourceHelpPage, 'pages', []);
    pages.forEach((page) => {
      _resourceHelp = [..._resourceHelp, ...get(page, 'items', [])];
    });

    return _resourceHelp.map((help: IResource, index: number) => {
      const label = get(help, 'title', '');
      const value = get(help, 'title', '').split(' ').join('') + get(help, 'id', index);

      const newMenu = {
        label,
        value,
        content: get(help, 'content', ''),
        startPosition: 0,
      };
      return newMenu;
    });
  }, [resourceHelpPage]);

  const [help, setHelp] = useState(get(helpOptions[0], 'value', ''));
  const [arrowDir, setArrowDir] = useState(false);
  const getHelpLabel = (value: string) => {
    return helpOptions.find((item: IHelpOption) => item?.value === value)?.label;
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const height = useScrollPosition();
  useEffect(() => {
    const banner = document.getElementById('help-banner');
    // const bannerHeight = get(banner, 'offsetHeight', 0);
    console.log(banner);

    const timeout = setTimeout(() => {
      const inViewSection = sections
        .filter((item) => {
          console.log('startPosition: ', get(item, 'startPosition', 0), Math.ceil(height));
          return get(item, 'startPosition', 0) <= Math.ceil(height);
        })
        .map((item) => item.value);
      setActive([inViewSection[inViewSection.length - 1]]);
      console.log('------------------------------------------');
      if (loading) {
        setDataLoaded(true);
      }
    }, 0);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [height, sections, loading]);

  useEffect(() => {
    if (dataLoaded) {
      const previousScrollPosition = sessionStorage.getItem(sessionStorageKey);
      if (previousScrollPosition && loading) {
        window.scrollTo({
          top: Number(previousScrollPosition),
          behavior: 'smooth',
        });
      }
    }
  }, [dataLoaded, loading]);

  useEffect(() => {
    const header = document.getElementById('header-nav');
    const banner = document.getElementById('help-banner');
    const sectionContainer = document.getElementById('section-container');
    const body = document.body;
    if (header && banner && body && sectionContainer) {
      const containerPaddingRaw = getStyle(sectionContainer, 'padding-top');
      const containerPadding = containerPaddingRaw ? Number(containerPaddingRaw.replace('px', '')) : 0;
      const headerHeight = header.offsetHeight;
      const bannerHeight = banner.offsetHeight;
      const viewPortHeight = window.innerHeight;
      const bodyHeight = body.clientHeight;
      const maxToScroll = bodyHeight - viewPortHeight;

      let acc = headerHeight + bannerHeight + containerPadding;
      const positionMap = helpOptions.map((item, index) => {
        if (index > 0) {
          const previousElement = document.getElementById(helpOptions[index - 1].value);
          if (previousElement) {
            const newAcc = acc + previousElement.offsetHeight - headerHeight;
            acc = acc + previousElement.offsetHeight;
            return {
              position: newAcc > maxToScroll ? maxToScroll : newAcc,
              isMax: newAcc > maxToScroll,
              index,
            };
          }
          return {
            position: item.startPosition,
            isMax: false,
            index,
          };
        }
        return {
          position: item.startPosition,
          isMax: false,
          index,
        };
      });
      const newData = checkMaxScrollElement(positionMap);
      const newSections = helpOptions.map((item, index) => {
        return {
          ...item,
          startPosition: newData[index].position,
        };
      });
      setSections(newSections);
    }
  }, [helpOptions, width, loading]);

  useEffect(() => {
    const handle = () => {
      sessionStorage.setItem(sessionStorageKey, String(height));
    };
    window.addEventListener('beforeunload', handle);
    return () => {
      window.removeEventListener('beforeunload', handle);
    };
  }, [height]);

  return (
    <div>
      <Head>
        <title>Help</title>
      </Head>
      <div
        id="help-banner"
        className="sm:bg-about-us-mobile md:bg-about-us-help sm:bg-center bg-cover bg-no-repeat md:min-h-[300px] sm:min-h-[30vh] text-white relative bg-[#020D14]"
      >
        <div className="relative text-center sm:mx-[5%] top-[7rem] md:m-0">
          <h3
            data-aos="fade-down"
            className="sm:leading-[36px] sm:text-[28px] md:leading-[50px] md:text-[40px] font-semibold"
          >
            Help
          </h3>
        </div>
      </div>
      <div className="bg-[#020D14] sm:block md:flex sm:px-[25px] md:pl-[60px] md:min-h-[calc(100vh-444px)] min-h-[calc(70vh-215px)]">
        {size > 768 && (
          <div className="flex flex-col min-w-[330px] ">
            <div className="sticky top-0 flex pt-[100px] flex-col bg-dark-blue-gradient px-[40px] text-[16px] leading-[40px]">
              {sections.map((item: IHelpOption) => {
                return (
                  <div
                    onClick={() => {
                      setHelp(item?.value);
                      if (window) {
                        window.scrollTo({
                          top: item.startPosition,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    key={item?.value}
                    className={`cursor-pointer hover:text-white truncate ${
                      last(active) === item?.value && dataLoaded
                        ? 'text-white  font-medium'
                        : 'text-gray-500 font-normal'
                    }`}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {size <= 768 && (
          <div className="z-10 pt-[25px] sticky top-[50px]">
            <Listbox value={help} onChange={setHelp}>
              <div onClick={() => setArrowDir(!arrowDir)} className="relative bg-[#161B24] rounded-[12px] px-[15px] ">
                <Listbox.Button className="relative w-full cursor-pointer py-4 pl-3 pr-10 text-left sm:text-sm">
                  <p className="block text-white text-base ">{getHelpLabel(help)}</p>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <img
                      className={`${arrowDir ? 'rotate-180' : 'rotate-360'} transition duration-300`}
                      src="/images/down.svg"
                      aria-hidden="true"
                      alt="arrow"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 l-[10px] w-full max-h-[70vh] rounded-md bg-white py-1 text-base left-0 sm:text-sm overflow-y-scroll">
                    {sections.map((item: IHelpOption, index: number) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none pt-1 px-5  ${
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                          }`
                        }
                        value={item?.value}
                      >
                        {({ selected }) => (
                          <a
                            href={`#${item?.value}`}
                            className={`block leading-[40px] text-[16px] text-gray-500 ${
                              selected ? 'font-bold' : 'font-normal'
                            }`}
                          >
                            <p>{item.label}</p>
                            {selected ? (
                              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <img src="/images/selected.svg" className="h-5 w-5" aria-hidden="true" alt="selected" />
                              </span>
                            ) : null}
                          </a>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        )}
        <div id="section-container" className="sm:pt-[20px] md:px-[100px] md:pt-[100px]">
          {sections.length > 0 && <SectionsComponent setLoading={setLoading} sections={sections} />}
        </div>
      </div>
    </div>
  );
};

const SectionsComponent = (props: { sections: IHelpOption[]; setLoading: (val: boolean) => void }) => {
  return (
    <>
      {props.sections.map(({ label, value, content }: IHelpOption, index: number) => {
        return (
          <InView key={value} threshold={0.1}>
            <SectionItems
              value={value}
              label={label}
              content={content}
              index={index}
              onMount={() => {
                props.setLoading(true);
              }}
            />
          </InView>
        );
      })}
    </>
  );
};

const SectionItems = ({
  value,
  index,
  content,
  label,
  onMount,
}: {
  value: string;
  index: number;
  content: string;
  label: string;
  onMount: () => void;
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        onMount();
      }, 300);
    }
  }, [containerRef.current]);

  return (
    <section
      ref={containerRef}
      id={value}
      className={`sm:scroll-mt-[130px] md:scroll-mt-[80px] text-left pb-[40px] border-b border-white-10 ${
        index !== 0 && 'pt-8'
      }`}
    >
      <p className="font-bold text-[14px] leading-[22px] text-blue mb-3">{label}</p>
      <p
        className="text-white font-inter text-[14px] leading-[24px] font-normal mt-5 rm-reset-list"
        dangerouslySetInnerHTML={{ __html: content || '' }}
      ></p>
    </section>
  );
};

export default HelpPage;
