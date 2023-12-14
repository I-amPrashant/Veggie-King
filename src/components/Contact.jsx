import React from "react";
import time from "../assets/icons/time-icon.svg"
import location from "../assets/icons/map-icon.svg"
import phone from "../assets/icons/phone-icon.svg"

export default function Contact() {
  return (
    <>
      <div className=" relative text-center space-y-1 z-10" id="header">
        <h2 className="text-fontOrange font-bold text-lg">Contact</h2>
        <h1 className="font-bold text-3xl">We're waiting for you!</h1>
      </div>

      <div className="flex flex-wrap justify-evenly px-4 sm:px-9 gap-4 mt-6">
            <div className="flex flex-col gap-2 rounded-3xl w-[300px] py-7 text-center shadow-2xl">
                <p><img src={time} alt="time_icon" className="m-auto"/></p>
                <h3 className="font-semibold text-lg">Today 12pm - 9pm</h3>
                <p className="text-base text-gray-600">Working Hours</p>
            </div>
            <div className="flex flex-col gap-2 rounded-3xl w-[300px] py-8 text-center shadow-2xl">
                <p><img src={location} alt="location_icon" className="m-auto"/></p>
                <h3 className="font-semibold text-lg">3883 Rupert St. Vancouver</h3>
                <p className="text-base text-gray-600">Find Us</p>
            </div>
            <div className="flex flex-col gap-2 rounded-3xl w-[300px] py-7 text-center shadow-2xl">
                <p><img src={phone} alt="phone_icon" className="m-auto"/></p>
                <h3 className="font-semibold text-lg">(604) 569-2198</h3>
                <p className="text-base text-gray-600">Call to Us</p>
            </div>
           
      </div>
    </>
  );
}
