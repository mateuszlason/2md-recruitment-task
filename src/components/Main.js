import React from "react";
import MainContent from "./MainContent";

const Main = ({ toggleGallery }) => {
  return (
    <main className="h-4/5 w-screen flex justify-center bg-white items-center">
      <MainContent toggleGallery={toggleGallery} />
    </main>
  );
};

export default Main;
