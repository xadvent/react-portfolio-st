import React, { useState, useEffect } from "react";
import Water from "../../assets/images/1water.avif";
import Desert from "../../assets/images/2desert.avif";
import Lava from "../../assets/images/3lava.avif";
import Sky from "../../assets/images/4sky.avif";
import Forest from "../../assets/images/5forest.avif";
import "./style.css";

const imgUrls = [Water, Desert, Lava, Sky, Forest];

const newImgs = imgUrls.map((url) => {
  return (
    <>
      <div
        className="h_bg-image order-1 order-lg-2 h-100"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    </>
  );
});

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return newImgs[currentIndex];
};

export default Slideshow;
