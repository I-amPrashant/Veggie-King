import React from "react";
import arrow from "../assets/icons/check-menu-icon.svg";
import chilli from "../assets/images/hero-section-food.png";
// import { useRef, useEffect } from 'react';
import { register } from "swiper/element/bundle";

register();

export default function Hero({ scrollToSection }) {
  const menuImages = [
    "src/assets/images/hero-section-slide-food-1.png",
    "src/assets/images/hero-section-slide-food-2.png",
    "src/assets/images/hero-section-slide-food-3.png",
    "src/assets/images/hero-section-slide-food-4.png",
  ];
  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener('swiperprogress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('swiperslidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);

  return (
    <div className="flex justify-between relative h-max">
      <div
        id="text-side"
        className="w-[100%] xsm:w-[85%] sm:w-[60%] lg:w-[60%] pr-10 lg:pr-14 pb-32 z-30 pl-5 md:pl-16"
      >
        <h1 className="mt-[150px] text-5xl xsm:text-6xl font-extrabold">
          Healthy & Fresh Food For You
        </h1>
        <p className="text-gray-600 mt-5">
          Creates for lovers of healthy, delicious and non-obvious food
        </p>
        <button
          className="bg-orange p-3 rounded-md mt-2"
          onClick={() => scrollToSection("menu")}
        >
          Check Menu{" "}
          <span className="animate-pulse">
            <img src={arrow} alt="arrow" className="inline" />
          </span>
        </button>
      </div>

      <div
        id="pizza-wrapper"
        className="hidden xsm:flex absolute -right-40 sm:-right-0 md:right-10 lg:right-[20%] top-[50%] -translate-y-1/2 z-20 items-center"
      >
        <div className="swiper-wrapper relative h-[300px] w-[300px] rounded-full overflow-hidden">
          <swiper-container
            // ref={swiperElRef}
            slides-per-view="1"
            loop="true"
            autoplay="true"
            delay="4000"
            className="relative h-full w-full rounded-full flex justify-center items-center"
          >
            {menuImages.map((element, index) => (
              <swiper-slide key={index}>
                <img
                  src={element}
                  alt="dish_image"
                  className="relative h-full w-full object-cover"
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>

      <div
        id="right-side"
        className="relative hidden xsm:flex z-10 flex-col xsm:w-[15%] sm:w-[40%] sm:items-end"
      >
        <div className="relative h-full bg-green sm:w-[70%] lg:w-[80%]"></div>
      </div>
      {/* chilli below  */}
      <img src={chilli} alt="chilli_pic" className="absolute -bottom-44" />
    </div>
  );
}
