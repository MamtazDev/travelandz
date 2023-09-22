import React, { useState } from "react";
import arrow from "../RecommendationAccordion/assets/arrow.svg";
import add from "./assets/add.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const rooms = ["Deluxe room", "Deluxe room2", "Deluxe room3"];
const guests = ["1 adults", "2 adults", "3 adults"];
const CheckoutBox = () => {
  const [isHotel, setIHotel] = useState(true);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isDateOpen2, setIsDateOpen2] = useState(false);
  const [startDate, setStartDate] = useState(new Date("03 June 2023"));
  const [startDate2, setStartDate2] = useState(new Date("06 June 2023"));
  const [roomOpen, setRoomOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedGuest, setSelectedGuest] = useState(guests[0]);
  console.log(guestOpen);
  return (
    <div className="w-full pt-[24px] pb-[27px] checkout-box-wrap rounded-[20px]">
      <h2 className="text-black font-bold px-[26px] mb-[16px]">
        $25 per night
      </h2>
      <div className="px-[24px]">
        <div className="border grow border-[#DFDFDF] rounded-[15px] flex">
          <div
            onClick={() => setIsDateOpen(true)}
            className="w-full py-[14px] px-[16px]"
          >
            <h2 className="text-xs text-black font-medium mb-[8px]">
              Check-in
            </h2>
            <DatePicker
              className="text-light-black focus:outline-none w-[130px]"
              type="date"
              onClickOutside={() => setIsDateOpen(false)}
              open={isDateOpen}
              selected={startDate}
              dateFormat={"dd MMMM yyyy"}
              onChange={(date) => setStartDate(date)}
              onBlur={() => setIsDateOpen(false)}
            />
          </div>
          <div
            onClick={() => setIsDateOpen2(true)}
            className="border-l grow w-full py-[14px] px-[16px]"
          >
            <h2 className="text-xs text-black font-medium mb-[8px]">
              Check-out
            </h2>
            <DatePicker
              className="text-light-black focus:outline-none  w-[130px]"
              type="date"
              onClickOutside={() => setIsDateOpen2(false)}
              open={isDateOpen2}
              selected={startDate2}
              dateFormat={"dd MMMM yyyy"}
              onChange={(date) => setStartDate2(date)}
              onBlur={() => setIsDateOpen(false)}
            />
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setGuestOpen(true);
          }}
          className="border my-[16px]  justify-between items-center border-[#DFDFDF] rounded-[15px] flex px-[16px] py-[14px] relative"
        >
          <div>
            <h2 className="text-xs text-black font-medium mb-[8px]">Guests</h2>
            <p className="text-light-black ">{selectedGuest}</p>
          </div>
          <img className="rotate-180" src={arrow} alt="" />
          <div
            className={`absolute bottom-0 translate-y-full shadow-lg p-3 border rounded-[15px] flex flex-col left-0 right-0 bg-white z-[9999] ${
              guestOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {guests.map((single) => (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGuestOpen(false);
                  setSelectedGuest(single);
                }}
                className="px-2 py-2 hover:bg-slate-100 "
              >
                {single}
              </button>
            ))}
          </div>
        </div>
        <div
          onClick={() => setRoomOpen(!roomOpen)}
          className="border mb-[32px]  justify-between items-center border-[#DFDFDF] rounded-[15px] flex px-[16px] py-[14px] relative cursor-pointer"
        >
          <div>
            <h2 className="text-xs text-black font-medium mb-[8px]">
              Room type
            </h2>
            <p className="text-light-black ">{selectedRoom}</p>
          </div>
          <img className="rotate-180" src={add} alt="" />
          <div
            className={`absolute bottom-0 translate-y-full shadow-lg p-3 border rounded-[15px] flex flex-col left-0 right-0 bg-white z-[9999] ${
              roomOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {rooms.map((single) => (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setRoomOpen(false);
                  setSelectedRoom(single);
                }}
                className="px-2 py-2 hover:bg-slate-100 "
              >
                {single}
              </button>
            ))}
          </div>
        </div>
        {(roomOpen || guestOpen) && (
          <div
            onClick={() => {
              setRoomOpen(false);
              setGuestOpen(false);
            }}
            className="fixed top-0 left-0 right-0 z-[999] w-full h-full "
          ></div>
        )}
        <div className="py-[5px] checkout-chips pl-[4px] flex gap-[13px] items-center bg-[#F6F6F6] rounded-[80px]">
          <button
            onClick={() => setIHotel(true)}
            className={isHotel ? "active" : ""}
          >
            Hotel only
          </button>
          <button
            onClick={() => setIHotel(false)}
            className={!isHotel ? "active" : ""}
          >
            Hotel + Experiences
          </button>
        </div>
        <div className="flex justify-between items-center my-[24px]">
          <h4 className="text-lg text-main-black font-bold">$75</h4>
          <p className="text-[#8E8E92] text-xs">
            Tax will calculate in checkout
          </p>
        </div>
        <div>
          <button className="btn-red-gradient w-full">Checkout Hotel</button>
          <p className="mt-[24px] text-main-black text-center text-xs">
            Free Cancellation until 2023-06-03
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBox;
