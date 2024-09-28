import React, { useState } from 'react'
import uservijay from "../images/user-vj.jpeg"
import netflixlogo from "../images/netflix-name.png"

import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import Slider from "./Slider"
import ProductionHouse from './ProductionHouse';
import GenreMovieList from './GenreMovieList';
import MovieList from './MovieList';
import FooterEnd from './FooterEnd';
function MainHeader() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <>

<div className="bg-black text-white">
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 md:gap-16 items-center'>
        <img src={netflixlogo}className='w-[80px] 
        md:w-[115px] object-cover' alt='IMG' />
        <div className='hidden md:flex gap-10'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon} />
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
        <img src={uservijay}
        className='w-[40px] rounded-full' alt='IMG'/>
      
    </div>
     <Slider/>
     <ProductionHouse/>
     <MovieList/>
     <GenreMovieList/>
     <FooterEnd/>
    
 </div>     

    </>
  )
}

export default MainHeader