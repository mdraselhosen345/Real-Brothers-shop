import React, { useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Shope = () => {
    const [shope, setShope] = useState([]);

    useEffect(() => {
  fetch("/shope.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setShope(data);
    })
    .catch(error => console.error(error));
}, []);

    return (
         <div className='grid grid-cols-2 md:grid-cols-6 lg:rid-cols-7 gap-4 px-4 py-4'>
        {shope.map((item, index) => (
         <Link key={item.id}  to={`/shope/${item.id}`}>
                              
                                    <div className='shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 rounded-lg bg-[#DBDBDB] p-2 flex flex-col items-center justify-between'>
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] object-contain border-2"
                                                alt="Category"
                                            />
                                        </div>
                                        <div className='pt-1'>
                                                <div>
                                                    <h1 className='text-[14px] font-bold'>{item.title}</h1>
                                                </div>
                                                 
                                                <div className='flex justify-between px-3 py-1'>
                                                      <div className="flex gap-1 text-yellow-500">
                                                            <CiStar className="text-xl" />
                                                            <span className="text-gray-700 text-[12px] font-medium">
                                                              {item.rating}
                                                            </span>
                                                       </div>
                                                   <h3 className='font-semibold text-[14px]'>({item.reviews})</h3>
                                                </div>
                                                <div className='pt-2 text-[#FF0000] text-[16px] pl-4'>
                                                    <h1 className='font-bold'><span className='text-2xl font-bold'>৳</span> {item.price}</h1>
                                                </div>
                                                <div className='text-center'>
                                                    <button className='btn btn-active btn-primary px-8 text-[12px] '>বিস্তারিত দেখুন</button>
                                                </div>
                                        </div>
                                    </div>
                               
                           
         </Link>
          ))}
           </div>
    );
};

export default Shope;