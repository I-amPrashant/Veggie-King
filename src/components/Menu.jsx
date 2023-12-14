import React from "react";
import MenuItem from "./MenuItem";
import ImageItem from "./ImageItem";

export default function Menu() {
  const menuItems = [
    {
      image: "src/assets/images/menu-section-mighty-burger.png",
      dishName: "Mighty burger",
      description: "Served with fries and drink",
    },
    {
      image: "src/assets/images/menu-section-chickpae-salad.png",
      dishName: "Chickpea's salad",
      description: "Served with fries and drink",
    },
    {
      image: "src/assets/images/menu-section-chickpae-wrap.png",
      dishName: "Chickpea's wrap",
      description: "Served with fries and drink",
    },
  ];

  const galleryImages=[
    "src/assets/images/gallery-photo-1.png",
    "src/assets/images/gallery-photo-2.png",
    "src/assets/images/gallery-photo-3.png",
    "src/assets/images/gallery-photo-4.png",
    "src/assets/images/gallery-photo-5.png",
    "src/assets/images/gallery-photo-6.png",
  ]
  return (
    <>
      <div className=" relative text-center space-y-1 z-10" id="header">
        <h2 className="text-fontOrange font-bold text-lg">Menu</h2>
        <h1 className="font-bold text-3xl">Explore our best food</h1>
        <p className="text-gray-600">Below you can see our best selling meals!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 px-5 mt-12 gap-6">
        {menuItems.map((element, index)=>(
            <MenuItem key={index} indexVal={index} image={element.image} dishName={element.dishName} description={element.description}/>
        ))}
      </div>

      <div className="h-[100px] w-full"></div>

      <h1 className="font-bold text-3xl text-center">Good food = Happy clients</h1>
      <div className="grid grid-cols-1 mt-3 bigMobile:grid-cols-2 md:grid-cols-3">
              {galleryImages.map((element, index)=>(
                <ImageItem key={index} galleryImage={element} indexValue={index}/>
              ))}
      </div>
    </>
  );
}


