import type { NextPage } from 'next';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <div className="bg-[url('/images/404.png')] bg-cover bg-center bg-repeat-none bg-no-repeat relative md:min-h-[calc(100vh-144px)] min-h-[calc(100vh-215px)] flex justify-center items-center">
        <div className="text-center">
          <div className="absolute right-[50%] translate-x-[50%] top-[20%]">
            <img src={'/images/404Number.png'} alt="" />

            <div className="mt-[25px]">
              <p className="text-[20px] font-normal text-white">Page not found!</p>
              <p className="text-[20px] font-normal text-white ">
                Go back to hompage at this{' '}
                <Link href={'/'}>
                  <span className="text-[#38BDF8] pl-[5px] pt-[1px] cursor-pointer">link</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
