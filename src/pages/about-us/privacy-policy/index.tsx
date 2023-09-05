import Aos from 'aos';
import 'aos/dist/aos.css';
import { useGetResourceInfinite } from 'apis/aboutus';
import { get, isArray, isEmpty } from 'lodash';
import { ADMINRESOURCE } from 'models/const';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const PrivacyPolicy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { t } = useTranslation('policy');
  console.log(t);
  const { ref: lastItem, inView } = useInView();
  console.log(lastItem);
  const {
    status,
    data: resourcePrivacyPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetResourceInfinite({ type: ADMINRESOURCE.privacy });
  console.log(status);

  useEffect(() => {
    const pages = get(resourcePrivacyPage, 'pages');
    const lastPage = isArray(pages) ? pages[pages.length - 1] : null;

    if (inView && !isFetchingNextPage && !isEmpty(resourcePrivacyPage) && !isEmpty(get(lastPage, 'items', []))) {
      fetchNextPage();
    }
  }, [inView]);

  const resourceFAQs = useMemo(() => {
    return get(resourcePrivacyPage, 'pages', []);
  }, [resourcePrivacyPage]);
  console.log(resourceFAQs);

  return (
    <div>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="sm:bg-center bg-cover bg-no-repeat md:min-h-[200px] sm:min-h-[25vh] text-white relative bg-[#020D14] -z-10">
        <div className="relative md:top-[11rem] text-center sm:mx-[5%] sm:top-[10rem] md:m-0">
          <h3
            data-aos="fade-down"
            className="sm:leading-[36px] sm:text-[28px] md:leading-[50px] md:text-[40px] font-semibold"
          >
            Privacy Policy
          </h3>
        </div>
      </div>
      <div className="bg-[#020D14] sm:py-[2rem] md:py-[5rem] text-white leading-[24px] md:min-h-[calc(100vh-444px)] min-h-[calc(70vh-215px)]">
        <p className="sm:w-10/12 md:w-8/12 mx-auto text-[14px] leading-[24px] font-inter font-normal text-white">
          Blueshark Ecosystem Sdn. Bhd. and/or any of its subsidiaries, related companies, associates, affiliates,
          jointly controlled entities, shareholders and any other entities within the group (“Blueshark”, “we” or us”)
          value and respect the privacy rights of all our customers across all aspects of our business and we strive to
          protect your Personal Data in compliance with the laws of Malaysia. Therefore, we strongly encourage you to
          read this Privacy Notice (“Notice”) carefully to understand our policies and practices regarding your Personal
          Data and how we will treat it. In essence, this Notice explains
          <br />
          <br />
          1. The Personal Data that we collect about you;
          <br />
          <br /> 2. How we collect your Personal Data;
          <br /> 3. How we use your Personal Data;
          <br /> 4. Disclosure of your Personal Data; and
          <br /> 5. Your Right.
          <br />
          <br />
          This Notice covers both our online and offline data collection activities, including Personal Data that we
          collect through our various channels including but not limited to website, mobile application, third party
          social networks, campaigns, contests and events. Please note that we might compile Personal Data collected
          from different sources. As part of this, we combine Personal Data that were originally collected by different
          Blueshark entities and partners. Please see Section 8 for further information on how to object to this.
          <br />
          <br />
          By using our website, mobile application, services or by otherwise giving us your Personal Data, you are
          accepting the practices described in this Notice. If you do not agree to this Notice, please do not use our
          website, mobile application, services or otherwise give us any of your Personal Data. This Notice may be
          updated from time to time (see Section 9).
          <br />
          <br />
          Unless stated otherwise, the words used herein shall have the same meaning and definition as stated in the
          Personal Data Protection Act 2010.
          <br />
          <br />
          1. THE PERSONAL DATA THAT WE COLLECT
          <br />
          <br />
          In order to set up your account with Blueshark and/or to provide you with our services, to deal with your
          enquiries, and/or to inform you of current and upcoming promotions, we need to collect and use your Personal
          Data. Please note that if we are not provided with all the Personal Data that we require, we may not be able
          to provide you with our services or continue to provide you with our services.
          <br />
          <br />
          The Personal Data that we collect may include, but not limited to, your name, national registration identity
          card number, nationality, passport number, address, email address, mobile phone number, date of birth, age,
          gender, race, photograph, motor vehicle registration number, credit card details, debit card details, e-wallet
          details, social network details, internet protocol (IP) address, location, background information (including
          financial and criminal records) as applicable. If necessary, we may collect sensitive Personal Data including
          but not limited to physical or mental health condition and your religious belief.
          <br />
          <br />
          We collect this information only with your consent and/or in strict compliance with applicable laws. If you
          are a company, we may collect data including, but not limited to, company registration number, phone and/or
          fax number, business and/or registered address, email address, financial records, and/or your employees’
          Personal Data. In respect of your employees’ Personal Data, you are under the obligation to obtain the consent
          of the employees before providing us with the employees’ Personal Data of which we rely solely on your
          representation and declaration that such consent has been obtained.
          <br />
          <br />
          2. HOW WE COLLECT YOUR PERSONAL DATA
          <br />
          <br />
          We collect your Personal Data through Blueshark mobile application, Blueshark website and/or any other
          physical forms as well as any information about you that has been or may be collected, stored, used and
          processed by us from time to time.
          <br />
          <br />
          The provision of your Personal Data is voluntary. However, if you do not provide us your Personal Data, we
          will not be able to process your application to open an account with us or update your account, and thereby
          causing us to be unable to allow you to use any of our services.
          <br />
          <br />
          We may also collect your Personal Data from third party related mobile applications or software for the
          purpose of providing you with our services or related services. We may also collect your Personal Data from
          your employer where the services we provide are related to your employer-employee relationship and we may
          collect your Personal Data from your employees. We may also obtain your Personal Data from third parties
          (including but not limited to, information from your referees, public records, or background check agencies
          who may be engaged to provide us with your Personal Data, including information regarding past criminal
          record(s), if any). All such information will be kept strictly confidential. In addition to the above, we may
          also collect your Personal Data from any third-party that you have authorised to disclose your Personal Data
          to us including but not limited to third party social networks and advertising networks.
          <br />
          <br />
          3. HOW WE USE YOUR PERSONAL DATA
          <br />
          <br />
          We will use your Personal Data for the following purposes including but not limited to:
          <br />
          <br />
          (a) Processing your application to open for an account and/or update your account;
          <br />
          <br />
          (b) Providing our services to you;
          <br />
          <br />
          (c) Managing and maintaining your account with us;
          <br />
          <br />
          (d) General business and administrative purposes;
          <br />
          <br />
          (e) Responding to your enquiries;
          <br />
          <br />
          (f) Providing you with information about goods or services including marketing communications, campaigns or
          promotions;
          <br />
          <br />
          (g) Serving you with advertisements and engage with you on third party social networks through your
          interaction with third party social networking features, such as “Like” functions;
          <br />
          <br />
          (h) Offering or providing related services, including our own value-added services or services of our
          business/strategic/collaborative partners with whom we may collaborate with;
          <br />
          <br />
          (i) Conducting due diligence and background checks (including financial and criminal records check), or
          carrying out any other monitoring or screening activities or risk management procedures that may be required
          by law or that may have been put in place by us;
          <br />
          <br />
          (j) Conducting credit evaluation with any credit reporting agencies;
          <br />
          <br />
          (k) Detecting the location of the EV motorcycle for safety and security purposes;
          <br />
          <br />
          (l) Conducting market research; and
          <br />
          <br />
          (m) Any purposes required or permitted by any laws, regulations, guidelines, and/or relevant regulatory
          authorities.
          <br />
          <br />
          4. DISCLOSURE OF YOUR PERSONAL DATA
          <br />
          <br />
          We may disclose your Personal Data to our subsidiaries, related companies, associates, affiliates, jointly
          controlled entities, shareholders and any other entities within the group.
          <br />
          <br />
          In addition to the above, we may also share your Personal Data with the following types of third parties:
          <br />
          <br />
          (a) Business/strategic/collaborative partners: They are external companies whom we may collaborate with to
          provide value-added or better services.
          <br />
          <br />
          (b) Service providers: They are external companies that we use/engage to help us run our business (e.g. order
          fulfilment, payment processing, fraud detection and identity verification, website operation, market research
          companies, support services, promotions, website development, data analysis, etc.).
          <br />
          <br />
          (c) Credit reporting agencies and debt collectors: To the extent permitted by applicable law, we engage credit
          reporting agencies and debt collectors who are external companies to verify your creditworthiness or to
          collect outstanding invoices.
          <br />
          <br />
          (d) Third party recipients in connection with any corporate exercises such as any proposed or actual mergers
          and/or acquisitions, joint venture, investment or funding exercise, asset sale or for any other matter of such
          nature.
          <br />
          <br />
          (e) Professional advisors: As part of our operation and management processes, we engage professional advisors
          such as lawyers, auditors, accountants and consultants to carry out professional works.
          <br />
          <br />
          (f) Enforcement authorities: As and when required by applicable law, we may disclose your Personal Data to
          enforcement authorities for the purposes of investigation.
          <br />
          <br />
          5. RETENTION OF YOUR PERSONAL DATA
          <br />
          <br />
          In accordance with applicable laws, we will use your Personal Data for as long as necessary to satisfy the
          purposes for which your Personal Data was collected or to comply with applicable legal requirements.
          <br />
          <br />
          6. STORAGE OF YOUR PERSONAL DATA
          <br />
          <br />
          We use appropriate measures to keep your Personal Data confidential and secure. Please note, however, that
          these protections do not apply to information you choose to share in public areas such as third party social
          networks.
          <br />
          <br />
          Your Personal Data will be processed by our authorised staff or agents, on a need to know basis, depending on
          the specific purposes for which your Personal Data have been collected. We take reasonable steps to keep your
          Personal Data secure and protect it from loss, misuse, or unauthorised alteration. Any of the Personal Data
          you electronically provide to us are stored on secure servers. We also maintain a reasonable physical security
          procedure to manage and protect the use and storage of records containing Personal Data.
          <br />
          <br />
          Due to the international nature of our business, we may need to transfer your Personal Data within our group,
          and to third parties as noted in Section 4 above, in connection with the purposes set out in this Notice. For
          this reason, we may transfer your Personal Data to other countries that may have different laws and data
          protection compliance requirements to those that apply in Malaysia.
          <br />
          <br />
          7. USE OF COOKIES
          <br />
          <br />
          In order to ensure that we meet the needs and wants of the users of our website and mobile application and
          also to further develop our online services, we may collect aggregated information by using cookies or similar
          electronic tools. Cookies are small amounts of information sent from a web server to your computer. They are
          used in order to make websites work, or work more efficiently, as well as to provide information to the owners
          of the website. We use the following types of cookies:
          <br />
          <br />
          (a) Site functionality cookies – These cookies allow you to navigate the site and use our features, such as
          registration, logging in and product favourites. If you disable these cookies certain parts of the site will
          not function for you.
          <br />
          <br />
          (b) Site analytics cookies – These cookies allow us to measure and analyse how you use our websites, mobile
          application and mobile platforms, to improve both its functionality and your experience.
          <br />
          <br />
          (c) Customer preference cookies – When you are browsing on our sites, these cookies will remember your
          preferences (such as your language or location), and other information you choose to provide to us, so we can
          help to tailor your experience and make it more relevant and personal to you.
          <br />
          <br />
          (d) Advertising or targeting cookies – These cookies are used to deliver advertisements relevant to you. They
          also limit the number of times that you see an advertisement and help us measure the effectiveness of our
          marketing campaigns. We may also use the information obtained via these cookies to serve you with
          advertisement that may be of interest to you based on your past online behaviour. We may share this
          information with other parties, including our partners.
          <br />
          <br />
          (e) Social media cookies – These cookies are used when you share information using a social media sharing
          button on our site. The social network will record that you have done this. This information may be linked to
          targeting/advertising activities.
          <br />
          <br />
          You may access and change your cookie preferences at any time by clicking https://www.blueshark.com.my/.
          <br />
          <br />
          8. YOUR RIGHT
          <br />
          <br />
          (a) To request access to your Personal Data You have the right to access, review and request a physical or
          electronic copy of your Personal Data. Such request can be made by way of contacting us at:
          <br />
          <br />
          Contact Person: Personal Data Protection Officer
          <br />
          Address: No. 1, Block A, Putra Park, Jalan Penyair U1/44, Hicom-glenmarie Industrial Park, 40150 Shah Alam,
          Selangor
          <br />
          <br />
          Or
          <br />
          <br />
          Call us: 03 – 5569 8633
          <br />
          <br />
          Or
          <br />
          <br />
          Email us: support@bluesharkasean.com
          <br />
          <br />
          If the request is submitted by a person other than you, without providing evidence that the request is
          legitimately made on your behalf, the request will be rejected. Please note that any identification
          information provided to us will only be processed in accordance with, and to the extent permitted by
          applicable laws.
          <br />
          <br />
          (b) To request correction or limit the use of your Personal Data
          <br />
          <br />
          Where provided by law, you can (i) request deletion, the portability, correction or revision of your Personal
          Data; (ii) limit the use and disclosure of your Personal Data; and (iii) revoke consent to any of our data
          processing activities. Such request can be made by contacting us at any of the methods stated in paragraph (a)
          above.
          <br />
          <br />
          However, please note that, in certain circumstances, we will not be able to delete your Personal Data without
          also deleting your account. We may be required to retain some of your Personal Data after you have requested
          deletion, to satisfy our legal or contractual obligations. We may also be permitted by applicable laws to
          retain some of your Personal Data to satisfy our business needs.
          <br />
          <br />
          9. CHANGES TO OUR PRIVACY NOTICE
          <br />
          <br />
          We may update or change this Notice at any time, from time to time as and when we find it necessary to do so.
          When we do so, we will publish the updated Notice on our website and mobile application which shall supersede
          the previous version of the Notice. The updated Notice will apply between us whether or not we have given you
          specific notice of any change. Please check back frequently to see any updates or changes to our Notice.
          <br />
          <br />
          10. CONTACT US
          <br />
          <br />
          Should you require further information about the Personal Data we hold or the way in which your information is
          being collected or used which are not answered by this Notice, please contact or write to us at:
          <br />
          <br />
          Contact Person: Personal Data Protection Officer Address: No. 1, Block A, Putra Park, Jalan Penyair U1/44,
          Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor
          <br />
          <br />
          Or Call us: 03 – 5569 8633
          <br />
          <br /> Or
          <br />
          <br />
          Email us: support@bluesharkasean.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
