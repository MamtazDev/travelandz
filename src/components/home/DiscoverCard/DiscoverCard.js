import React from "react";

const DiscoverCard = ({ img, title, des }) => {
  return (
    <div className="relative cursor-grab h-[540px] group rounded-[20px] overflow-hidden">
      <div className="absolute flex items-end left-0 bottom-0 max- h-[298px] w-full z-30 p-[15px] md:p-[32px] discover-card-content-gradient  translate-y-0 md:translate-y-[66%] lg:translate-y-[85%] 2lg:translate-y-[80%] xl:translate-y-[66%]  group-hover:translate-y-[0%] transition-all duration-700">
        <div className="text-white">
          <h3 className="mb-[16px] md:mb-[32px] transition-all  duration-700 group-hover:mb-[16px] font-bold text-md capitalize  ">
            {title}
          </h3>
          <p className="mb-[32px] ">
            Immerse yourself in the modern city known for its impressive
            skyline, luxury shopping, and man-made attractions such as the
            iconic Burj Khalifa, the world's tallest building.
          </p>
          <div>
            <a
              href="#"
              className="flex inline-block transition-all hover:opacity-70 gap-[7px] text-white items-center"
            >
              <span className="underline font-semibold">Plan your trip</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M12.7585 15.6834C12.5971 15.6834 12.4357 15.6251 12.3083 15.5001C12.0619 15.2584 12.0619 14.8584 12.3083 14.6168L17.0146 10.0001L12.3083 5.38343C12.0619 5.14176 12.0619 4.74176 12.3083 4.5001C12.5547 4.25843 12.9624 4.25843 13.2088 4.5001L18.3653 9.55844C18.6117 9.8001 18.6117 10.2001 18.3653 10.4418L13.2088 15.5001C13.0814 15.6251 12.92 15.6834 12.7585 15.6834Z"
                  fill="white"
                />
                <path
                  d="M17.7707 10.6251H3.47332C3.12502 10.6251 2.83618 10.3418 2.83618 10.0001C2.83618 9.65846 3.12502 9.37512 3.47332 9.37512H17.7707C18.119 9.37512 18.4078 9.65846 18.4078 10.0001C18.4078 10.3418 18.119 10.6251 17.7707 10.6251Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute duration-700 transition-all opacity-100 group-hover:opacity-0 w-full bottom-0 left-0 h-[174px] discover-card-content-gradient  z-10"></div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="absolute bg-cover group-hover:scale-[1.2]  bg-center bg-no-repeat overflow-hidden w-full duration-700 inset-0 rounded-[20px] transition-all"
      ></div>
    </div>
  );
};

export default DiscoverCard;
