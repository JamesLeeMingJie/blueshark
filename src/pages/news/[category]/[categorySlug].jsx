import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { BsLink45Deg, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

import relatedArticle1 from '../../../../public/revampImages/related-article1.png';
import relatedArticle2 from '../../../../public/revampImages/related-article2.png';
import relatedArticle3 from '../../../../public/revampImages/related-article3.png';

import articleData from '../../../../src/lib/article-data.json';
import styles from '../../../styles/Background.module.css';

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

  const shareUrl = 'https://blueshark.gravitas-staging.com/';
  const title = 'Blueshark Malaysia';

  return (
    <div>
      <Head>
        <title>{data.header}</title>
      </Head>
      <section className='h-[75vh] 3xl:h-[65vh] bg-[#F8F8F8] relative -z-10'>
        <div className="text-title text-center font-bold pt-[9rem] leading-tight text-primary w-10/12 lg:w-5/12 mx-auto">{data.articleTitle}</div>
        <div className='text-center absolute left-1/2 -translate-x-1/2 bottom-[-20%] xl:bottom-[-30%] w-full md:w-8/12 lg:w-7/12 min-w-[50%]'>
          <Image src={data.mainBanner} width={"1000"} height={"500"} alt='' />
        </div>
      </section>
      <section className={`h-fit ${styles.articleBackground} pt-[20rem] lg:pt-[25rem] pb-[10rem]`}>
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
          <p className='text-h2 leading-tight text-primary pb-8'>
            {data.paragraphTitle}
          </p>
          <p className='text-custom-gray pb-8'>
            {data.paragraph1}
          </p>
          <p className='text-custom-gray pb-8'>
            {data.paragraph2}
          </p>
          <p className='text-custom-gray pb-12'>
            {data.paragraph3}
          </p>
          <div className='pb-12'>
            <Image src={data.subBanner} width={800} height={300} alt='' />
          </div>
          <p className='text-h2 leading-tight text-primary pb-8'>
            {data.secondaryParagraphTitle}
          </p>
          <p className='text-custom-gray pb-12'>
            {data.paragraph4}
          </p>
          <div className="border-b-[1px] w-full border-[#707070] mb-12"></div>
          <p className='text-h2 text-center text-primary pb-8'>
            Related Articles
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8'>
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
          </div>
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
