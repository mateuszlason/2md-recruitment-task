import {
  faChevronLeft,
  faChevronRight,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Gallery = ({ toggleGallery }) => {
  const [gallery, setGallery] = useState(null);
  const [counter, setCounter] = useState(0);

  const getImageUrl = () => {
    const array = gallery[counter].download_url.split("/").splice(0, 5);
    array.push(250, 280);
    return array.join("/");
  };
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=10")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setGallery(data);
      });
  }, []);
  return (
    <div className="absolute backdrop-filter backdrop-saturate-25 backdrop-brightness-75 min-h-screen h-screen w-full flex items-center justify-center z-10">
      <div className="relative flex flex-col sm:w-5/6 md:w-3/5 lg:w-1/2 lg:h-2/3 xl:w-2/5 2xl:h-3/5 2xl:w-1/3 h-3/5 w-1/4 bg-blue-50 text-blue-500">
        <div className="relative p-5 w-full h-1/4 bg-blue-200">
          <h3 className="font-bold my-1">GALLERY</h3>
          <p>
            <FontAwesomeIcon className="mr-2" icon={faGlobeAmericas} />
            picsum.photos
          </p>
          <button
            onClick={toggleGallery}
            className="text-center bg-blue-50 w-6 h-6 absolute top-3 right-3 rounded-full text-blue-400"
          >
            x
          </button>
        </div>
        <img
          className="self-center"
          alt="fetched picsum example"
          src={gallery && getImageUrl()}
        />
        <button
          disabled={counter === 0}
          onClick={() => setCounter(counter - 1)}
          className={
            "absolute left-3 top-1/2 text-xs border rounded-lg w-12 h-12" +
            (counter === 0
              ? " border-gray-400 text-gray-400"
              : " border-blue-500")
          }
        >
          <FontAwesomeIcon icon={faChevronLeft} />{" "}
        </button>
        <button
          disabled={counter === 9}
          onClick={() => setCounter(counter + 1)}
          className={
            "absolute right-3 top-1/2 text-xs border rounded-lg w-12 h-12" +
            (counter === 9
              ? " border-gray-400 text-gray-400"
              : " border-blue-500")
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />{" "}
        </button>
        <span className="border rounded-md border-blue-400 absolute bottom-6 left-3 py-1 px-2">
          {gallery && gallery[counter].author}
        </span>
      </div>
    </div>
  );
};

export default Gallery;
