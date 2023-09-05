import Aos from 'aos';
import 'aos/dist/aos.css';
// import { useWindowSize } from 'hooks/useWindowSize';
import React, { useEffect } from 'react';

const HelpAndPrecautions = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className=" text-white space-y-3 opacity-80">
      <h3 className="sm:text-[20px] md:text-[32px] font-semibold text-white sm:leading-[26px] md:leading-[40px]">
        SAFETY & PRECAUTIONS
      </h3>
      <p>
        The Blueshark R Series products are categorized as vehicles. While driving in public areas and on roads, please
        strictly obey the laws and regulations of the local country and state.
      </p>
      <p>
        Please do not dismantle, modify, alter the vehicle or use unauthorized third-party replacement parts. All losses
        arising therefrom will be borne by the user. Failure to follow this warning will void the Warranty Card.
      </p>
      <p className="font-bold  text-[16px]">Personal riding safety</p>
      <div>
        <p>Safe driving starts with proper riding gear:</p>
        <ul className="list-disc pl-[25px]">
          <li>For your safety, always wear a helmet during use</li>
          <li>When riding at night, be sure you are clearly visible and take proper protective measures; </li>
          <li>Always wear suitable riding boots or shoes. </li>
          <li>
            Bad driving behavior lets the rider ignore some safety precautions and may cause unnecessary safety
            accidents.
          </li>
        </ul>
        <p>
          Regularly carry out daily maintenance and routine inspection In order to avoid malfunctions and accidents,
          please carry out a regular inspection before using the vehicle. Meanwhile, within 6 months or after the total
          mileage reaches 500 km (whichever occurs first), please go to an authorized store, after-sales service outlet
          or contact the Blueshark official customer service hotline to conduct routine maintenance. Abnormal vehicle
          condition If the vehicle has been subjected to abnormal knocks, odor or shocks, it indicates that the vehicle
          has malfunctioned. Continued use may adversely affect driving and even cause an accident. In this case, please
          go to a Blueshark authorized store, after-sales service outlet or contact the official service hotline to
          check and troubleshoot the vehicle ASAP. Riding in the rain or snow When riding in the rain or snow, due to
          slippery roads, please slow down and drive carefully, pay attention to kill the engine in advance and always
          keep a sufficient braking distance. Do not ride in an unusual posture While riding, rider must hold the
          handlebars with both hands at ALL TIMES and keep the feet on the foot pegs. Do not make dangerous driving
          actions. Never ride without a license . According to local traffic regulations, it is strictly forbidden to
          drive the Blueshark R Series smart electric scooter without a valid license. Don&#39; t make sharp turns
          Excessive speed when turning may cause the vehicle to fall over or overturn. Do not drive after drinking or
          taking medications To protect rider and passenger safety, do not drive the Blueshark R Series smart electric
          scooter under the influence of drugs, alcohol or medications. Do not modify the vehicle in an unauthorized
          manner The Three Guarantees Policy does not apply to any modified vehicles. Unauthorized tampering may
          adversely affect the vehicle stability, shorten the service life of the vehicle and even cause serious vehicle
          breakdowns and serious accidents.
        </p>
        <p className="font-bold text-[16px]">Weight load</p>
        <div className=" pl-[25px]">
          <ul className="list-disc">
            <li>
              Please follow the requirements of weight load on the vehicle below, as incorrect weight load will
              compromise its performance and stability
            </li>
            <li>
              The total weight of the rider, passenger, accessories and cargo can NOT exceed the limit of the vehicle’s
              maximum weight load.
            </li>
            <li>
              Before you start driving, please confirm that the accessories and cargo are securely fastened to the
              vehicle, in case the cargo wobbles so you lose your balance while driving.
            </li>
            <li>
              Accessories and cargo should be placed at the center axis of the vehicle, and please make sure the tire
              pressure is normal before driving
            </li>
          </ul>
          <p></p>
        </div>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Public Traffic Safety </p>
        <p className="pl-[25px]">
          While riding the Blueshark R Series smart electric scooter, please strictly obey all the contents and
          requirements. Observe the surrounding traffic When riding, pay more attention to the surrounding pedestrians
          and vehicles. Always slow down when passing sidewalks or intersections. Parking In order to prevent the
          vehicle from being stolen, be sure that the power is OFF, the vehicle is locked and the smart key is removed
          when leaving. Always bring your valuable property with you. Do not park the vehicle in a place that obstructs
          the road. Please park the vehicle on a flat road. Never park on uneven and soft ground or your vehicle may
          fall over. Protect the environment Environmental protection is the common concern of the whole society and it
          is also the obligation of everyone. If the lithium battery used in this product is not disposed of properly,
          it may have a negative impact on the environment. Therefore, if the vehicle requires battery or other part
          replacement, please go to a Blueshark authorized store, after-sales service outlet or call the Blueshark
          customer service hotline for proper disposal of the used batteries and parts.
        </p>
        <p>Parts replacement </p>
        <div className="pl-[25px]">
          <ul className="list-disc">
            <li>Have the parts replaced at a Blueshark authorized store or after-sales service outlet. </li>
            <li>
              Using parts other than original spare parts or parts approved by Blueshark may lead to accidents or
              malfunctions and invalidate your warranty rights.{' '}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Battery Safety Precautions </p>
        <p className="pl-[25px]">
          If the battery has been subjected to abnormal conditions, such as heating, deforming or producing strange
          smell, please stop using it immediately and stay away from it. Contact the after-sales service outlet for
          service and do not dismantle the battery by yourself. Dismantling the battery without authorization may lead
          to fire, explosion and other hazard. Failure to follow this warning will automatically invalidate your
          warranty rights.
        </p>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Do not insert objects at the battery contacts </p>
        <p className="pl-[25px]">
          Inserting objects at the contact points may lead to poor contact and make it operate improperly. Metal objects
          such as needle tips may cause a short circuit and even an electric shock.{' '}
        </p>
      </div>
      <div>
        <p className="font-bold text-[16px]">Do not throw the battery into the fire </p>
        <p className="pl-[25px]">
          Never throw the battery into the fire or it will get damaged or even explode. Please strictly follow the
          official recycling procedure to dispose of batteries that are no longer used.
        </p>
      </div>
      <div>
        <p className="font-bold text-[16px]">Do not use in case of abnormal noise or deformation </p>
        <p className="pl-[25px]">
          Continued use of the battery may lead to safety accidents such as overheat, rupture or burns. Please contact
          the authorized store or after-sales service outlet directly.{' '}
        </p>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Do not use a damaged battery </p>
        <p className="pl-[25px]">
          Failure to heed this warning may lead to battery malfunction. Please have it tested at an authorized store or
          after- sales service outlet.
        </p>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Do not disassemble the battery </p>
        <p className="pl-[25px]">
          Disassembling the battery may lead to functional failure and potential safety hazards. If the battery is
          disassembled without authorization, it will automatically lose the three-guarantee qualification.
        </p>
      </div>
      <div>
        <p className="font-bold  text-[16px]">
          Warning: Please remove the battery from the motorcycle during long-term storage (more than seven days).{' '}
        </p>
        <p className="font-bold  text-[16px]">Do not drop or impact the battery </p>
        <p className="pl-[25px]">
          Please be careful not to drop or impact the battery, especially avoid hitting a sharp corners. If the battery
          is damaged, there may be internal circuit damage, which is prone to short circuit or other safety accidents
        </p>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Do not use the battery on other electrical products </p>
        <p className="pl-[25px]">
          This battery can only be used together with Blueshark R smart electric motorcycle, Blueshark charger and
          charging cradle. Do not use it for other electrical products. In case of violation, battery failure, damage or
          other safety accidents may be caused, and all consequences arising therefrom shall be borne by the user.
        </p>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Short-term Storage </p>
        <p className="pl-[25px]">
          Please keep the motorcycle in a flat, stable, well-ventilated and dry place. Charge the battery to 50% before
          storage to prolong battery life.
        </p>
      </div>
      <div>
        <p className="font-bold  text-[16px]">Long-term Storage </p>
        <p className="pl-[25px]">
          Before storage, charge the battery to 50%, keep the temperature of 0℃-20 ℃ and the humidity of 30% - 70%.
          Carry out a charge and discharge cycle at least every 2 months. After long-term storage, charge the battery to
          100% first. Check all parts carefully before riding to make sure there are no problems. If there are any
          problems, take the motorcycle to the dealer for maintenance or repair.
        </p>
      </div>
    </div>
  );
};

export default HelpAndPrecautions;
