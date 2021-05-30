import React from "react";

const MainContent = () => {
  return (
    <section className="w-1/3 h-2/5 grid grid-cols-3 bg-blue-50">
      <div className="bg-blue-300"></div>
      <div className="col-span-2 px-10 flex flex-col justify-center text-blue-400">
        <h1 className="text-3xl text-left">This is main page title.</h1>
        <p className="text-sm text-left mt-3 mb-5">
          Lorem ipsum ppipsumipipsum psumpipsum ppipsu pipsu pipsumpipsummmipsum{" "}
        </p>
        <div className="flex flex-row w-full">
          <button className="border text-xs rounded-md py-2 px-8 border-blue-400 text-blue-400">
            MORE{" "}
          </button>
          <button className="ml-3 text-xs rounded-md py-2 px-6 border border-blue-400 bg-blue-400 text-white">
            SHOW GALLERY
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
