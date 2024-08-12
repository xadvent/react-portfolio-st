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
})()

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {imgUrls.map((url, index) => (
        <div
          key={index}
          className={`h_bg-image order-1 order-lg-2 h-100 ${index === currentIndex ? "" : "hidden"}`}
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      ))}
    </>
  );
};

export default Slideshow;
