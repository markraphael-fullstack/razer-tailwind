import React from "react";
import ProductCard from "../product-card";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-night text-white pt-[4.5rem] pb-10">
        <div className="max-w-[69.5rem] mx-auto">
          <h2 className="uppercase text-razergreen font-semibold text-2xl text-center">
            Explore Other Products
          </h2>
          <div id="carousel-image" className="grid grid-cols-4 gap-4 pt-12">
            <ProductCard />
          </div>
        </div>
        {/* <div className="h-1 w-full bg-white"></div> */}
      </div>
    </div>
  );
};

export default ProductSection;
