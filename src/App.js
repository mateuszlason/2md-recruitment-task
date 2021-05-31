import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import Gallery from "./components/Gallery";

function App() {
  const [toggleGallery, setToggleGallery] = useState(false);

  const handleToggle = () => {
    setToggleGallery(!toggleGallery);
  };
  return (
    <>
      <Main toggleGallery={handleToggle} />
      <Footer />
      {toggleGallery && <Gallery toggleGallery={handleToggle} />}
    </>
  );
}

export default App;
