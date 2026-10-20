import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PCService from "../../../assets/ServiceBackground/PcService.png"
import CCTVBac from '../../../assets/ServiceBackground/CCTVBAC.png'
import Electronic from '../../../assets/ServiceBackground/ElectronicService.png'


const Servecing = () => {
    return (
        <>
             <Carousel 
              autoPlay 
              infiniteLoop 
              showThumbs={false}
              
         >
        <div>
             <img src={PCService} className="w-full h-[350px] object-cover" />
        </div>
        <div>
             <img src={Electronic} className="w-full h-[350px] object-cover" />
        </div>
         <div>
             <img src={CCTVBac} className="w-full h-[350px] object-cover" />
         </div>
         <div>
            <img src={Electronic} className="w-full h-[350px] object-cover" />
         </div>

</Carousel>
   {/* All Service */}
    {/* <div className="max-w-7xl mx-auto">
                 <div className=''>
            <div className='grid lg:grid-cols-10 lg:grid-cols-8 grid-cols-6 justify-between lg:py-6 lg-px-8 lg:py-4 lg-px-6 py-2 px-3 gap-2'>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={Mobail} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Mobile Phone</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={PC} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Desktop</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={TV} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Smart Tv</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={AirFan} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Ceiling Fan</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={RiceCooker} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Rice Cooker</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={DeskLamp} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Desk Lamp</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={Speaker} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Speaker</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={Teapot} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Teapot</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={Fan} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Table Fan</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={Light} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Light</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={WeightScale} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Weight-Scale</h1>
                </div>
                <div className='bg-[#C4C4C4]  shadow-2xl rounded-lg h-[90px]'>
                     <div className="flex justify-center items-center px-2 py-2">
                         <img src={Laptop} className='lg:h-[40px] lg:w-[40px] md:h-[35px] md:w-[35px] w-15 h-15' alt="" />
                     </div>
                    <h1 className='lg:text-base md:text-base text-center text-[8px] font-bold'>Laptop</h1>
                </div>
    


            </div>
        </div>
    </div>
 */}


<div className="flex flex-col lg:flex-row md:flex-row max-w-6xl mx-auto">

  {/* input Filde */}
   <div className="w-full pt-18 px-5 py-5"> 
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl pt-5">
        <h1 className="text-2xl pl-8">সেবা গ্রহণ করুন</h1>
       <div className="card-body">
  <fieldset className="fieldset w-full max-w-xl mx-auto">

    {/* Name & Phone */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>
        <label className="label">Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Name"
        />
      </div>

      <div>
        <label className="label">Phone Number</label>
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Full Number"
        />
      </div>

    </div>

    {/* Email */}
    <div>
      <label className="label">Email</label>
      <input
        type="email"
        className="input input-bordered w-full"
        placeholder="Email"
      />
    </div>

    {/* Service */}
    <div>
      <label className="label">The Best Service For You</label>
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Service Name"
      />
    </div>

    {/* Issue */}
    <div>
      <label className="label">A little about the issue</label>
      <textarea
        className="textarea textarea-bordered w-full h-28"
        placeholder="Write here..."
      ></textarea>
    </div>

    {/* Button */}
    <button className="btn btn-neutral w-full mt-4">
      Login
    </button>

  </fieldset>
</div>
    </div>
  
  </div>

  {/* Document filde */}
    <div className="w-full px-8 py-5"> 
         <h3 className="text-base text-[#0D0D0D]">আপনার সার্ভিসিং সমস্যার সহজ ও নির্ভরযোগ্য সমাধান</h3>
         <h1 className="lg:text-lg text-lg font-bold py-2 text-[#242424]">আমরা আপনার সুবিধাকে গুরুত্ব দিয়ে বাসায় সার্ভিস প্রদান এবং ডিভাইস সংগ্রহ থেকে শুরু করে মেরামত ও হোম ডেলিভারি পর্যন্ত সেবা দেওয়ার চেষ্টা করি।</h1>
           <div className="px-5 py-3">
               <div>
                  <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>১. আপনার সমস্যার বিবরণ দিন</h3>
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আপনার ডিভাইস বা বাসার সার্ভিসিং সমস্যার বিস্তারিত আমাদের জানান। অনলাইনে সার্ভিস রিকোয়েস্ট জমা দিন অথবা সরাসরি আমাদের সার্ভিস সেন্টারে যোগাযোগ করুন।</h1>
               </div>
               <div>
                  <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>২. সার্ভিসের খরচ জেনে নিন</h3>
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আপনার সমস্যার ধরন অনুযায়ী আমরা প্রয়োজনীয় সার্ভিস, সম্ভাব্য খরচ এবং উপযুক্ত সমাধান সম্পর্কে আপনাকে বিস্তারিত জানাব।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>৩. বাসা থেকে ডিভাইস সংগ্রহ</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">ডিভাইস নিয়ে বাইরে যাওয়ার ঝামেলা এড়াতে আপনার সুবিধা অনুযায়ী আমরা বাসা থেকে ডিভাইস সংগ্রহ করে আমাদের সার্ভিস সেন্টারে নিয়ে আসব।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>৪. মেরামতের পর হোম ডেলিভারি</h3>
                <h3 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">মেরামতের কাজ সম্পন্ন হলে আমরা আপনার ডিভাইসটি নিরাপদে আবার আপনার বাসায় পৌঁছে দেব। ফলে সার্ভিস সেন্টারে আসা-যাওয়ার ঝামেলা ছাড়াই ঘরে বসে সার্ভিস গ্রহণ করতে পারবেন।</h3>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>৫. আপনার সন্তুষ্টিই আমাদের সাফল্য</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আপনার সন্তুষ্টিই আমাদের প্রধান লক্ষ্য। মানসম্মত সার্ভিস, আন্তরিক সহযোগিতা ও নির্ভরযোগ্য সমাধানের মাধ্যমে আমরা আপনার আস্থা অর্জনে প্রতিশ্রুতিবদ্ধ।</h1>
               </div>
           </div>
   </div>
</div>

    </>


    );
};

export default Servecing;