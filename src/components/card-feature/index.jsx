import React from "react";
import IconCooling from "../../assets/icons/razer-nari-Cooling-Gel-Infused-Cushions-icon.svg";
// import IconHeadband from "../../assets/icons/razer-nari-Auto-Adjust-Headband-icon.svg";

const FeatureCard = ({ src, title, description }) => {
  return (
    <div>
      <img id="icon" className="w-10" src={src} alt="" />
      <h5 className="uppercase text-white font-bold text-base tracking-wider mt-2">
        {title}
      </h5>
      <p className="text-white/60 text-sm tracking-wider mt-2 ">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
