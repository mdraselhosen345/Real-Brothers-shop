import React from 'react';
import { Link } from 'react-router';



const Hero = () => { 
    return (
          <div className="navbar shadow-sm bg-[#F5DEB3]">
    <div className="navbar-center w-full">
        <div className="flex w-full items-center justify-between lg:justify-center lg:gap-15 md:10  md:gap-2 gap-1">
             <div className="group">
    <Link 
        to="/Shope" 
        className="block hover:bg-[#E35335] hover:text-white 
                   rounded-xl lg:px-5 lg:py-3 px-4 py-3
                   text-black font-semibold 
                   text-[10px] md:text-base lg:text-xl 
                   transition-all duration-300 text-center"
    >
        SHOPE
    </Link>
</div>
          <div className="group">
    <Link 
        to="/" 
        className="block hover:bg-[#E35335] hover:text-white 
                   rounded-xl lg:px-5 lg:py-4 px-4 py-3 
                   text-black font-semibold
                   text-[10px] md:text-base lg:text-xl 
                   transition-all duration-300 text-center"
    >
        SERVICING
    </Link>
</div>

<div className="group">
    <Link 
        to="/" 
        className="block hover:bg-[#E35335] hover:text-white 
                   rounded-xl lg:px-5 lg:py-4 px-3 py-2 
                   text-black font-semibold 
                   text-[10px] md:text-base lg:text-xl 
                   transition-all duration-300 text-center"
    >
        HOME SERVICE
    </Link>
</div>

<div className="group">
    <Link 
        to="/" 
        className="block hover:bg-[#E35335] hover:text-white 
                   rounded-xl lg:px-5 lg:py-3 md:px-3 px-3 py-2 
                   text-black font-semibold 
                   text-[10px] md:text-base lg:text-xl 
                   transition-all duration-300 text-center"
    >
        ABOUTS US
    </Link>
</div>


<div className="group">
    <Link 
        to="/" 
        className="block hover:bg-[#E35335] hover:text-white
                   rounded-xl lg:px-5 lg:py-3 px-4 py-3 
                   text-black font-semibold 
                   text-[10px] md:text-base lg:text-xl 
                   transition-all duration-300 text-center"
    >
        CONTACT
    </Link>
</div>



           

        </div>
    </div>
</div>
    );
};

export default Hero;


