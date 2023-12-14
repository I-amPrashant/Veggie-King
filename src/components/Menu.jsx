import React from "react";
import MenuItem from "./MenuItem";
import ImageItem from "./ImageItem";
import menuImage1 from "../assets/images/menu-section-mighty-burger.png"
import menuImage2 from "../assets/images/menu-section-chickpae-salad.png"
import menuImage3 from "../assets/images/menu-section-chickpae-wrap.png"
import galleryImage1 from "../assets/images/gallery-photo-1.png"
import galleryImage2 from "../assets/images/gallery-photo-2.png"
import galleryImage3 from "../assets/images/gallery-photo-3.png"
import galleryImage4 from "../assets/images/gallery-photo-4.png"
import galleryImage5 from "../assets/images/gallery-photo-5.png"
import galleryImage6 from "../assets/images/gallery-photo-6.png"

export default function Menu() {
  const menuItems = [
    {
      dishName: "Chickpea's wrap",
      description: "Served with fries and drink",
    },
    {
      dishName: "Mighty burger",
      description: "Served with fries and drink",
    },
    {
      dishName: "Chickpea's salad",
      description: "Served with fries and drink",
    },
  ];

  const imageCheck=(index)=>{
    if(index===1){
      return menuImage1;
    }
    if(index===2){
     return menuImage2;
    }
    return menuImage3
  }
  return (
    <>
      <div className=" relative text-center space-y-1 z-10" id="header">
        <h2 className="text-fontOrange font-bold text-lg">Menu</h2>
        <h1 className="font-bold text-3xl">Explore our best food</h1>
        <p className="text-gray-600">Below you can see our best selling meals!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 px-5 mt-12 gap-6">
        {menuItems.map((element, index)=>(
            <MenuItem key={index} indexVal={index} image={imageCheck(index)} dishName={element.dishName} description={element.description}/>
        ))}
      </div>

      <div className="h-[100px] w-full"></div>

      <h1 className="font-bold text-3xl text-center">Good food = Happy clients</h1>
      <div className="grid grid-cols-1 mt-3 bigMobile:grid-cols-2 md:grid-cols-3">
                <ImageItem  galleryImage={galleryImage1}/>
                <ImageItem  galleryImage={galleryImage2}/>
                <ImageItem  galleryImage={galleryImage3}/>
                <ImageItem  galleryImage={galleryImage4}/>
                <ImageItem  galleryImage={galleryImage5}/>
                <ImageItem  galleryImage={galleryImage6}/>
      </div>
    </>
  );
}


