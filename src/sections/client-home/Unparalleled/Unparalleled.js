import React from "react";
import calendar from "./assets/calendar.svg";
import gear from "./assets/gear.svg";
import rating from "./assets/rating.svg";
const Unparalleled = () => {
  const data = [
    {
      img: gear,
      title: "Personalized Planning",
      des: "Our AI-driven platform crafts unique travel plans tailored to your preferences, ensuring a unique experience that suits you. Share your plans with the Travelandz community to receive valuable suggestions and ideas from fellow travelers.",
    },
    {
      img: calendar,
      title: "Real-time Availability",
      des: "Stay up-to-date with the latest information on hotels, attractions, and transportation. Our AI travel planning platform connects to real-time systems, allowing you to effortlessly plan and book every aspect of your unique AI vacation itinerary with confidence. ",
    },
    {
      img: rating,
      title: "User-friendly Interface",
      des: "Navigating our AI travel planner is a breeze, thanks to our intuitive design. We've created a seamless user experience that simplifies the planning process, allowing you to focus on creating unforgettable vacation's memories with AI trip planner.",
    },
  ];
  return (
    <div id="about" className="mt-[100px] md:mt-[180px] scroll-m-[200px]">
      {/* title */}
      <div className="container mx-auto">
        <div className="md:flex justify-center mb-[40px] md:mb-[60px]">
          <div className="max-w-[848px] w-full md:text-center">
            <h2 className="font-bold text-base md:text-xl text-main-black  mb-[24px]">
              Unparalleled Features for Effortless{" "}
              <br className="md:block hidden" /> AI Trip Planning
            </h2>
            <p className="text-normal text-[#3C3C43]">
              Travelandz is an AI trip planner that uses the tools of travel
              agencies, allowing it to offer the best price for hotels and
              activities available.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] ">
          {data.map((single) => (
            <div
              key={single.title}
              className="p-[24px] md:max-w-full max-w-[351px] bg-white border border-[#e5e5e500]"
            >
              <img className="w-[42px] mb-[32px]" src={single.img} alt="" />
              <h4 className="mb-[24px] text-base text-main-black font-bold">
                {single.title}
              </h4>
              <p className="text-normal text-light-black">{single.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unparalleled;
