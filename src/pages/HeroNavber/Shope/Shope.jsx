import React, { useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";

const Shope = () => {
    const [shope, setShope] = useState([]);

    //    useEffect(() => {
    //     fetch("/Shope.json")
    //     .then(res => res.json())
        
    //     .then(data => setShope(data));
    //    }, []);

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
         <div>
            <h1></h1>
                            <div className='grid grid-cols-3 md:grid-cols-6 lg:rid-cols-7 gap-4 px-8 py-5'>
                                {shope.map((item, index) => (
                                    <div key={index} className='shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 rounded-xl bg-[#DBDBDB] p-2 flex flex-col items-center justify-between'>
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] object-contain border-2"
                                                alt="Category"
                                            />
                                        </div>
                                        <div className='pt-1'>
                                                <div>
                                                    <h1 className='text-md font-bold'>{item.title}</h1>
                                                </div>
                                                 
                                                <div className='flex justify-between'>
<div className="flex items-center gap-1 text-yellow-500">
  <CiStar className="text-xl" />
  <span className="text-gray-700 font-medium">
    {item.rating}
  </span>
</div>
                                                    <h3>{item.reviews}</h3>
                                                </div>
                                                <div>
                                                    <h1><span className='text-2xl'>৳</span> {item.price}</h1>
                                                </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
         </div>
    );
};

export default Shope;