import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../components/Logo/Logo'
import { IoSearchOutline } from "react-icons/io5";
import AddToCard from "../../../assets/AddToCard.png"
import Acount from "../../../assets/Acount.png"

const NavBar = () => {
    return (
       
        <div className="navbar  bg-[#000047] shadow-sm px-4 relative flex items-center justify-between">
            
            {/* logo section */}
            <div className="z-10">
                <div className="btn btn-ghost text-xl p-0">
                    <Logo />
                </div>
            </div>


            <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 w-full max-w-md px-4">  
    {/*tablet section searchbar */}
    <div className="relative w-full">
        <input 
            type="text" 
            placeholder="Search..." 
            // ডানপাশে একটু প্যাডিং (pr-12) দেওয়া হলো যাতে লেখা আইকনের নিচে না ঢোকে
            className="input input-bordered w-full pr-12 focus:outline-none focus:border-[#F5B027] rounded-md" 
        />
        {/* absolute দিয়ে আইকনটি ডানপাশে ফিক্স করা হলো */}
        <button className="absolute right-1 -mr-1 top-1/2 -translate-y-1/2 p-2 bg-[#F5B027] px-6  hover:text-[red] transition-colors rounded-md">
            <IoSearchOutline size={22} />
        </button>
    </div>
</div>

            {/* right site */}
            <div className="z-10 flex items-center gap-2 relative">
                {/* mobail section searchbar */}
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="input input-bordered w-45 md:hidden" 
                    
                />
                 <button className="absolute right-1 top-1/2 -mr-2 md:hidden -translate-y-1/2 p-2 bg-[#F5B027] px-3  hover:text-[red] transition-colors rounded-md">
                     <IoSearchOutline size={22} />
                </button>
             </div>
  
             <div className='flex gap-1'>
                <div className="border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 cursor-pointer">    
                    <span className='text-base font-medium text-gray-700'>
                        <img src={Acount} className='h-[40px] w-[40px]' alt="" />
                    </span>
                </div>
                <Link className="border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 cursor-pointer">    
                    <span className='text-base font-medium text-gray-700'>
                        <img src={AddToCard} className='h-[40px] w-[40px]' alt="" />
                    </span>
                </Link>
            </div>
            

        </div>
    );
};

export default NavBar;