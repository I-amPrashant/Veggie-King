import React from "react";
import food from "../assets/images/hero-section-slide-food-2.png";

export default function About() {
  return (
    <div className="relative sm:flex items-center ">
      <div id="text_side" className="relative z-10 flex flex-col gap-3 order-5 pl-5 pr-5 xsm:pr-16 sm:pr-[150px] md:pr-[100px]">
        <h2 className="text-fontOrange font-bold text-lg">About Us</h2>
        <h1 className="font-bold text-3xl">Few words about us</h1>
        <p className="text-gray-600">
          We are not ordinary food truck. We create a place overflowing with
          positive energy that it expresses important to us.You don't wanna mess with us we are the best. Keep dreaming about success, cause we ain't gonna let you.
        </p>
      </div>

      <div className="z-0 absolute md:relative -right-[150px] md:-left-24 -bottom-[150px] sm:-bottom-[230px] md:bottom-0 order-2">
        <div
          id="image_wrapper"
          className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px]  rounded-full bg-green"
        ></div>

        <img
          src={food}
          alt="dish_pic"
          className="absolute top-1/2 transform -translate-y-1/2 h-[250px] w-[250px] object-cover -left-16 md:left-40"
        />
      </div>
    </div>
  );
}
