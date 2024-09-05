import React, { useState, useEffect } from "react";
import Water from "../../assets/images/1water.avif";
import Desert from "../../assets/images/2desert.avif";
import Lava from "../../assets/images/3lava.avif";
import Sky from "../../assets/images/4sky.avif";
import Forest from "../../assets/images/5forest.avif";
import "./style.css";

const imgUrls = [Water, Desert, Lava, Sky, Forest];

(() => {
  imgUrls.forEach((picPath) => {
    const img = new Image();
    img.src = picPath;
  });
})();

const Slideshow = () => {
  const [photo, setPhoto] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fadeOutAndChange();
    }, 5000); // 

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [photo]);

  const fadeOutAndChange = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
      changePhoto();
    }, 500); // sync with css
  };

  const changePhoto = () => {
    if (photo === 4) {
      setPhoto(0);
    } else {
      setPhoto((prev) => prev + 1);
    }
  };

  const returnPhotoUrl = () => {
    switch (photo) {
      case 0:
        return Water;
      case 1:
        return Desert;
      case 2:
        return Lava;
      case 3:
        return Sky;
      case 4:
        return Forest;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`h_bg-image order-1 order-lg-2 h-100 ${isFading ? "fade" : ""}`}
        style={{ backgroundImage: `url(${returnPhotoUrl()})` }}
      ></div>
    </>
  );
};

export default Slideshow;