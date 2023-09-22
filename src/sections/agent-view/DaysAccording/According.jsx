import Container from "@mui/material/Container";
import { useState } from "react";
import NewVerticalTimeline from "../NewVerticalTimeline";
const AgentViewAccording = ({dayName,SubTitle}) => {
  const [toggle, setToggle] = useState(false);
  const hanleDateSelect = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
   <div className="rounded-lg px-5 cursor-pointer bg-white">
   <div
        onClick={hanleDateSelect}
        className="  flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
         <span className={`${!toggle ? "rotate-0" :"rotate-180"}`}> <CurveDown /></span>
          <h2 className=" text-[19px] md:text-[25px] font-medium text-[#1A1A33]">
            {dayName}
          </h2>
        </div>
        <div className=" text-sm lg:text-lg text-[#323257]  font-normal">{SubTitle}</div>
      </div>
      {
        toggle && (
          <div className=" grid grid-cols-1 gap-5 lg:grid-cols-2">
               <div className=" space-y-7 pr-5">
                   <p className=" text-base font-normal text-[#1A1A33]">Accompanied by your private guide, discover the masterpieces of Catalonia's famed architect, Antoni Gaudí, starting with the Casa Mila, also known as La Pedrera. </p>
                   <p className=" text-base font-normal text-[#1A1A33]">Next, visit the visually arresting Sagrada Familia Basilica. Started in 1882 and still not complete, it combines Gothic influences with Art Nouveau.  </p>
                   <p className=" text-base font-normal text-[#1A1A33]">Finally, stop at Parc Guell, a beautiful municipal garden with a gatehouse where Gaudí lived during his later years, to view furnishings he designed as well as personal memorabilia. This evening, enjoy a local Chef’s Showcooking and savour the authentic flavors of Spain. </p>
               </div>
               <NewVerticalTimeline/>
          </div>
        )
      }
   </div>
    </Container>
  );
};

export default AgentViewAccording;

const CurveDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      d="M14 20L24 30"
      stroke="#1A1A33"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 30L34 20"
      stroke="#1A1A33"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
