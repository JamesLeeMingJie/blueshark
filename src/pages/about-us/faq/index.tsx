import { Disclosure, Transition } from '@headlessui/react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useGetResourceInfinite } from 'apis/aboutus';
import { get, isArray, isEmpty } from 'lodash';
import { ADMINRESOURCE } from 'models/const';
import { IResource } from 'models/menu';
import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const FaqPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { ref: lastItem, inView } = useInView();
  const {
    status,
    data: resourceFAQsPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetResourceInfinite({ type: ADMINRESOURCE.faq });

  useEffect(() => {
    const pages = get(resourceFAQsPage, 'pages');
    const lastPage = isArray(pages) ? pages[pages.length - 1] : null;

    if (inView && !isFetchingNextPage && !isEmpty(resourceFAQsPage) && !isEmpty(get(lastPage, 'items', []))) {
      fetchNextPage();
    }
  }, [inView]);

  const resourceFAQs = useMemo(() => {
    return get(resourceFAQsPage, 'pages', []);
  }, [resourceFAQsPage]);

  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <div className="sm:bg-about-terms-mobile bg-[#020D14] md:bg-about-us-faq sm:bg-center bg-cover bg-no-repeat md:min-h-[300px] sm:min-h-[30vh] text-white relative">
        <div className="relative md:top-[6rem] text-center sm:mx-[5%] sm:top-[6rem] md:m-0">
          <h3
            data-aos="fade-down"
            className="sm:leading-[36px] sm:text-[28px] md:leading-[50px] md:text-[40px] font-semibold"
          >
            FAQ
          </h3>
          <div className="mt-3 flex justify-center divide-x">
            <Link href={'/'}>
              <a>
                <p className="flex items-center text-[14px] leading-[22px] font-semibold sm:px-3 md:px-5 cursor-pointer hover:opacity-100 hover:text-blue opacity-70">
                  Home
                </p>
              </a>
            </Link>
            <Link href={'/about-us'}>
              <a>
                <p className="flex items-center text-[14px] leading-[22px] font-semibold sm:px-3 md:px-5 cursor-pointer hover:opacity-100 hover:text-blue opacity-70">
                  About us
                </p>
              </a>
            </Link>
            <Link href={'/about-us/terms-conditions'}>
              <a>
                <p className="flex items-center text-[14px] leading-[22px] font-semibold sm:px-3 md:px-5 cursor-pointer hover:opacity-100 hover:text-blue opacity-70">
                  Terms & Conditions
                </p>
              </a>
            </Link>
            <Link href={'/about-us/faq'}>
              <a>
                <p className="flex items-center text-[14px] text-blue font-semibold leading-[22px] sm:px-3 md:px-5 cursor-pointer ">
                  FAQ
                </p>
              </a>
            </Link>
            <Link href={'/about-us/privacy-policy'}>
              <a>
                <p className="flex items-center text-[14px] leading-[22px] font-semibold sm:px-3 md:px-5 cursor-pointer hover:opacity-100 hover:text-blue opacity-70">
                  Privacy Policy
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#020D14] sm:py-[2rem] md:py-[7rem] sm:px-[20px] md:px-[23%] md:min-h-[calc(100vh-444px)] min-h-[calc(70vh-215px)] ">
        {resourceFAQs.map((page: any, index: number) => {
          return (
            <Fragment key={`page_${page?.meta?.currentPage}_${index}`}>
              {get(page, 'items', []).map((faq: IResource) => {
                return (
                  <div className="border-b border-white-10 mb-3 pb-[2rem]" key={faq.id}>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between items-center bg-transparent px-4 py-2 opacity-70 text-left sm:text-[16px] md:text-[24px] md:leading-[32px] font-medium text-white focus:outline-none ">
                            <span>{get(faq, 'title', '_')}</span>
                            <img
                              src="/icons/right.svg"
                              alt="right icon"
                              className={`${open ? 'rotate-90 transform' : ''} transition duration-300 h-5 w-5 ml-5`}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-100 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel
                              className="px-4 pt-4 pb-2 text-[14px] leading-[24px] font-inter font-normal text-white rm-reset-list"
                              dangerouslySetInnerHTML={{ __html: get(faq, 'content', '_') }}
                            ></Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
        {(status === 'loading' || isFetchingNextPage) && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <div ref={lastItem}></div>
      </div>
    </div>
  );
};

export default FaqPage;
