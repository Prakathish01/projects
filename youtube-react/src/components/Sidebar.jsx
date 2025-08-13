import React from "react";

const Sidebar = () => {
  return (
    <div className="top-[64px] bg-[#ffffff] bottom-0 w-17 fixed">
      <div className="flex flex-col items-center gap-4 py-4 transition-opacity duration-200 bg-white ">
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#dfdfdf] hover:rounded-lg h-[64px] w-[64px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#434343"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
          <p className="text-[12px] m-0">Home</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#dfdfdf] hover:rounded-lg h-[64px] w-[64px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#434343"
          >
            <path d="M486.67-432.67 708-580 486.67-727.33v294.66Zm138 234h156.66Q779-176 763-161q-16 15-39.66 17.67L218-82.33q-27.67 3.66-49.5-12.84t-25.17-44.16L83-617q-3.33-27.67 13.38-49.64 16.71-21.98 44.29-25.36l58-6.67v67.34l-50 5.66L210-148l414.67-50.67ZM332-265.33q-27 0-46.83-19.84Q265.33-305 265.33-332v-481.33q0-27 19.84-46.84Q305-880 332-880h481.33q27 0 46.84 19.83Q880-840.33 880-813.33V-332q0 27-19.83 46.83-19.84 19.84-46.84 19.84H332Zm0-66.67h481.33v-481.33H332V-332Zm240.67-240.67ZM210-148Z" />
          </svg>
          <p className="text-[12px] m-0">Shorts</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#dfdfdf] hover:rounded-lg h-[64px] w-[64px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#434343"
          >
            <path d="M146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-426.66q0-27 19.83-46.84Q119.67-640 146.67-640h666.66q27 0 46.84 19.83Q880-600.33 880-573.33v426.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm0-66.67h666.66v-426.66H146.67v426.66Zm258-60.66L632-360 404.67-512v304.67Zm-252-486V-760h654.66v66.67H152.67Zm127.33-120V-880h400v66.67H280ZM146.67-146.67v-426.66 426.66Z" />
          </svg>
          <p className="text-[12px] m-0">Subscription</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#dfdfdf] hover:rounded-lg h-[64px] w-[64px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#434343"
          >
            <path d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z" />
          </svg>
          <p className="text-[12px] m-0">You</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#dfdfdf] hover:rounded-lg h-[64px] w-[64px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#434343"
          >
            <path d="M480-315.33 284.67-510.67l47.33-48L446.67-444v-356h66.66v356L628-558.67l47.33 48L480-315.33ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z" />
          </svg>
          <p className="text-[12px] m-0">Downloads</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
