import React from "react";
import check from "./assets/check.svg";
import RecommendationAccordion from "../RecommendationAccordion/RecommendationAccordion";
const PlanTextInfo = () => {
  const data = [
    "24/7 Front desk",
    "Valet parking",
    "Swimming pool",
    "Golf park",
    "Airport pickup",
    "Spa and Gym",
    "Free WiFi all rooms",
  ];
  return (
    <div className=" w-full  ">
      <div>
        <h2 className="text-base text-black font-bold mb-[24px]">Overview</h2>
        <p className="mt-[24px] text-light-black">
          Fuga omnis consequuntur quia cupiditate aut nulla. Blanditiis quam
          veritatis. Commodi quia eum quia asperiores aliquid id. Officia
          explicabo fugit sequi ipsa ut quo repellat. Quidem magni adipisci non
          voluptate modi modi et earum unde. Soluta consectetur eos eos ea vel
          mollitia consequatur qui ut.
          <br />
          <br />
          Ut dolorem consequatur eligendi. Consectetur commodi ratione. Commodi
          fuga numquam aut deleniti hic. Commodi dolor excepturi et occaecati
          voluptas voluptatem. Minus dolorem exercitationem. <br /> Fugiat quia
          omnis odit doloremque hic animi. Dolorem vel facilis quisquam illum
          modi beatae. Impedit sunt consectetur sed libero exercitationem
          exercitationem. Et et sunt. Et omnis in. Aut qui optio enim beatae
          excepturi ipsum facere non.
        </p>
      </div>
      <div className="h-[1px] border-[#D9D9D9] w-full border-t my-[40px]"></div>
      <div className=" ">
        <h2 className="text-base text-main-black font-bold mb-[24px]">
          Facilities
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[24px] max-w-[761px]">
          {data.map((single) => (
            <div className="flex gap-[16px]">
              <img className="w-[20px]" src={check} alt="check" />
              <span className="text-xs text-light-black">{single}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-[68px] mb-[40px]">
          <h4 className="text-base md:text-md font-bold text-main-black mb-[16px]">
            Personalized Recommendations For You
          </h4>
          <p className="text-black text-xs">
            I have added recommended experiences for you, please feel free to
            add or remove new ones.{" "}
          </p>
        </div>
      </div>
      <RecommendationAccordion></RecommendationAccordion>
    </div>
  );
};

export default PlanTextInfo;
