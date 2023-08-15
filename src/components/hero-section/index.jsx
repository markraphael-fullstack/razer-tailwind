import React from "react";
import IconTHX from "../../assets/razer-nari-thx-logo.png";
import IconChroma from "../../assets/razer-nari-chroma-logo.png";
import IconRazerNari from "../../assets/icons/razer-nari-logo.svg";
import "./index.scss";

const Hero = () => {
  return (
    <div id="banner" className="banner-container">
      <div className="relative max-w-[69.5rem] mx-auto pt-32 pb-24">
        <div id="first-part" className="w-[54%] text-white">
          <h1 className="text-[2.95rem] uppercase font-bold leading-tight">
            Supreme Wireless Immersion
          </h1>
          <p className="text-white/60 mt-4">
            When it comes to gaming immersion, sound plays a critical role. It
            engages your sense of hearing to determine the atmosphere and mood,
            creating a lifelike experience that lets you truly emobdy your game
            character. Standing by this philosophy, we've built a headset with
            THX Spatial Audio to bring 360 positional sound, giving you greater
            spatial awareness. We've also added ergonomic design features to
            make this one of the most comfortable daily drivers for gaming. This
            is the Razer Nari.
          </p>
          <div id="image-holder" className="flex gap-5 mt-8">
            <img className="w-24 h-24" src={IconTHX} alt="" />
            <img className="w-24 h-24" src={IconChroma} alt="" />
          </div>
        </div>
        <img
          className="absolute bottom-4 right-0 xl:-right-14 w-72 "
          src={IconRazerNari}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
