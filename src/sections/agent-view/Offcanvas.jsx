import React from 'react';

const Offcanvas = ({show,setShow}) => {
    return (
        <div>
             <div className="drawer drawer-end">
            <input
              id="my-drawer"
              type="checkbox"
              checked={show}
              className="drawer-toggle"
            />
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div className=" menu p-4  min-h-full bg-white   text-base-content max-w-[773px] w-full">
                <div
                  onClick={() => setShow(false)}
                  className="flex justify-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#0000FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#0000FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h5 className="text-[#000] text-[24px] font-[500] mb-[36px] ">
                  Same activity, different time
                </h5>
                <div className="flex gap-[12px] mb-[52px]">
                  <button className="outline_btn">11.00 - 12.00</button>
                  <button className="outline_btn">13.00 - 14.00</button>
                </div>
                <div className="flex justify-between gap-3 items-center mb-[36px]">
                  <p className="text-[#000] text-[24px] font-[500]">
                    Other plans
                  </p>
                  <button className="flex gap-[13px] text-[#00F] text-[14px]">
                    Filter{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                    >
                      <path
                        d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
                        stroke="#0000FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <input type="search" className="w-full border border-sky-950" />
                <div className="grid grid-cols-2 gap-[22px]">
                  <div className="bg-[#F7F7F7] rounded-[4px] p-[20px]">
                    <p className="text-[20px] text-[#000] font-[500] mb-[28px]">
                      Visit X Museum
                    </p>
                    <div className="flex gap-[24px] mb-[25px]">
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          TIME
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          From 9 to 18
                        </p>
                      </div>
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          PRICE
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          12€/p
                        </p>
                      </div>
                    </div>
                    <button className="text-[#00F] text-[14px] font-[400]">
                      Select this one
                    </button>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-[4px] p-[20px]">
                    <p className="text-[20px] text-[#000] font-[500] mb-[28px]">
                      Visit X Museum
                    </p>
                    <div className="flex gap-[24px] mb-[25px]">
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          TIME
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          From 9 to 18
                        </p>
                      </div>
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          PRICE
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          12€/p
                        </p>
                      </div>
                    </div>
                    <button className="text-[#00F] text-[14px] font-[400]">
                      Select this one
                    </button>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-[4px] p-[20px]">
                    <p className="text-[20px] text-[#000] font-[500] mb-[28px]">
                      Visit X Museum
                    </p>
                    <div className="flex gap-[24px] mb-[25px]">
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          TIME
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          From 9 to 18
                        </p>
                      </div>
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          PRICE
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          12€/p
                        </p>
                      </div>
                    </div>
                    <button className="text-[#00F] text-[14px] font-[400]">
                      Select this one
                    </button>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-[4px] p-[20px]">
                    <p className="text-[20px] text-[#000] font-[500] mb-[28px]">
                      Visit X Museum
                    </p>
                    <div className="flex gap-[24px] mb-[25px]">
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          TIME
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          From 9 to 18
                        </p>
                      </div>
                      <div>
                        <p className="text-[#999] text-[12px] font-[500] mb-[8px]">
                          PRICE
                        </p>
                        <p className="text-[#000] text-[16px] font-[400]">
                          12€/p
                        </p>
                      </div>
                    </div>
                    <button className="text-[#00F] text-[14px] font-[400]">
                      Select this one
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Offcanvas;