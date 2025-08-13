import React from "react";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between shadow-lg">
      <div className="column1 flex ml-3 items-center">
        <img
          className="w-8 mr-2 ml-2 cursor-pointer"
          src="https://supersimple.dev/exercises/youtube/icons/hamburger-menu.svg"
        />
        <img
          className="h-6 ml-2 cursor-pointer"
          src="https://supersimple.dev/exercises/youtube/icons/youtube-logo.svg"
          alt="youtube-logo"
        />
      </div>
      <div className="flex flex-1 justify-center px-2 sm:px-4">
        <div className="flex w-full max-w-[37.8rem] min-w-[20px]">
          <input
            type="text"
            className="flex-1 border ml-1.5 border-gray-300 rounded-l-full px-2 sm:px-4 py-1 h-[40px] focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-[#f2f2f2] cursor-pointer rounded-r-full h-[40px] px-3 sm:px-4 flex items-center justify-center border border-gray-400">
            <img
              src="https://supersimple.dev/exercises/youtube/icons/search.svg"
              alt="Search"
              className="h-5 w-5"
            />
          </button>
          <button className="bg-[#f2f2f2] rounded-full cursor-pointer h-[40px] w-[40px] ml-2 flex items-center justify-center">
            <img
              src="https://supersimple.dev/exercises/youtube/icons/voice-search-icon.svg"
              alt="Voice"
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
      <div className="flex ml-1.5 justify-center items-center justify-between mr-2">
        <button className="bg-transparent border-0 m-6 text-2xl cursor-pointer">
          ⋮
        </button>
        <div className="flex justify-center items-center">
          <button className="flex items-center cursor-pointer justify-center pl-1 border-gray-400 border rounded-full h-[40px] p-2">
            <img
              className="h-[36px] rounded-full"
              src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            />
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
