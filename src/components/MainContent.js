import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import hexagon from "../hexagon.svg";

const MainContent = ({ toggleGallery }) => {
  const [toggleText, setToggleText] = useState(false);
  return (
    <section
      className={
        (toggleText
          ? "h-3/4 sm:h-full md:h-full lg:h-4/5 lg:w-screen "
          : "sm:h-4/5 lg:h-3/5 h-1/2 ") +
        "md:w-5/6 xl:w-3/5 2xl:w-1/2 2xl:text-xs w-1/3 transition-height duration-300 ease-in-out sm:flex grid grid-cols-3 bg-blue-50"
      }
    >
      <div className="sm:hidden flex items-center justify-center bg-blue-300">
        <img
          className={
            "w-44 h-44 -ml-48" +
            (toggleText ? " lg:-ml-14 md:-ml-4" : " lg:-ml-24 md:-ml-8")
          }
          src={hexagon}
          alt="hexagon shape"
        />
      </div>

      <article className="sm:items-center col-span-2 relative py-24 h-full w-full px-10 flex flex-col justify-center text-blue-400">
        <h1 className="font-serif absolute lg:text-2xl sm:top-14 md:top-7 xl:top-12 top-20 text-3xl text-left">
          This is main page title.
        </h1>
        <p className="font-serif text-sm w-4/5 absolute text-left mt-3 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          scelerisque cursus diam non ultricies.
          <span className={toggleText ? "hidden" : "inline"}>..</span>
          <Transition
            as="span"
            show={toggleText}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            Curabitur nibh magna, maximus in diam eget, ultrices feugiat tellus.
            Vivamus tempus libero sit amet felis eleifend faucibus. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Donec porta
            tincidunt velit, non congue ex vestibulum a. Aliquam erat volutpat.
            Maecenas odio sem, condimentum at nisi a, aliquet malesuada turpis.
            Nam blandit condimentum sagittis. Pellentesque porttitor nisi nec
            velit sodales hendrerit.
          </Transition>
        </p>
        <div className="sm:items-center absolute md:bottom-5 xl:bottom-12 bottom-20 md:flex-col flex flex-row w-full">
          <button
            onClick={() => setToggleText(!toggleText)}
            className="md:my-2 sm:w-1/2 md:w-2/3 border text-xs rounded-md py-2 px-8 border-blue-400 text-blue-400"
          >
            {toggleText ? "LESS" : "MORE"}
          </button>
          <button
            onClick={toggleGallery}
            className="md:my-2 sm:w-1/2 md:w-2/3 md:ml-0 ml-3 text-xs rounded-md py-2 px-6 border border-blue-500 bg-blue-500 text-white"
          >
            SHOW GALLERY
          </button>
        </div>
      </article>
    </section>
  );
};

export default MainContent;
