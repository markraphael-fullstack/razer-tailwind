import React from "react";
import FeatureCard from "../card-feature";

//icons
import IconCooling from "../../assets/icons/razer-nari-Cooling-Gel-Infused-Cushions-icon.svg";
import IconHeadband from "../../assets/icons/razer-nari-Auto-Adjusting-Headband-icon.svg";
import IconSwivel from "../../assets/icons/razer-nari-Swiveling-Earcups-icon.svg";
import IconBalance from "../../assets/icons/razer-nari-Game-Chat-Balance-icon.svg";
import IconWireless from "../../assets/icons/razer-nari-Wireless-Audio-icon.svg";
import IconWired from "../../assets/icons/razer-nari-35-mm-Wired-Mode-icon.svg";

const Features = () => {
  return (
    <div className="bg-night pt-16 pb-12">
      <div className="max-w-[70rem] mx-auto px-12">
        <div className="text-center w-[70%] mx-auto">
          <h2 className="uppercase text-razergreen font-semibold text-2xl">
            Complemented By Comfort
          </h2>
          <p className="text-white/60 leading-loose mt-5">
            The Razer Nari is designed so that its immersive technology is
            complemented by comfortable features, letting you escape into game
            worlds for hours with strain.
          </p>
        </div>
        <div
          id="feature-cards"
          className="grid grid-cols-3 gap-x-10 gap-y-16 mt-12"
        >
          <FeatureCard
            src={IconCooling}
            title={"Cooling Gel-Infused Cushions"}
            description={
              "Reduces heat build-up during intense gaming sessions."
            }
          />
          <FeatureCard
            src={IconHeadband}
            title={"Auto-adjusting Headband"}
            description={
              "Maximum adjustability to fit seamlessly onto any head size"
            }
          />
          <FeatureCard
            src={IconSwivel}
            title={"Swiveling Earcups"}
            description={"Adapting to the shape and position of your ears"}
          />
          <FeatureCard
            src={IconBalance}
            title={"Game/chatBalance"}
            description={
              "Fine-tune between game and chat volume for the perfect mix and lets you enjoy immersive sound without interuptting team communication."
            }
          />
          <FeatureCard
            src={IconWireless}
            title={"2.4GHZ Wireless Audio"}
            description={
              "Get lag-free, high-fidelity gaming audio with a wireless range of up to 12 meters smoothly without disconnection."
            }
          />
          <FeatureCard
            src={IconWired}
            title={"Wired Mode"}
            description={
              "Get Seamless cross-platform compatibility via 3.5 mm audio jack in wired mode. Enjoy high quality stereo sound whether you're playing on PC."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
