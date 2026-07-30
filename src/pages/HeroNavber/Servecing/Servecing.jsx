import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PCService from "../../../assets/ServiceBackground/PcService.png"
import CCTVBac from '../../../assets/ServiceBackground/CCTVBAC.png'
import Electronic from '../../../assets/ServiceBackground/ElectronicService.png'

import Delivery from "../../../assets/Brands/delivery.png"
import Technician from "../../../assets/Brands/technician.png"
import Original from "../../../assets/Brands/original.png"
import Pyment from "../../../assets/Brands/pyment.png"


const Servecing = () => {
    return (
        <>
             <Carousel 
              autoPlay 
              infiniteLoop 
              showThumbs={false}
         >
        <div>
             <img src={PCService} className="w-full h-[450px] object-cover" />
        </div>
        <div>
             <img src={Electronic} className="w-full h-[450px] object-cover" />
        </div>
         <div>
             <img src={CCTVBac} className="w-full h-[450px] object-cover" />
         </div>
         <div>
            <img src={Electronic} className="w-full h-[450px] object-cover" />
         </div>

</Carousel>
    <div className="max-w-6xl mx-auto border-2">
                 <div className=''>
            <div className='grid lg:grid-cols-4 grid-cols-2 justify-between py-6 px-8 gap-5'>
                <div className='flex gap-1 justify-center items-center bg-[#FF7F50] px-8 py-4 shadow-2xl rounded-xl'>
                     <img src={Delivery} className='h-[40px] w-[40px]' alt="" />
                    <h1 className='lg:text-base md:text-base text-[10px] font-bold'>সারাদেশে ডেলিভারি</h1>
                </div>
                <div className='flex gap-1 justify-center items-center bg-[#FF7F50] px-8 py-4 shadow-2xl rounded-xl'>
                    <img src={Technician} className='h-[40px] w-[40px]' alt="" />
                    <h1 className='lg:text-base md:text-base text-[10px] font-bold '>অভিজ্ঞ টেকনিশিয়ান</h1>
                </div>
                <div className='flex gap-1 justify-center items-center px-8 py-4 bg-[#FF7F50] shadow-2xl rounded-xl'>
                    <img src={Original} className='h-[40px] w-[40px]' alt="" />
                    <h1 className='lg:text-base md:text-base text-[10px] font-bold '>অরিজিনাল যন্ত্রাংশ</h1>
                </div>
                <div className='flex gap-1 justify-center items-center px-8 py-4 bg-[#FF7F50] shadow-2xl rounded-xl'>
                    <img src={Pyment} className='h-[40px] w-[40px]' alt="" />
                    <h1 className='lg:text-base md:text-base text-[10px] font-bold '>সহজ পেমেন্ট</h1>
                </div>
            </div>
        </div>
    </div>
     <div className="flex max-w-6xl mx-auto">

   <div className="w-full h-[550px] border-2 pt-8 px-5 py-5"> 
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <h1 className="text-2xl pl-8">Get Help from Experts</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <div className="flex gap-4">
            <div>    
                <label className="label">Name</label>   
                <input type="name" className="input" placeholder="Name" />
           </div>

          
          <div >
            <label className="label">Phone Number</label>
            <input type="number" className="input" placeholder="Full Number" />
          </div>
        </div>
          


          <label className="label">Email</label>
          <input type="email" className="input input-bordered w-[505px]" placeholder="Email" />

          <label className="label">The Best Service For You</label>
          <input type="name" className="input input-bordered w-[505px]" placeholder="Service Name" />

          <label className="label">A little about the issue</label>
         <textarea
               type="text"
               className="textarea textarea-bordered w-[505px] h-28 p-3"
               placeholder="Write here..."
         ></textarea>
          
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  
  </div>
        <div className="w-full h-[550px] border-2"> 

        </div>
    </div>

    </>


    );
};

export default Servecing;