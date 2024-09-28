import React from 'react'
// IMAGES
import DisneyIMG from "../assets/Disney-IMAGE.jpeg"
import MarvelIMG from "../assets/Marvel-IMAGE.jpeg"
import PixarIMG from "../assets/Pixar-IMAGE.jpeg"
import StarwarsIMG from "../assets/Starwars-IMAGE.jpeg"
import NationalGeoIMG from "../assets/NationalGeographic-IMAGE.jpeg"
// VIDEOS
import DisneyVIDEO from "../assets/Videos/Disney-VIDEO.mp4"
import MarvelVIDEO from "../assets/Videos/MarvelStudio-VIDEO.mp4"
import NationalGeoVIDEO from "../assets/Videos/NartionalGeograpic-VIDEO.mp4"
import PixarVIDEO from "../assets/Videos/Pixar-VIDEO.mp4"
import StarwarsVIDEO from "./../assets/Videos/StarWars-VIDEO.mp4"
// 

function ProductionHouse() {
    const HouseList=[
        {
            id:1,
            video:DisneyVIDEO,
            image:DisneyIMG
            
        },
        {
            id:2,
            video:MarvelVIDEO,
            image:MarvelIMG
            
        },
        {
            id:3,
            video:PixarVIDEO,
            image:PixarIMG
            
        },
        {
            id:4,
            video:NationalGeoVIDEO,
            image:NationalGeoIMG
            
        },
        {
            id:5,
            video:StarwarsVIDEO,
            image:StarwarsIMG
            
        },
        
    ]
  return (
    <div>
        <div className="flex gap-5 p-2 px-5 md:px-[30]">
            {HouseList.map((item)=>(
                <div className="border-[2px] border-gray-700 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800">
                     <video src={item.video} autoPlay loop className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"/>

                    <img src={item.image} alt="IMG-PRODUCTIONHOUSE" className="w-full z-[1]  " />
                </div>
            ))}
                                {/* <video src={MarvelVIDEO} autoPlay loop /> */}
        </div>
    </div>
  )
}

export default ProductionHouse