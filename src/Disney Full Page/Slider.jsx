import React, { useEffect, useState,useRef } from 'react'
//import Thalapathy from "./Thalapathy.css"
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const  Imagewidth=window.innerWidth;
function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();

    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
    const SliderRight=(element)=>{
        element.scrollLeft+=Imagewidth-110
    }
    const SliderLeft=(element)=>{
        element.scrollLeft-=Imagewidth-110
    }

  return (
    <div className="bg-black text-white">
        <div>
            <HiChevronLeft className="text-white text-[45px] absolute mx-8 mt-[160px] cursor-pointer hidden md:block" onClick={()=>SliderLeft(elementRef.current)} />
            <HiChevronRight className="text-white text-[45px] absolute mx-8 mt-[160px] cursor-pointer right-0 hidden md:block" onClick={()=>SliderRight(elementRef.current)} />
        </div>
    <div className='flex overflow-x-auto w-full px-16 py-4 scroll-smooth scrollbar-hide' ref={elementRef}> 
        {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full md:h-[460px]  object-left-top mr-5 rounded-md hover:border-[4.5px] border-gray-400 transition-all duration-100 ease-in' alt="IMG"/>
        ))}
    </div>
    </div>
  )
}

export default Slider