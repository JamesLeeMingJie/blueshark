import Aos from 'aos';
import 'aos/dist/aos.css';
import { useGetResourceInfinite } from 'apis/aboutus';
import { get, isArray, isEmpty } from 'lodash';
import { ADMINRESOURCE } from 'models/const';
import Head from 'next/head';
import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const TermsConditionsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { ref: lastItem, inView } = useInView();
  console.log(lastItem);
  const {
    status,
    data: resourceTermPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetResourceInfinite({ type: ADMINRESOURCE.term });
  console.log(status);

  useEffect(() => {
    const pages = get(resourceTermPage, 'pages');
    const lastPage = isArray(pages) ? pages[pages.length - 1] : null;

    if (inView && !isFetchingNextPage && !isEmpty(resourceTermPage) && !isEmpty(get(lastPage, 'items', []))) {
      fetchNextPage();
    }
  }, [inView]);

  const resourceFAQs = useMemo(() => {
    return get(resourceTermPage, 'pages', []);
  }, [resourceTermPage]);

  console.log(resourceFAQs);

  return (
    <div>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="bg-[#020D14] md:h-[200px] sm:h-[25vh] text-white relative -z-10">
        <div className="relative md:top-[12rem] text-center sm:mx-[5%] sm:top-[10rem] md:m-0">
          <div
            data-aos="fade-down"
            className="sm:leading-[36px] sm:text-[28px] md:leading-[50px] md:text-[40px] font-semibold"
          >
            Terms & Conditions
          </div>
          {/* <div className="mt-3 flex justify-center divide-x">
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
                <p className="flex items-center text-[14px] text-blue font-semibold leading-[22px] sm:px-3 md:px-5 cursor-pointer ">
                  Terms & Conditions
                </p>
              </a>
            </Link>
            <Link href={'/about-us/faq'}>
              <a>
                <p className="flex items-center text-[14px] hover:text-blue font-semibold leading-[22px] sm:px-3 md:px-5 cursor-pointer opacity-70">
                  FAQ
                </p>
              </a>
            </Link>
            <Link href={'/about-us/privacy-policy'}>
              <a>
                <p className="flex items-center text-[14px]  hover:text-blue font-semibold leading-[22px] sm:px-3 md:px-5 cursor-pointer opacity-70">
                  Privacy Policy
                </p>
              </a>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="bg-[#020D14] sm:py-[2rem] md:py-[7rem] md:min-h-[calc(100vh-444px)] min-h-[calc(70vh-215px)]">
        <p className="text-[14px] leading-[24px] font-inter font-normal text-white rm-reset-list sm:w-10/12 md:w-8/12 mx-auto">
          IMPORTANT – Please read and review these General Terms and Conditions (“Terms”) carefully before accessing the
          Site (as defined below). You agree that by accessing the Site and/or using the Services (as defined below),
          you have read, understood, accepted and agreed with these Terms. You further agree that the representations
          below are true and accurate. If you do not agree to any of the terms and conditions stated herein, then you
          are expressly prohibited from using the Site and you must stop using the Site and/or the Services immediately.
          DEFINITIONS The terms below shall have the respective meanings ascribed to them, unless the context requires
          otherwise. Words denoting one gender include the other gender and words denoting the singular include the
          plural and vice versa:
          <br />
          <br />
          1.1 “Account” means an account duly registered and maintained through the Site that enables a person to become
          a Subscriber.
          <br />
          <br />
          1.2 “Affiliated Company” means any business partner, third party vendor, service provider, parent company or
          subsidiary of the Company.
          <br />
          <br />
          1.3 “Company” means Blueshark Ecosystem Sdn. Bhd. (Company Registration No. 202201024329 (1470026-X)).
          <br />
          <br />
          1.4 “Driving Licence” means either a competent driving licence (CDL) or a probationary driving licence (PDL)
          of either Class B, B1 or B2. The Company has the sole discretion to decide whether to accept an International
          Driving Permit on a case to case basis and if the Company accepts a Subscriber’s International Driving Permit,
          the term “Driving Licence” shall include the Subscriber’s International Driving Permit.
          <br />
          <br />
          1.5 “Electric Bike” means an electric bike reserved by the Subscriber and leased by the Company to the
          Subscriber pursuant to the Lease Agreement, or reserved by the Subscriber and sold by the Company to the
          Subscriber (as the case may be).
          <br />
          <br />
          1.6 “Force Majeure Event” means Blueshark Ecosystem Sdn. Bhd. (Company Registration No. 202201024329
          (1470026-X)).
          <br />
          <br />
          1.7 “Lease Agreement” means an agreement made between the Subscriber and the Company in relation to the
          leasing of the Electric Bike to the Subscriber by the Company which is known as the Electric Bike Leasing and
          Battery Subscription Agreement.
          <br />
          <br />
          1.8 “Lease Charges” means the fees for renting an Electric Bike as stated in the Lease Agreement.
          <br />
          <br />
          1.9 “Lease Period”means the period of time when an Electric Bike is leased to the Subscriber as stated in the
          Lease Agreement.
          <br />
          <br />
          1.10 “Mobile Application” means the Blueshark mobile application and any other application for mobile devices,
          which is owned and operated by the Company, and enables the User to consume the Services.
          <br />
          <br />
          1.11 “PDPA” means the Personal Data Protection Act 2010 of Malaysia and includes its subsidiary legislations
          made thereunder.
          <br />
          <br />
          1.12 “Personal Data” shall have the meaning ascribed to it under the PDPA.
          <br />
          <br />
          1.13 “Privacy Notice” m means the privacy policy of the Company published on the Site which regulates the
          collection, use and processing of the Personal Data by the Company.
          <br />
          <br />
          1.14 “Services” means any or all services offered by the Company or by an Affiliated Company through the
          Company, including but not limited to electric bike renting and battery subscription services, which are
          available through the Site.
          <br />
          <br />
          1.15 “Site” means the Website and the Mobile Application.
          <br />
          <br />
          1.16 “Subscriber” means a person who subscribes to the Services.
          <br />
          <br />
          1.17 These“Terms” means these General Terms and Conditions.
          <br />
          <br />
          1.18 “User” means a person who uses the Site and/or the Services and references to Users shall also include
          the Subscribers.
          <br />
          <br />
          1.19 “Website” means the site of https://www.blueshark.com.my/ operated by the Company through which the User
          may, among others, retrieve information about their Account and consume the Services.
          <br />
          <br />
          PURPOSE
          <br />
          2.1 These Terms constitute a legally binding agreement between the User and the Company.
          <br />
          <br />
          2.2 The purpose of these Terms is to set out the rights, obligations and other necessary matters between the
          User and the Company, and the procedures for the use of the Services and the Site.
          <br />
          <br />
          2.3 The Company publishes these Terms on the Site so that it is accessible by the Users. The matters that are
          not specified in these Terms shall be governed by any guidelines, policies and/or other individual terms or
          agreement for any Services published by the Company from time to time, according to reasonable industry
          practices and standards, and subject to Malaysian laws and regulations.
          <br />
          <br />
          AMENDMENT TO THESE TERMS
          <br />
          3.1 Any amendments, additions, revisions, replacements, modifications, and removal of these Terms will be
          published from time to time on the Site. The User shall check the Site from time to time to ensure that the
          User is aware of the latest Terms. The latest Terms will replace any older versions of the Terms and shall
          take effect as soon as the latest Terms are published on the Site.
          <br />
          <br />
          3.2 The Company, in its sole discretion but not under any obligation, may notify the User with regard to any
          amendments of these Terms via the e-mail address provided by the User during Account registration, if such
          amendments are deemed to be significant by the Company.
          <br />
          <br />
          3.3 Continued use of the Account or the Services by the User, or the non-termination of the Account for 30
          days after the date such amendments take effect shall be deemed as an acceptance by the User of the amended
          Terms.
          <br />
          <br />
          3.4 For the avoidance of doubt, the Company shall not be responsible for ensuring that the User is aware of
          any amendments to these Terms.
          <br />
          <br />
          3.5 Should the User disagree with any amendments to these Terms, the User shall not continue using the Site,
          the Account and the Services, and shall notify the Company to terminate the Subscriber’s Account immediately.
          <br />
          <br />
          TERMS OF USE IN RESPECT OF THE SITE
          <br />
          4.1 Acceptable Use
          <br />
          <br />
          4.1.1 The User shall use the Site in accordance with these Terms and, in any event, for lawful and proper
          purposes which includes complying with all applicable laws, regulations and codes of practice within Malaysia
          or other jurisdiction from which the User is accessing the Site.
          <br />
          <br />
          4.1.2 The User shall not use the Site:
          <br /> (a) to commit or encourage a criminal offence;
          <br /> (b) to transmit or distribute a virus, trojan, worm, logic bomb, keystroke logger, spyware, or any
          other material which is malicious, technologically harmful, in breach of confidence, in breach of personal
          data protection laws in any jurisdiction, or in any way offensive or obscene
          <br /> (c) in any manner that could damage, disable, overburden or impair any servers of the Company, the
          networks connected to the servers of the Company, or interfere with any other party’s access and use of the
          Site;
          <br /> (d) to attempt to gain unauthorised access to the Site, computer systems or networks connected to the
          Company’s server, or information not intentionally made available on or through the Site, through hacking,
          password mining or any other means;
          <br /> (e) to interfere with the proper operational integrity of the Site or any other activities conducted on
          the Site;
          <br /> (f) to remove, circumvent, disable, damage or otherwise interfere with security-related features of the
          Site;
          <br /> (g) to license, sub-license, sell, re-sell, transfer, assign, distribute or otherwise commercially
          exploit or make available to any unauthorised third party the Site in any way;
          <br /> (h) to link to, mirror, or frame any portion of the Site;
          <br />
          (i) to cause or launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise
          data mining any portion of the Site;
          <br /> (j) to corrupt, mine or steal any data from the Site;
          <br /> (k) to cause annoyance to other users of the Site;
          <br /> (l) to infringe upon the rights of any other person’s proprietary rights;
          <br /> (m) to send any unsolicited advertising or promotional material, i.e. spam;
          <br /> (n) to send and/or transmit any information or material which, in the opinion of the Company, is
          morally objectionable; and
          <br /> (o) to upload or circulate content which is indecent, obscene, false, menacing, or offensive in
          character with intent to annoy, abuse, threaten or harass any person.
          <br />
          <br />
          4.1.3 Any of the breaches above are grounds for immediate termination of the Account and/or the Services.
          <br />
          <br />
          4.1.4 The Company will not be liable for any loss or damage caused by a distributed denial-of-service attack,
          viruses or other technologically harmful material that may infect the User’s device, computer equipment,
          computer programs, data or other proprietary material due to the User’s use of the Site.
          <br />
          <br />
          4.2 Links to Other Websites and/or Mobile Applications The Site may include links to other internet sites, iOS
          and/or Android application. The Company does not endorse any such links and is not responsible for the
          information, material, products or services contained on or accessible through those links. The User’s access
          and use of such links remains solely at the User’s own risk. In providing links to other sites, the Company is
          in no way acting as a publisher or disseminator of the material contained on those sites and do not seek to
          monitor or control such sites.
          <br />
          <br />
          4.3 Intellectual Property Rights on the Site
          <br />
          <br />
          4.3.1 All editorial content, information, photographs, illustrations, artwork and other graphic materials, and
          names, logos and trade marks on the Site belong to the Company and/or its suppliers, as the case may be. These
          works, logos, graphics, sounds or images may not be copied, reproduced, retransmitted, distributed,
          disseminated, sold, published, broadcasted or circulated whether in whole or in part, unless expressly
          permitted by the Company and/or its suppliers, as the case may be.
          <br />
          <br />
          4.3.2 Nothing contained on the Site should be construed as granting by implication, estoppel or otherwise, any
          licence or right to use any trade mark displayed on the Site without the Company’s written permission. Misuse
          of any trade mark or any other content displayed on the Site is prohibited.
          <br />
          <br />
          4.3.3 The Company will not hesitate to take any legal action against any unauthorised usage of trade marks,
          names or symbols to preserve and protect the Company’s rights in the matter. All rights not expressly granted
          herein are reserved. Other products and company names mentioned herein may also be the trade marks of their
          respective owners.
          <br />
          <br />
          4.4 Disclaimer and Exclusion of Liability
          <br />
          <br />
          4.4.1 The Site, the information on the Site and use of all related facilities are provided on an “as is” basis
          without any warranties whether express or implied. The Company does not warrant that the Site will always be
          accessible, uninterrupted, timely, secure, error free or free from computer virus or evasive or damaging code
          or that the Site will not be affected by any Force Majeure Events, including inability to obtain or shortage
          of necessary materials, equipment facilities, power or telecommunications, lack of telecommunication equipment
          or facilities or failure of information technology or telecommunication equipment or facilities.
          <br />
          <br />
          4.4.2 While the Company may use reasonable efforts to include accurate and up-to-date information on the Site,
          the Company makes no warranties or representations as to its accuracy, timeliness or completeness. IN NO EVENT
          SHALL THE COMPANY NOR ITS OFFICERS, DIRECTORS AND EMPLOYEES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES HOWSOEVER CAUSED RESULTING FROM THE USER’S ACCESS TO, USE OF OR
          INABILITY TO USE, RELIANCE ON OR DOWNLOADING FROM THE SITE, OR ANY DELAYS, INACCURACIES IN THE INFORMATION OR
          IN ITS TRANSMISSION INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF BUSINESS OR PROFITS, USE, DATA OR OTHER
          INTANGIBLE, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE COMPANY AND ITS
          OFFICERS, DIRECTORS AND EMPLOYEES SHALL ALSO NOT BE LIABLE FOR ANY DAMAGES OR LOSSES RESULTING FROM VIRUSES,
          DATA CORRUPTION, FAILED MESSAGES, TRANSMISSION ERRORS OR PROBLEMS, TELECOMMUNICATION SERVICE PROVIDERS, LINKS
          TO THIRD PARTY WEBSITES, PERSONAL INJURY, THIRD PARTY CONTENT, PRODUCTS OR SERVICES, DAMAGES OR LOSSES CAUSED
          BY THE USER OR ITS RESPECTIVE EMPLOYEES, AGENTS OR SUBCONTRACTORS, LOSS OF USE OR LACK OF AVAILABILITY OF
          FACILITIES INCLUDING COMPUTER RESOURCES, ROUTERS AND STORED DATA, THE USE OR INABILITY TO USE THE SITE OR THE
          CONTENT, ANY OTHER WEBSITE ACCESSED TO OR FROM THE SITE, OR EVENTS BEYOND THE COMPANY’S REASONABLE CONTROL
          EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR CLAIM.
          <br />
          <br />
          4.4.3 To the fullest extent permitted by applicable law, the Company disclaims all representations and
          warranties relating to the Site and its contents, including in relation to any inaccuracies or omissions in
          the Site, warranties of merchantability, quality, fitness for a particular purpose, accuracy, availability,
          non-infringement or implied warranties from course of dealing or usage of trade.
          <br />
          <br />
          4.4.4 Notwithstanding the Company’s efforts to ensure that the Site is secure, the User acknowledges that all
          electronic data transfers are potentially susceptible to interception by others. The Company cannot, and does
          not, warrant that data transfers pursuant to the Site, or electronic mail transmitted to and from the Company,
          will not be monitored or read by others.
          <br />
          <br />
          4.4.5 Although the Company uses reasonable endeavours to ensure that any software made available on the Site
          is suitable for downloading, installation and use by the User, all such software is provided “as is” without
          any warranty. Specifically, and without limitation, the Company does not warrant that any such software is
          virus free, without defects, compatible with other software or operating systems or suitable for any specific
          purpose. The Company accepts no liability for any loss or damage caused by the downloading, installation or
          use of any such software, and the general exclusions and limitations above apply to such downloading,
          installation or use by the User.
          <br />
          <br />
          4.4.6 While the User is able to purchase any goods and services through the Site, the Company does not
          represent or warrant the merchantability, quality, reliability, safety, fitness for a particular purpose,
          accuracy, availability of the goods and services which are supplied by third party through the use of the
          Site. THE USER ACKNOWLEDGES AND AGREES THAT IN PURCHASING OR ACQUIRING ANY GOODS OR SERVICES THROUGH THE SITE
          THAT THE USER WILL BE EXERCISING ITS OWN JUDGMENT AND DISCRETION AND THAT THE ENTIRE RISK ARISING OUT OF THE
          USER’S USE OF THE GOODS AND SERVICES REMAINS SOLELY AND ABSOLUTELY WITH THE USER. THE USER SHALL HAVE NO
          RECOURSE WHATSOEVER TO THE COMPANY FOR ANY LOSS OR INJURY SUFFERED BY THE USER AND THE COMPANY OR ITS
          OFFICERS, DIRECTORS AND EMPLOYEES WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE HOWSOEVER CAUSED, RESULTING FROM
          THE USE OF THE SITE.
          <br />
          <br />
          4.5 Indemnity The User agrees to indemnify, defend and hold the Company, its officers, directors and employees
          harmless against all actions, proceedings, costs, claims, damages, demands, liabilities and expenses
          whatsoever (including legal costs) sustained, incurred or paid by the Company directly or indirectly in
          respect of any of contents provided by the User on or through the Site or which is sent to the Company by
          electronic mail or the User’s use or misuse of the Site or its contents, including infringement claims.
          <br />
          <br />
          BECOMING A SUBSCRIBER
          <br />
          5.1 Creation of Account
          <br />
          <br />
          5.1.1 To use the Services, the User shall first become a Subscriber by registering for a valid and active
          Account either on the Website or the Mobile Application downloaded via iOS, Android, or any other mobile
          operating system.
          <br />
          <br />
          5.1.2 When registering for an Account, the User will be asked to provide information that may include the
          User’s Personal Data (please refer to the Privacy Notice and Clause 11 below for the provisions regarding the
          collection, use and processing of the User’s Personal Data). In addition to the purposes stated in the Privacy
          Notice, the User’s Personal Data will also be used for the purposes of conducting background checks on the
          User and if necessary, the User’s Personal Data will be disclosed to third parties in order to carry out the
          background checks, all of which the User hereby grants his consent.
          <br />
          <br />
          5.1.3 All information provided by the User to the Company during this on-boarding process are regarded as
          representations made by the User, and shall be truthful and accurate. By registering for an Account, the User
          further represents and warrants that:
          <br /> (a) The User has read and understood these Terms;
          <br /> (b) The User has agreed to adhere to these Terms, which constitutes the User’s agreement to be bound by
          these Terms that establishes a contractual relationship between the User and the Company;
          <br /> (c) The User is legally capable of entering into a binding agreement with the Company;
          <br />
          (d) The User is not in breach of any applicable laws or third-party rights by entering into a contractual
          relationship with the Company;
          <br />
          (e) The User is duly authorised to enter into a legal, contractual relationship with the Company (if
          applicable);
          <br /> (f) The User is at least 18 years of age;
          <br /> (g) The User has a valid Driving Licence; and
          <br /> (h) The User has read the Privacy Notice and has provided his express consent for the Company to use
          the User’s Personal Data in accordance with the Privacy Notice and these Terms.
          <br />
          <br />
          5.1.4 The User shall immediately report to the Company if there is any change to any of the representations
          and warranties contained in these Terms.
          <br />
          <br />
          5.1.5 The Company reserves the right to decline the User’s application in any of the circumstances below: (a)
          If the User is a former Subscriber, and the Account of the Subscriber was terminated or suspended for any
          reasons whatsoever, and the Subscriber has not obtained the written approval from the Company for the
          Subscriber’s Account to be reinstated; (b) If the User is unable to provide a genuine photo identification
          upon request, or the Company is of the opinion that the User is using a false identification; (c) If the
          Company is unable to verify the identity of the User, and the User fails to respond to any requests for
          verification by the Company; (d) If the User has provided false information; (e) If the User is under the age
          of 18; (f) If the User does not have a valid Driving Licence; (g) If the User is in breach of any of the
          provisions under these Terms; (h) If the User has been denied coverage by any motor vehicle insurances; (i) If
          the User fails a due diligence background check; and/or (j) If the Company in its own judgment believes that
          the User should not be a Subscriber for any reason whatsoever. Notwithstanding the above, the Company is not
          under any obligation to provide any reason for declining an application.
          <br />
          <br />
          5.1.6 If, in the sole discretion of the Company, it is deemed that the User lacks the ability to pay any fees,
          or if the Company is concerned that making available the Services to the User may be detrimental to the User
          or the Company, the Company may request for any other additional personal or credit information from the User
          and/or decline the User’s application.
          <br />
          <br />
          5.1.7 The User will become a Subscriber when the Account application process is approved and completed, upon
          which the contractual relationship between the Subscriber and the Company commences.
          <br />
          <br />
          5.1.8 The Subscriber is responsible for keeping his username, password and login details secure, and for
          preventing unauthorised access to his Account. The Subscriber will be solely responsible for all the use of
          the Account, and any acts or omissions arising from his Account, whether or not such acts or omissions are
          authorized by the Subscriber.
          <br />
          <br />
          5.1.9 If the Subscriber becomes aware of any unauthorised use of his Account and/or any theft of his username
          and/or password by a third party, the Subscriber shall immediately notify the Company and follow the
          instructions of the Company.
          <br />
          <br />
          5.1.10 The Company shall not be liable for any damages suffered by the Subscriber as a result of the
          Subscriber’s violation of these Terms.
          <br />
          <br />
          5.2 Creation of Account
          <br />
          <br />
          5.2.1 The Subscriber may request to close his Account at any time by providing a notice to the Company either
          by email, via the in-app function in the Mobile Application, or any method provided for on the Website, and
          the Company shall immediately terminate the Subscription and close the Account upon payment of any payment due
          to the Company by the Subscriber.
          <br />
          <br />
          5.3 Access to the Account by the Company The Subscriber acknowledges, consents and agrees that the Company may
          access, preserve and/or disclose any information contained in the Account if it is necessary to:
          <br /> (a) comply with any laws and regulations;
          <br /> (b) comply with any legal processes;
          <br /> (c) enforce these Terms;
          <br /> (d) respond to any claims brought by any person;
          <br /> (e) respond to the Subscriber’s requests; and/or
          <br /> (f) protect the rights, property and personal safety of the Company, the Subscriber, other Subscribers
          and/or the public.
          <br />
          <br />
          5.4 Notice to Subscribers Unless otherwise stipulated under these Terms or any other documents, any notices by
          the Company shall be given to the Subscriber via:
          <br /> (a) e-mail;
          <br /> (b) written correspondence to the address provided by the Subscriber;
          <br />
          (c) in-app messaging function in the Mobile Application;
          <br /> (d) publishing on the Site; and/or <br />
          (e) text message to the Subscriber’s registered telephone number.
          <br />
          <br />
          5.5 Subscriber’s Obligations
          <br />
          <br />
          5.5.1 The Subscriber shall not:
          <br />
          (a) do anything to breach, circumvent or contravene these Terms; <br />
          (b) commit or encourage any criminal offence; <br />
          (c) commit or encourage any fraudulent act;
          <br /> (d) corrupt, exploit, mine or steal information from the Site;
          <br /> (e) conduct any unauthorised modification, alteration or deletion of the Services;
          <br /> (f) send or post any irrelevant, illegal, or otherwise objectionable content or information (such as
          computer programs and advertisements) on or through the Site;
          <br /> (g) infringe the intellectual property rights of the Company and/or the Affiliated Companies; and
          <br />
          (h) carry out any acts that may damage the reputation and goodwill of the Company and/or the Affiliated
          Companies.
          <br />
          <br />
          5.5.2 The Subscriber shall at all times comply with related laws and regulations, the provisions of these
          Terms and any guidelines, policies and/or other individual terms or agreement of the Company and/or of the
          Affiliated Companies.
          <br />
          <br />
          SERVICES
          <br />
          6.1 Electric Bike Leasing Service
          <br />
          <br />
          6.1.1 The electric bike leasing service is a service provided by the Company whereby the Subscriber may lease
          an Electric Bike from the Company pursuant to the terms and conditions stated in the Lease Agreement.
          <br />
          <br />
          6.1.2 The Subscriber is entitled to choose the model, the finishing, the leasing plan and any other items at
          the Site.
          <br />
          <br />
          6.2 Purchase of Electric Bike
          <br />
          <br />
          6.2.1 The Subscriber may purchase an Electric Bike at the Site by selecting the model, the finishing and any
          other items.
          <br />
          <br />
          6.3 Subscription of Battery Service
          <br />
          <br />
          6.3.1 The subscription of battery service is not a separate service provided by the Company. The Subscriber
          must either lease an Electric Bike or purchase an Electric Bike in order to use the subscription of battery
          service.
          <br />
          <br />
          6.3.2 Under the subscription of battery service, it is mandatory for the Subscriber to opt for the “Battery
          Only Subscription”. In addition to the “Battery Only Subscription”, the Subscriber may choose either the
          “Battery + Battery Swap (Economical 35) Subscription” or “Battery + Battery Swap (Super Save 60)
          Subscription”.
          <br />
          <br />
          LIMITATION OF LIABILITY
          <br />
          7.1 If the Company cannot provide the Services due to an occurrence of a Force Majeure Event, the Company
          shall be exempted from any obligations under these Terms.
          <br />
          <br />
          7.2 The Company shall not be liable for any disruption in the use of the Services caused by any act or
          omission of the Subscriber. The Subscriber shall ensure that he has a compatible device and he downloads the
          correct software for his device.
          <br />
          <br />
          7.3 The Services are provided by the Company on an “as is” and “as available” basis without any guarantees,
          conditions or warranties. Unless expressly stated to the contrary and to the fullest extent permitted by law,
          the Company expressly excludes all conditions, warranties, and other terms which might otherwise be implied by
          statute, common law, or the law of equity and the Company shall not be liable for any damages whatsoever,
          including, but without limitation, to any direct, indirect, special, consequential, punitive or incidental
          damages, or damages for personal injury, loss of life, use, profits, data or other intangibles, damages to
          goodwill or reputation, or the cost of procurement of substitute goods and services, arising out of, or
          related to the use, inability to use, performance or failures of the services, and any materials, information,
          data, and facts posted by the Subscriber or other members thereon, irrespective of whether such damages were
          foreseeable or not.
          <br />
          <br />
          7.4 Without prejudice to Clause 6.3, the Company’s liability (if any) shall be capped at the total amount paid
          by the Subscriber to the Company in the preceding 30 days of the date of the damage suffered.
          <br />
          <br />
          7.5 The Company shall not be liable for any transactions or dealings between the Subscriber and any third
          party obtained through the Services.
          <br />
          <br />
          PAYMENT
          <br />
          8.1 Payment Policy
          <br />
          <br />
          8.1.1 The Subscriber shall make payment by electronic payment (credit/debit card or e-wallet from a reputable
          financial institution) or by other methods deemed acceptable by the Company in accordance with the following
          procedures: <br />
          (a) The Subscriber must register a payment card and/or e-wallet during the Account registration process or
          update the Account with valid details from time to time.
          <br /> (b) If the Subscriber does not make payment by the due date, an interest of 8% per annum will be
          charged on the outstanding sum calculated from the due date until the date of full settlement.
          <br /> (c) The Company may take any additional actions as it deems necessary to ensure any payment due to the
          Company by the Subscriber is recovered and such incidental costs shall be borne by the Subscriber.
          <br />
          <br />
          8.1.2 By providing the details of his payment card and/or e-wallet, the Subscriber authorises the Company to
          charge any payment onto his payment card and/or e-wallet.
          <br />
          <br />
          8.1.3 The Company reserves the right to suspend or terminate the Account if the Subscriber fails to make
          payment for any unpaid amount. Services to the Subscriber shall be suspended until all unpaid amount has been
          recovered by the Company.
          <br />
          <br />
          8.1.4 If the Subscriber fails to comply with these Terms, the Company shall have the right to terminate the
          Account, upon which any unpaid amount shall become due and payable with immediate effect and the Subscriber
          shall return the Electric Bike immediately.
          <br />
          <br />
          8.2 Payment
          <br />
          <br />
          8.2.1 The Subscriber agrees to the payment of any amount as stated in the Lease Agreement and to the billing
          policies applicable to the Subscriber’s use of the Services as stated in these Terms.
          <br />
          <br />
          8.2.2 The Lease Charges will be automatically charged to the User’s registered payment card and/or e-wallet
          upon the User reserving the Electric Bike and/or making an application to subscribe and at the respective
          payment date during the Lease Period, all of which the Users hereby agree. In the event that the application
          to subscribe is rejected by the Company for any reason whatsoever, the deposit will be refunded to the User
          within 72 hours from the date of rejection.
          <br />
          <br />
          8.2.3 The Subscriber acknowledges and agrees that the Company has the right to charge any other payments that
          are due and payable to the Company, as and when they become due and/or ascertainable, to the registered
          payment card and/or e-wallet of the Subscriber. The registered payment card and/or e-wallet will be charged:
          <br /> (a) after the Electric Bike has been returned to the Company;
          <br /> (b) upon the expiry of the Lease Period;
          <br /> (c) upon the failure of the Subscriber to return the Electric Bike; and/or
          <br /> (d) as and when it becomes due to the Company.
          <br />
          <br />
          8.3 Taxes
          <br />
          <br />
          8.3.1 The Subscriber agrees that all payment made shall be subject to all prevailing statutory taxes, duties,
          charges and/or costs in connection with the Subscriber’s use of the Services, however denominated, as may be
          in force and regarding any future taxes that may be introduced at any point of time.
          <br />
          <br />
          8.3.2 The Subscriber further agrees to use his best efforts to do everything that is necessary and required by
          the relevant laws to enable, assist, defend or indemnify the Company in claiming or verifying any input tax
          credit, set off, rebate or refund in respect of any taxes paid or payable for the Services supplied under
          these Terms.
          <br />
          <br />
          8.4 Damage to Electric Bike and Loss of Use
          <br />
          <br />
          8.4.1 To the extent that such damage is not caused by any manufacturing defect, the Subscriber shall indemnify
          and compensate the Company for any loss of revenue or loss of use of the Electric Bike damaged by the
          Subscriber, in addition to any damages to the Electric Bike caused by any act or omission of the Subscriber.
          The damages payable to the Company for damage to the Electric Bike shall be the actual amount required to
          repair the damage to the Electric Bike. Any damage to the returned Electric Bike shall be presumed to be
          caused by the Subscriber unless the Company has been alerted of such damage before acceptance of the Electric
          Bike by the Subscriber at the start of the Lease Period by way of uploading photos of the damage onto the
          Mobile Application before accepting the Bike. Any loss of revenue or loss of use of the Electric Bike damaged
          by the Subscriber shall be calculated based on the leasing price for the time period that the Electric Bike is
          unable to be rented out.
          <br />
          <br />
          8.4.2 The Subscriber shall indemnify and compensate the Company for any fines and legal fees incurred in
          relation to any violation of any laws or regulations by the Subscriber.
          <br />
          <br />
          SUSPENSION OR TERMINATION
          <br />
          9.1 Suspension or Termination of Account or Services
          <br />
          <br />
          9.1.1 The Company may without prior notice to the Subscriber suspend or terminate the Account of the
          Subscriber or provision of the Services to the Subscriber upon occurrence of any of the events listed below:
          <br />
          (a) The Subscriber breaches any of these Terms, and if such breach is capable of remedy, the Subscriber fails
          to remedy the breach within the time stipulated after receiving notice from the Company;
          <br /> (b) When any of the Subscriber ‘ s information is found to be false or incorrect;
          <br /> (c) When the Subscriber does not pay the applicable Lease Charges or any other payment in a timely
          manner, or the charges to the registered payment card and/or e-wallet cannot be completed;
          <br />
          (d) When the Subscriber’s Driving Licence is or becomes suspended or invalid during the Lease Period;
          <br /> (e) When the Subscriber causes a traffic accident;
          <br /> (f) When the Subscriber operates the Electric Bike while under the influence of intoxicants;
          <br /> (g) When the Subscriber operates or uses the Electric Bike in a manner which will cause damage to the
          Electric Bike;
          <br /> (h) When the Subscriber breaches these Terms or any laws or regulations;
          <br />
          (i) When the Subscriber does anything which damages the goodwill or reputation of the Company;
          <br /> (j) When the Subscriber fails to fulfil any obligation or duty under these Terms on the relevant due
          date;
          <br /> (k) When the Subscriber interferes with other Subscribers’ use of the Services;
          <br /> (l) When the Subscriber threatens, annoys, abuses, or harasses other Subscribers, employees or agents
          of the Company;
          <br /> (m) When the Subscriber misuses any information obtained through the Services;
          <br /> (n) The Subscriber has a history of causing damage to the Electric Bike;
          <br /> (o) When the Subscriber uses the Services, the Account and/or the Electric Bike for any unlawful
          purpose;
          <br /> (p) When the Subscriber misuses, abuses and/or manipulates his Account for fraudulent purposes which
          includes but not limited to misuse and/or abuse of promotions/coupons/discounts provided by the Company;
          <br /> (q) When the Subscriber abandons the Electric Bike after an accident or Electric Bike breakdown prior
          to the arrival of the rescue team of the Company or the insurer of the Company;
          <br /> (r) When the Subscriber has prior criminal record(s) pursuant to a background check done by the
          Company;
          <br /> (s) When the Subscriber tampers with, modifies, dismantles and/or uninstalls any devices and/or items
          installed/placed in/on the Electric Bike by the Company; and/or
          <br /> (t) The Subscriber does any act which the Company is of the view that suspension or termination of the
          Account and/or the Services is fit and necessary. Notwithstanding the above, the Company is not under any
          obligation to provide any reason for Suspension or Termination of Account or Services.
          <br />
          <br />
          9.2 Suspension or Termination of Account or Services
          <br />
          <br />
          9.2.1 The Company may change the Services in cases where it is deemed that the provision of the Services at
          its current form is no longer commercially viable or a change in the regulatory regime has rendered offering
          the Services illegal. The Company will use reasonable efforts to notify the Subscriber via email or through
          the Mobile Application 30 days before the date when the changes are put into effect.
          <br />
          <br />
          9.2.2 The Company may suspend some or all of the Services if any of the following cases occurs:
          <br /> (a) In cases where there is a possibility of occurrence of a Force Majeure Event;
          <br /> (b) If telecommunication services are disrupted;
          <br /> (c) If the Company is undergoing repair, inspection, routine maintenance, replacement, or facing
          disruptions in the information and communication equipment of the Company;
          <br />
          (d) If the Services are provided through an Affiliated Company, the Services being changed or suspended by the
          Affiliated Company; or <br />
          (e) Any other reasons that impair the ability of the Company to provide the Services.
          <br />
          <br />
          9.2.3 The Company reserves the right to change, replace, or to suspend the provision of any of the Services.
          <br />
          <br />
          9.2.4 The Company shall not be liable to the Subscriber for any disruptions in the provision of the Services.
          <br />
          <br />
          PROHIBITION OF USE OF BIKE
          <br />
          10.1 The Company shall have the discretion to report or notify the competent authorities if the Electric Bike
          is used for, or the Company has reason to believe that the Electric Bike is used for, prohibited purposes
          other than the permitted use.
          <br />
          <br />
          10.2 Electric Bikes shall not be used for the purposes below:
          <br /> (a) for any illegal or unlawful purposes;
          <br /> (b) for any morally-objectionable purposes;
          <br /> (c) in contravention with these Terms;
          <br /> (d) in a manner which will cause damage to the Bike;
          <br /> (e) to be driven to a place outside of West Malaysia; and <br />
          (f) for any other purpose of which the Company is of the view that it may cause damage or harm to the Company
          and/or the public.
          <br />
          <br />
          10.3 Furthermore, the Subscriber shall:
          <br /> (a) Not forge or cover the license plate of the Electric Bike;
          <br /> (b) Not do any acts that will infringe or jeopardize the Company’s ownership of the Electric Bike,
          including, without limitation, sub-letting out the Electric Bike, using the Electric Bike as collateral, or
          selling the Electric Bike;
          <br /> (c) Not use the Electric Bike to tow any other vehicles or heavy objects;
          <br /> (d) Not keep any drugs or illegal objects on the Electric Bike; and
          <br /> (e) Ensure that total number of persons on the Electric Bike will not exceed the maximum seating
          capacity of the Electric Bike.
          <br />
          <br />
          10.4 The Company reserves the right to refuse the Services to any Subscriber who contravenes this Clause.
          <br />
          <br />
          PRIVACY PROTECTION
          <br />
          11.1 Right to Record and Track Location
          <br />
          <br />
          11.1.1 The Subscriber hereby acknowledges, consents and agrees to the Company monitoring, tracking and
          recording in any format, the operation and/or use of the Electric Bike by the Subscriber through the built-in
          system installed in the Electric Bike. The Company shall own all content on such data and records and may
          review the data and records for any purposes
          <br />
          <br />
          11.1.2 The Subscriber shall not or attempt to tamper with, modify, dismantle and/or uninstall any devices
          installed in/on the Electric Bike by the Company for the purposes stated in this Clause failing which the
          Company may suspend or terminate the Account and claim any losses and damages from the Subscriber for
          tampering, modifying, dismantling and/or uninstalling such devices.
          <br />
          <br />
          11.2 Use and Provision of Personal Information
          <br />
          <br />
          11.2.1 The Company shall use personal information only in compliance with the PDPA, as set out in the Privacy
          Notice.
          <br />
          <br />
          11.2.2 The Company shall have a security system to protect and secure information provided by the Subscriber
          (including Personal Data and credit information), according to the Privacy Notice.
          <br />
          <br />
          11.3 Consignment of Personal Information The Company may entrust some or all its businesses to third parties
          in accordance with the Privacy Notice only with the consent of the Subscriber, if necessary, to deal with the
          handling and management of collected personal information, as set out in the Privacy Notice. INDEMNIFICATION
          The Subscriber shall indemnify, defend, and hold the Company, its Affiliated Companies and their directors,
          shareholders, employees, partners, agents, contractors, directors, suppliers, vendors and representatives
          harmless against any third-party claims, losses, liability, fines, penalties, damages, legal fees and/or costs
          arising from:
          <br /> (a) the Subscriber’s use of the Services;
          <br /> (b) the Subscriber’s dealings with other Subscribers or with third parties;
          <br /> (c) the Subscriber’s breach of applicable laws and regulations of Malaysia or any other country;
          <br /> (d) the Subscriber’s breach of third-party rights including any right of privacy, publicity rights or
          intellectual property rights;
          <br /> (e) the Subscriber’s breach of any of these Terms;
          <br /> (f) the Company’s reasonable actions taken to repossess the Electric Bike;
          <br /> (g) any other party’s access and use of the Services with the Subscriber’s unique username, password,
          or other appropriate security code. ANTI-BRIBERY AND ANTI-CORRUPTION Each party agrees, on behalf of itself,
          its officers, directors and employees and on behalf of its affiliates, agents, representatives, consultants
          and subcontractors hired in connection with the subject matter of these Terms (together with such party, the
          “Party Representatives”) that for the performance of its obligations under these Terms, the Party
          Representatives shall not directly or indirectly pay, offer or promise to pay, or authorize the payment of any
          money, or give, offer or promise to give, or authorize the giving of anything else of value, to:
          <br /> (a) any government official in order to influence official action;
          <br /> (b) any person (whether or not a government official) (i) to influence such person to act in breach of
          a duty of good faith, impartiality or trust (“acting improperly”), (ii) to reward such person for acting
          improperly, or (iii) where such person would be acting improperly by receiving the money or other thing of
          value; or
          <br /> (c) any person to reward that person for acting improperly or to induce that person to act improperly.
          The Party Representatives shall not, directly or indirectly, solicit, receive or agree to accept any payment
          of money or anything else of value in violation of any laws and regulations relating to anti-corruption.
          <br />
          <br />
          MISCELLANEOUS
          <br />
          14.1 Responsibilities of an Affiliated Company
          <br />
          <br />
          14.1.1 The Company and its Affiliated Companies are separate entities and operate independently from each
          other.
          <br />
          <br />
          14.1.2 The Company shall not be responsible for any dealings between the Subscriber and the Affiliated
          Companies.
          <br />
          <br />
          14.2 INTELLECTUAL PROPERTY
          <br />
          <br />
          14.2.1 The Company is the owner (or the licensee, where applicable) of all proprietary and intellectual
          property rights on or of the Services (including all source code, information, data, texts, graphics, visual
          interfaces, artworks, photographs, logos, icons, sound recordings, videos, look and feel, software programmes,
          computer code, downloadable files, software applications, interactive features, tools, services) or other
          information made available on the Site and through the Services.
          <br />
          <br />
          14.2.2 The Company grants the Subscriber, subject to these Terms, a non-exclusive, non-transferable,
          non-assignable, personal, limited license to access and use the Services for the Subscriber’s own personal
          use. This license is revocable at any time without notice to the Subscriber and liability to the Company. All
          rights not expressly granted to the Subscriber are reserved by the Company.
          <br />
          <br />
          14.2.3 The Subscriber shall not copy, transmit, publish, distribute, broadcast or reveal any intellectual
          property to any third parties without the prior written consent of the Company.
          <br />
          <br />
          14.2.4 Use by the Subscriber of the content or materials owned by the Company or made available on the Site
          and through the Services for any purpose not expressly permitted by these Terms is strictly prohibited.
          <br />
          <br />
          14.3 Governing Law and Agreed Jurisdiction
          <br />
          <br />
          14.3.1 These Terms shall be governed by the laws of Malaysia.
          <br />
          <br />
          14.3.2 The Subscriber and the Company agree to submit to the exclusive jurisdiction of the Malaysian courts.
          <br />
          <br />
          14.3.3 Prior to commencing any legal action, the Subscriber and the Company shall first attempt to settle a
          dispute expeditiously and in good faith.
          <br />
          <br />
          14.4 Entire Agreement These Terms shall constitute the entire agreement of the Company and the Subscriber and
          supersede all preceding and contemporaneous agreements between the Company and the Subscribers. Any waiver of
          any provisions of these Terms will be effective only if it is in writing and signed by both the Company and
          the Subscribers.
          <br />
          <br />
          14.5 No Transfer The Subscriber shall not transfer any of its rights or obligations under these Terms to any
          other parties without the consent of the Company.
          <br />
          <br />
          14.6 No Waiver No failure to exercise or any delay in exercising any right or remedy by the Company under
          these Terms shall operate as a waiver thereof.
          <br />
          <br />
          14.7 Severability If any provisions of these Terms shall be invalid, illegal or unenforceable, the validity,
          legality, and enforceability of the remaining provisions shall not be in any way affected or impaired.
        </p>
        );
      </div>
    </div>
  );
};

export default TermsConditionsPage;
