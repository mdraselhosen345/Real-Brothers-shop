import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

import PCService from "../../../assets/ServiceBackground/PcService.png"
import CCTVBac from '../../../assets/ServiceBackground/CCTVBAC.png'
import Electronic from '../../../assets/ServiceBackground/ElectronicService.png'

// card home service 
import PcHomeservice from "../../../assets/HomeService/PcHomeservice.png";
import ElectricHome from "../../../assets/HomeService/ElectricHome.png";
import CctvHome from "../../../assets/HomeService/CctvHome.png";
import GlassHome from "../../../assets/HomeService/GlassHome.png";

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
    <Link to="/LaptopPc" className="w-full bg-[#B5B5B5] shadow-md rounded-xl ">
      <div className="rounded-xl ">
        <div>
          <img src={PcHomeservice} alt="" />
        </div>
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-lg font-bold px-3">
            ডেস্কটপ ও ল্যাপটপ মেরামত 
          </h2>
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
        <div>
            <img src={CctvHome} alt="" />
        </div>
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-xm font-bold px-2">
            CCTV ক্যামেরা স্থাপন ও মেরামত
          </h2>
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
        <div>
          <img src={ElectricHome} alt="" />
        </div>
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-lg font-bold px-2">
            বৈদ্যুতিক যন্ত্রপাতি সার্ভিসিং
          </h2>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">
           book now
          </button>
        </div>
      </div>
    </Link>
{/* Glass service */}
<Link to='/Glass' className=" w-full shadow-md bg-[#B5B5B5] rounded-xl">
    <div className="">
      <div className="">
        <div>
          <img src={GlassHome} alt="" />
        </div>
        <div className="flex justify-between items-start mt-2">
          <h2 className="text-lg font-bold px-3">
           Glass ইনস্টলেশন ও মেরামত
          </h2>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">
           book now
          </button>
        </div>
      </div>
    </div>
   </Link>
</div>

          </>
    );
};

export default Homeservice;