import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

import PCService from "../../../assets/ServiceBackground/PcService.png"
import CCTVBac from '../../../assets/ServiceBackground/CCTVBAC.png'
import Electronic from '../../../assets/ServiceBackground/ElectronicService.png'

const Homeservice = () => {
    const [homeservice, setHomeservice] = useState([])

    useEffect(() => {
        fetch("/homeservice.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setHomeservice(data);
        })
        .catch(error => console.error(error));
    }, [])

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

        </Carousel>


   

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 max-w-6xl mx-auto px-2 py-2">
     {/* pc service */}
    <Link to="/LaptopPc" className="w-full bg-[#B5B5B5] shadow-md rounded-xl">
      <div className="">
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-xl font-bold py-2 px-3">
            ডেস্কটপ ও ল্যাপটপ মেরামত 
          </h2>
        </div>
            <div>
                <ul className="text-[10px] md:text-base pl-5 py-3">
                    <li className="text-[10px] md:text-base">উইন্ডোজ ও প্রয়োজনীয় সফটওয়্যার সেটআপ</li>
                    <li className="text-[10px] md:text-base">ভাইরাস দূর করা এবং অ্যান্টিভাইরাস সেটআপ</li>
                    <li className="text-[10px] md:text-base">স্লো কম্পিউটার ফাস্ট করা</li>
                    <li className="text-[10px] md:text-base">ইন্টারনেট ও ওয়াই-ফাই সংযোগ সেটআপ</li>
                    <li className="text-[10px] md:text-base">নতুন কম্পিউটার অ্যাসেম্বলিং ও যন্ত্রাংশ বিক্রি যদি থাকে</li>
                 
                </ul>
            </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">
           book now
          </button>
        </div>
      </div>
    </Link>
 {/* cctv service */}
    <Link to="/Cctv" className="w-full bg-[#B5B5B5] shadow-md rounded-xl">
      <div className="">
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-xl font-bold py-2 px-3">
            ডেস্কটপ ও ল্যাপটপ মেরামত 
          </h2>
        </div>
            <div>
                <ul className="text-[10px] md:text-base pl-6 py-3">
                    <li className="text-[10px] md:text-base">সিসিটিভি ক্যামেরা ও ডিভিআর ইনস্টলেশন</li>
                    <li className="text-[10px] md:text-base">ক্যামেরা মেরামত ও পার্টস পরিবর্তন</li>
                    <li className="text-[10px] md:text-base">মোবাইলে লাইভ ভিউ ও আইপি সেটআপ</li>
                    <li className="text-[10px] md:text-base">পাওয়ার সাপ্লাই ও ক্যাবল প্রবলেম সলিউশন</li>
                    <li className="text-[10px] md:text-base">ভিডিও রেকর্ড ও হার্ডডিস্ক প্রবলেম ফিক্স</li>
                    <li className="text-[10px] md:text-base">রাউটার ও নেটওয়ার্ক কনফিগারেশন</li>
                    <li className="text-[10px] md:text-base">পাসওয়ার্ড রিসেট ও ডিভিআর আনলক</li>
                    <li className="text-[10px] md:text-base">নতুন সিসিটিভি প্যাকেজ ও পার্টস বিক্রি</li>
                 
                </ul>
            </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">
           book now
          </button>
        </div>
      </div>
    </Link>
  {/* electic service */}
    <Link to='/Electronic' className="w-full bg-[#B5B5B5] shadow-md rounded-xl">
      <div className="">
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-xl font-bold py-2 px-3">
            ডেস্কটপ ও ল্যাপটপ মেরামত 
          </h2>
        </div>
            <div>
                <ul className="text-[10px] md:text-base pl-6 py-3">
                    <li className="text-[10px] md:text-base">লাইট, ফ্যান ও সুইচ বোর্ড ফিটিং/মেরামত</li>
                    <li className="text-[10px] md:text-base">হাউস ওয়্যারিং ও পাওয়ার শর্ট-সার্কিট ফিক্স</li>
                    <li className="text-[10px] md:text-base">এলইডি ও স্মার্ট টিভি মেরামত ও দেয়ালে ফিটিং</li>
                    <li className="text-[10px] md:text-base">ফ্যান মোটর রিকয়েলিং ও ক্যাপাসিটর পরিবর্তন</li>
                    <li className="text-[10px] md:text-base">অরিজিনাল স্পেয়ার পার্টস পরিবর্তন</li>
                 
                </ul>
            </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">
           book now
          </button>
        </div>
      </div>
    </Link>
{/*  */}
    <div className=" w-full shadow-md bg-[#B5B5B5] rounded-xl">
      <div className="">
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-xl font-bold py-2 px-3">
            ডেস্কটপ ও ল্যাপটপ মেরামত 
          </h2>
        </div>
            <div>
                <ul className="text-[10px] md:text-base pl-6 py-3">
                    <li className="text-[10px] md:text-base">📀 উইন্ডোজ ও প্রয়োজনীয় সফটওয়্যার সেটআপ (Windows & Software Setup)</li>
                    <li className="text-[10px] md:text-base">🦠 ভাইরাস দূর করা এবং অ্যান্টিভাইরাস সেটআপ (Virus Removal)</li>
                    <li className="text-[10px] md:text-base">🚀 স্লো কম্পিউটার ফাস্ট করা (PC Speed Up)</li>
                    <li className="text-[10px] md:text-base">🌐 ইন্টারনেট ও ওয়াই-ফাই সংযোগ সেটআপ (Internet/Wi-Fi Setup)</li>
                    <li className="text-[10px] md:text-base">🛠️ নতুন কম্পিউটার অ্যাসেম্বলিং ও যন্ত্রাংশ বিক্রি (PC Assembly & Parts Sale - যদি থাকে)</li>
                 
                </ul>
            </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">
           book now
          </button>
        </div>
      </div>
    </div>

</div>
          </>
    );
};

export default Homeservice;