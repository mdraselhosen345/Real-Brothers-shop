import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Router from "../../../assets/router.png";
import { Link } from 'react-router';

const Categroy = () => {
    // ক্যাটাগরি ডেটা লিস্ট
    const categories = Array(6).fill({
        img: Router,
        title: "সার্ভিস বুক করুন"
    });


    return (
        <div className='flex flex-col lg:flex-row justify-between gap-8 p-4 md:p-6 max-w-7xl mx-auto'>
            
            {/* ক্যাটাগরি সেকশন */}
            <div className='w-full'>
                <h1 className='text-xl sm:text-2xl font-bold py-4 sm:py-6'>জনপ্রিয় ক্যাটাগরি</h1>
                <Link to="Shope" className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4'>
                    {categories.map((item, index) => (
                        <div key={index} className='shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 rounded-xl bg-[#DBDBDB] p-4 flex flex-col items-center justify-between'>
                            <div className="flex items-center justify-center">
                                <img
                                    src={item.img}
                                    className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain"
                                    alt="Category"
                                />
                            </div>
                            <div className='flex items-center gap-1 mt-3 cursor-pointer group'>
                                <button className='font-semibold text-[#4169E1] text-sm sm:text-base'>
                                    {item.title}
                                </button>        
                                <FaArrowRight className='text-[#4169E1] group-hover:translate-x-1 transition-transform' size={18}/>
                            </div>
                        </div>
                    ))}
                </Link>
            </div>

            {/* সার্ভিস সেকশন */}
            <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                
                {/* সার্ভিসিং সেন্টার */}
                <div>
                    <h1 className='text-xl sm:text-2xl font-bold py-4 sm:py-6'>সার্ভিসিং সেন্টার</h1>
                   
                     
                            <Link to="/Servecing" className='shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl bg-[#DBDBDB] p-4 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-lg sm:text-xl font-bold'>মোবাইল রিপেয়ার</h2>
                                    <p className='text-xs sm:text-sm py-2 text-gray-700'>অরিজিনাল যন্ত্রাংশ দিয়ে মোবাইল মেরামত।</p>
                                </div>
                                <div className='flex items-center gap-1 mt-2 cursor-pointer group'>
                                    <button className='font-semibold text-[#4169E1] text-sm'>
                                       সার্ভিস বুক করুন
                                    </button>        
                                    <FaArrowRight className='text-[#4169E1] group-hover:translate-x-1 transition-transform' size={16}/>
                                </div>
                            </Link>
 
             
                </div>

                {/* হোম সার্ভিস */}
                <div>
                    <h1 className='text-xl sm:text-2xl font-bold py-2 sm:py-4'>হোম সার্ভিস</h1>
                    
                       
                            <Link to="/" className='shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl bg-[#DBDBDB] p-4 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-lg sm:text-xl font-bold'>মোবাইল রিপেয়ার</h2>
                                    <p className='text-xs sm:text-sm py-2 text-gray-700'>অরিজিনাল যন্ত্রাংশ দিয়ে মোবাইল মেরামত।</p>
                                </div>
                                <div className='flex items-center gap-1 mt-2 cursor-pointer group'>
                                    <button className='font-semibold text-[#4169E1] text-sm'>
                                       সার্ভিস বুক করুন
                                    </button>        
                                    <FaArrowRight className='text-[#4169E1] group-hover:translate-x-1 transition-transform' size={16}/>
                                </div>
                            </Link>

                       
                
                </div>

            </div>
        </div>
    );
};

export default Categroy;