import { Footer } from 'components/Common/Footer';
import { Header } from 'components/Common/Header';
import CookieModal from 'components/Common/Modals/CookieModal';
import { getCookie } from 'cookies-next';
import { activePage } from 'helpers/handleString';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  isNotFoundPage?: boolean;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [isAcceptedCookie, setIsAcceptedCookie] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (getCookie('ac') || activePage(router.asPath, '/about-us/privacy-policy')) {
      setIsAcceptedCookie(true);
    } else {
      setIsAcceptedCookie(false);
    }
  }, [router.asPath]);

  const renderLayout = () => {
    return (
      <>
        <Header setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
        <div className="w-full">{children}</div>
        <Footer />
        {displayMenu && (
          <div
            onClick={() => setDisplayMenu(false)}
            className="bg-black opacity-30 absolute top-0 right-0 left-0 bottom-0 z-[15]"
          ></div>
        )}
        {!isAcceptedCookie && <CookieModal />}
      </>
    );
  };

  return <div className="flex flex-col w-full relative">{renderLayout()}</div>;
};

export default Layout;
