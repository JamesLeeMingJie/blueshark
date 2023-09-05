import AboutSection from 'components/Overview/AboutSection';
import IntroSection from 'components/Overview/IntroSection';
import BatterySection from 'components/Overview/BatterySection';
import FeatureSection from 'components/Overview/FeatureSection';

import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blueshark R1 | Overview</title>
      </Head>
      <IntroSection />
      <AboutSection />
      <BatterySection />
      <FeatureSection />
    </div>
  );
};

export default Home;
