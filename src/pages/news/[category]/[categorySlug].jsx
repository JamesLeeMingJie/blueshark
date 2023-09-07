import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { BsLink45Deg, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

// import relatedArticle1 from '../../../../public/revampImages/related-article1.png';
// import relatedArticle2 from '../../../../public/revampImages/related-article2.png';
// import relatedArticle3 from '../../../../public/revampImages/related-article3.png';

import articleData from '../../../../src/lib/article-data.json';
import styles from '../../../styles/Background.module.css';
import Link from "next/link";

export default function CategorySlug({ data }) {
  const router = useRouter();
  const { category, categorySlug } = router.query;
  console.log(category, categorySlug);

  // const data = articleData[category]?.[categorySlug];
  // console.log(data);

  function handleCopy() {
    Swal.fire({
      background: '#374047',
      color: '#eeeff1',
      title: 'Copied!',
      text: 'Link successfully copied to clipboard',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  const shareUrl = 'https://blueshark.com.my/news/brand/blueshark-corporate-leasing-programme';
  const title = 'Blueshark Malaysia';

  return (
    <div>
      <Head>
        <title>{data.header}</title>
      </Head>
      {/* <section className={`sm:hidden md:block  bg-cover bg-center bg-[url('/articleInternal/background/internal__bg-1.png')] relative`}> */}

      <section className="">
        <div className="sm:hidden md:block mt-[60px] pb-8 w-10/12 lg:w-6/12 h-fit mx-auto">
          <Image src={data.mainBanner} width={"1920"} height={"1080"} alt="" />
        </div>
        {/* <p className='text-custom-gray pb-8'>
          {data.byline}
        </p> */}
        {/* <div className='sm:hidden md:block text-center absolute left-1/2 -translate-x-1/2 bottom-[-20%] xl:bottom-[-30%] w-full md:w-8/12 lg:w-6/12 min-w-[50%] z-10'>
          <Image src={data.mainBanner} width={"1920"} height={"1080"} alt='' />
        </div> */}
      </section>
      <section className={`sm:block md:hidden aspect-auto`}>
        <Image src={'/articleInternal/background/internal__bg-1.png'} width={"1920"} height={"1080"} alt="" />

        {/* <div className="sm:block md:hidden pb-8">
        </div>
        */}
        {/* <p className='text-custom-gray pb-8'>
          {data.byline}
        </p> */}
        {/* <div className='sm:hidden md:block text-center absolute left-1/2 -translate-x-1/2 bottom-[-20%] xl:bottom-[-30%] w-full md:w-8/12 lg:w-6/12 min-w-[50%] z-10'>
          <Image src={data.mainBanner} width={"1920"} height={"1080"} alt='' />
        </div> */}
      </section >
      <section className={`h-fit ${styles.articleBackground} pt-12 pb-[10rem]`}>
        <div className='w-10/12 lg:w-6/12 mx-auto'>
          <div className='flex items-end justify-between text-custom-gray pb-8'>
            <div className='italic'>
              {data.date}
            </div>
            <div>
              <div className='pb-4'>
                Share:
              </div>
              <div className='flex gap-x-8 items-center'>
                <div className='text-white rounded-[2rem] bg-[#2F619E] p-2 cursor-pointer'>
                  <CopyToClipboard
                    text={shareUrl}
                    onCopy={handleCopy}
                  >
                    <BsLink45Deg />
                  </CopyToClipboard>
                </div>
                <div className='text-[#0077B7] pt-2'>
                  <LinkedinShareButton
                    url={shareUrl}
                    quote={title}
                  >
                    <BsLinkedin />
                  </LinkedinShareButton>
                </div>
                <div className='text-[#1D9BF0] pt-2'>
                  <TwitterShareButton
                    url={shareUrl}
                    quote={title}
                  >
                    <BsTwitter />
                  </TwitterShareButton>
                </div>
                <div className='text-[#1877F2] pt-2'>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                  >
                    <BsFacebook />
                  </FacebookShareButton>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] w-full border-[#707070] mb-12"></div>
          <div className="text-title font-bold sm:pb-12 leading-tight text-primary mx-auto">{data.articleTitle}</div>

          {data.byline ? <p className='text-custom-gray pb-8' dangerouslySetInnerHTML={{ __html: data.byline }}></p> : ""}

          <div className="text-custom-gray pb-8" dangerouslySetInnerHTML={{ __html: data.paragraphTitle }}></div>

          <div className="border-b-[1px] w-full border-[#707070] mb-12"></div>

          <p className="text-h4 pb-8">
            Ask us about our corporate pricing.
          </p>
          <Link href="/r-series/form">
            <button
              className="text-button text-primary hover:text-white bg-transparent hover:bg-primary border-2 border-primary transition ease-in duration-200 cta font-bold mb-8"
            >
              Get in Touch
            </button>
          </Link>
          <p dangerouslySetInnerHTML={{ __html: data.paragraph1 }} className='text-custom-gray pb-8'>
          </p>
          <p className='text-custom-gray pb-8'>
            {data.paragraph2}
          </p>
          {data.embedYoutube ? <iframe className="pb-8 aspect-video w-full" src={`${data.embedYoutube}`}></iframe> : ""}
          <p dangerouslySetInnerHTML={{ __html: data.paragraph3 }} className='text-custom-gray pb-12'>
          </p>
          <p className='text-custom-gray pb-12'>
            {data.paragraph4}
          </p>

          {data.subBanner1 ? <div className='pb-12'>
            <img src={data.subBanner1} width={900} height={500} alt='' />
          </div> : ""}

          {data.paragraph5 ? <p className='text-custom-gray pb-12' dangerouslySetInnerHTML={{ __html: data.paragraph5 }}></p> : ""}

          {data.paragraph6 ? <p className='text-custom-gray pb-12' dangerouslySetInnerHTML={{ __html: data.paragraph6 }}></p> : ""}

          {data.subBanner2 ? <div className='pb-12'>
            <img src={data.subBanner2} width={900} height={500} alt='' />
          </div> : ""}

          {data.paragraph7 ? <p className='text-custom-gray pb-12' dangerouslySetInnerHTML={{ __html: data.paragraph7 }}></p> : ""}

          <div className="text-custom-gray pb-12">
            <table className="w-full table-fixed border-[1px] border-black">
              <tr>
                <th className="bg-primary"></th>
                <th className="text-white bg-primary">Purchasing ICE Scooters:</th>
                <th className="text-white bg-primary">Leading Blueshark Scooters</th>
              </tr>
              <tr>
                <th className="text-black">Initial Investment</th>
                <th>Higher</th>
                <th>Lower <br />You also have the added benefit to adjust or pause your subscription at any time.</th>
              </tr>
              <tr>
                <th className="text-black">Depreciation</th>
                <th>20% Annually</th>
                <th>None</th>
              </tr>
              <tr>
                <th className="text-black">Loan Interest</th>
                <th>10% Annually</th>
                <th>None</th>
              </tr>
            </table>
          </div>

          {data.paragraph8 ? <p className='text-custom-gray pb-12' dangerouslySetInnerHTML={{ __html: data.paragraph8 }}></p> : ""}

          {data.paragraph9 ? <p className='text-custom-gray pb-12' dangerouslySetInnerHTML={{ __html: data.paragraph9 }}></p> : ""}

          {/* <p className='text-h2 leading-tight text-primary pb-8'>
            {data.secondaryParagraphTitle}
          </p> */}

          {/* Grey horizontal line */}
          {/* <div className="border-b-[1px] w-full border-[#707070] mb-12"></div> */}

          {/* <p className='text-h2 text-center text-primary pb-8'>
            Related Articles
          </p> */}
          {/* <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8'>
            <div className='rounded-[1rem] overflow-hidden flex flex-col'>
              <div className='articleImage flex-1'>
                <Image src={relatedArticle1} alt='' />
              </div>
              <div className="px-8 py-4 bg-[#FBF5FF] mt-[-3px] flex-1">
                <p className='text-[14px] py-4 text-primary italic'>
                  January 20, 2023
                </p>
                <p className='text-h4'>
                  Blueshark's R1 Fun Drive takes the streets of Kota Damansara
                </p>
              </div>
            </div>
            <div className='rounded-[1rem] overflow-hidden flex flex-col'>
              <div className='articleImage flex-1'>
                <Image src={relatedArticle2} alt='' />
              </div>
              <div className="px-8 py-4 bg-[#FBF5FF] mt-[-3px] flex-1">
                <p className='text-[14px] py-4 text-primary italic'>
                  Just now
                </p>
                <p className='text-h4'>
                  Blueshark to announce partnership with foodpanda?
                </p>
              </div>
            </div>
            <div className='rounded-[1rem] overflow-hidden flex flex-col'>
              <div className='articleImage flex-1'>
                <Image src={relatedArticle3} alt='' />
              </div>
              <div className="px-8 py-4 bg-[#FBF5FF] mt-[-3px] flex-1">
                <p className='text-[14px] py-4 text-primary italic'>
                  March 14, 2023
                </p>
                <p className='text-h4'>
                  Grab driver's take on the Blueshark R1
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div >
  );
}

export async function getServerSideProps(context) {
  const { default: articleDetails } = await import('../../../../src/lib/article-data.json');

  console.log(articleData);

  return {
    props: {
      data: articleDetails[context.query.category]?.[context.query.categorySlug] || null,
    },
  };
}
