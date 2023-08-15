import React from "react";
import FirstImage from "../../assets/images/razer-nari-gallery-05-wireless-gaming-headset.jpg";

const CarouselImage = () => {
  return (
    <div>
      <img className="w-full h-60 object-cover" src={FirstImage} alt="" />
    </div>
  );
};

export default CarouselImage;
