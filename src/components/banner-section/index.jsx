import React from "react";
import "./index.scss";

import IconTHX from "../../assets/razer-nari-thx-logo.png";

const Banner = () => {
  return (
    <div className="gaming-banner">
      <div className="max-w-[69.5rem] mx-auto py-24">
        <h2 className="uppercase text-razergreen font-semibold text-2xl">
          THX SPATIAL AUDIO
        </h2>
        <p className="text-white/60 mt-4 w-[34%] text-lg">
          THX Spatial Audio goes beyond traditional surround sound by
          stimulating sound in a 360 sphere around you. With the Nari Ultimate,
          you can now react to any in-game movement, even if it's coming from
          above or beneath you, giving you heightened senses during your game.
          Unleash your predatory instincts with sound as a weapon.
        </p>
        <img className="mt-8 w-36" src={IconTHX} alt="" />
      </div>
    </div>
  );
};

export default Banner;
