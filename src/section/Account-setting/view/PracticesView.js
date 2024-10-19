import React from "react";

export default function PracticesView() {
  return (
    <div className="w-full flex-col gap-y-8 px-[56px] pt-[25px]">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-row  gap-x-1">
          <p className="text-[38px] font-normal">Welcom,</p>
          <p className="text-[38px] font-bold">Teacher</p>
        </div>

        <div className="flex flex-row gap-x-2">
          <div className="w-[52px] h-[52px] rounded-tl-[20px] rounded-br-[20px] relative bg-[#F3F6FF] flex justify-center items-center  shrink-0">
            <i className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 fa-solid fa-circle text-[#5840BB] w"></i>

            <i className="fa-solid fa-bell w-[16px] h-[18px] text-[#5840BB]"></i>
          </div>
          <div className="bg-[#F3F6FF] rounded-lg h-[52px] p-3">
            <input
              type="text"
              className="outline-none bg-[#F3F6FF] h-full w-full text-md"
              placeholder="Search for test..."
            />
          </div>
          <div className="h-[52px] w-[52px] rounded-tl-[20px] rounded-br-[20px] shrink-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="current user"
              className="w-full h-full  rounded-tl-[20px] rounded-br-[20px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <button className="flex flex-row gap-x-1 items-center bg-[#F3F6FF] px-2 py-1 rounded-lg text-gray-400 hover:shadow-lg">
          <i class="fa-solid fa-chevron-left"></i>
          Go back
        </button>

        <p className="w-full text-center font-bold text-[40px]">
          Practice Name
        </p>

        <div className="flex flex-col gap-y-6 pb-8">
          <div className="border-[3px] border-[#42427D] rounded-[50px] px-6 py-6">
            <p className="text-[25px] font-semibold">
              QUESTION 1 ({" "}
              <span className="font-normal border-[2px] border-[#42427D] rounded-[6px] px-1 cursor-pointer hover:shadow-lg select-none">
                ENTER
              </span>{" "}
              POINTS )
            </p>
            <p className="text-[25px] font-normal">
              Two plus two minus one is?
            </p>
            <p className="text-[25px] font-normal">
              Answer: <span className="text-green-400">Three</span>,
            </p>
          </div>

          <div className="border-[3px] border-[#42427D] rounded-[50px] px-6 py-6">
            <p className="text-[25px] font-semibold">
              STUDENTS NAME: <span className="font-normal">CARL JOHNSON</span>{" "}
              <span className="font-normal border-[2px] border-[#42427D] rounded-[6px] px-1 cursor-pointer hover:shadow-lg select-none">
                Enter Grade
              </span>
            </p>
            <p className="text-[25px] font-semibold">
              STUDENTS CODE: ASD_123_123
            </p>
            <p className="text-[25px] font-normal text-center border-[2px] border-[#42427D] rounded-[12px] py-2 mt-2">
              Answer: <span className="text-green-400">Three</span>,
            </p>
          </div>

          <div className="border-[3px] border-[#42427D] rounded-[50px] px-6 py-6">
            <p className="text-[25px] font-semibold">
              STUDENTS NAME: <span className="font-normal">CARL JOHNSON</span>{" "}
              <span className="font-normal border-[2px] border-[#42427D] rounded-[6px] px-1 cursor-pointer hover:shadow-lg select-none">
                Enter Grade
              </span>
            </p>
            <p className="text-[25px] font-semibold">
              STUDENTS CODE: ASD_123_123
            </p>
            <p className="text-[25px] font-normal text-center border-[2px] border-[#42427D] rounded-[12px] py-2 mt-2">
              Answer: <span className="text-green-400">Three</span>,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
