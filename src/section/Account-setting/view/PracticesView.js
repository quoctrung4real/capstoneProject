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

        <div className="grid grid-cols-[1fr_minmax(300px,_26vw)] gap-x-8">
          <div>
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
                  STUDENTS NAME:{" "}
                  <span className="font-normal">CARL JOHNSON</span>{" "}
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
                  STUDENTS NAME:{" "}
                  <span className="font-normal">CARL JOHNSON</span>{" "}
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
                  QUESTION 1 (0.5 POINTS )
                </p>
                <p className="text-[25px] font-normal">
                  Two plus two minus one is?
                </p>
                <p className="text-[25px] font-normal">
                  Answer: <span className="text-green-400">Three</span>,
                </p>
                <p className="text-[25px] font-semibold">
                  Not graded yet: <span className="text-red-500">10</span>/30
                  Students
                </p>
              </div>

              <div className="border-[3px] border-[#42427D] rounded-[50px] px-6 py-6">
                <p className="text-[25px] font-semibold">CLOSE ANSWERS</p>
                <div className="grid grid-cols-3 pt-2">
                  <div className="flex flex-col gap-y-2 items-center">
                    <p>
                      <span className="text-[#0AC800]">90%</span> (5 STUDENT)
                    </p>
                    <div className="bg-[#F3F6FF] rounded-lg h-[52px] p-3 border-2 border-[#42427D]">
                      <input
                        type="text"
                        className="outline-none bg-[#F3F6FF] h-full w-full text-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 items-center">
                    <p>
                      <span className="text-[#f8e538]">70%</span> (10 STUDENT)
                    </p>
                    <div className="bg-[#F3F6FF] rounded-lg h-[52px] p-3 border-2 border-[#42427D]">
                      <input
                        type="text"
                        className="outline-none bg-[#F3F6FF] h-full w-full text-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 items-center">
                    <p>
                      <span className="text-[#f83838]">50%</span> (3 STUDENT)
                    </p>
                    <div className="bg-[#F3F6FF] rounded-lg h-[52px] p-3 border-2 border-[#42427D]">
                      <input
                        type="text"
                        className="outline-none bg-[#F3F6FF] h-full w-full text-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-[3px] border-[#42427D] rounded-[50px] px-6 py-6">
                <p className="text-[25px] font-semibold">GRADED ANSWERS</p>
                <div className="grid grid-cols-2 pt-2 gap-x-8">
                  <div className="flex flex-col gap-y-2 items-center">
                    <p>
                      <span className="text-[#0AC800]">HIGHEST GRADE</span> (5
                      STUDENT)
                    </p>
                    <div className="bg-[#F3F6FF] rounded-lg h-[52px] w-full p-3 border-2 border-[#42427D]">
                      <input
                        type="text"
                        className="outline-none bg-[#F3F6FF] h-full w-full text-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2 items-center">
                    <p>
                      <span className="text-[#f83838]">LEAVE BLANK</span> (3
                      STUDENT)
                    </p>
                    <div className="bg-[#F3F6FF] rounded-lg h-[52px] w-full p-3 border-2 border-[#42427D]">
                      <input
                        type="text"
                        className="outline-none bg-[#F3F6FF] h-full w-full text-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TableNavigation />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-[24px] font-bold text-[#42427D]">
                Top Test Access
              </p>

              <button className="flex flex-row gap-x-1 items-center bg-[#F3F6FF] px-2 py-1 rounded-lg text-gray-400 hover:shadow-lg">
                See all
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="flex flex-col gap-y-10 mt-8">
              {[
                { no: 1, title: "Math", views: 1.2 },
                { no: 2, title: "Liturature", views: 3.4 },
                { no: 3, title: "English", views: 2.2 },
                { no: 4, title: "Chemical", views: 2.2 },
              ].map((item) => (
                <AccessItem key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccessItem({ no, title, views }) {
  return (
    <div className="flex items-center justify-start gap-x-6">
      <p className="text-[#42427D]">{no}</p>
      <div className="w-[64px] h-[64px] ">
        <img
          src="/icon/chat.svg"
          className="w-full h-full object-cover"
          alt="chat icon"
        />
      </div>
      <div>
        <p className="text-[20px] font-normal text-[#42427D]">{title}</p>
        <p className="text-[24px] font-bold text-[#42427D]">{`${views}M`}</p>
      </div>
    </div>
  );
}

function TableNavigation() {
  return (
    <nav
      class="flex items-center flex-column flex-wrap md:flex-row justify-between pb-6"
      aria-label="Table navigation"
    >
      <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <a
            href="/"
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-current="page"
            class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
