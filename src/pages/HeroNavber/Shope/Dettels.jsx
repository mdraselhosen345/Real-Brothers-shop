import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FanImgae from "../../../assets/fan.png"
import Logo from '../../../components/Logo/Logo';
import Hero from '../../Shared/Hero/Hero';


const Dettels = () => {
    const [product, setProduct] = useState(null);


    const { id } = useParams();

    useEffect(() => {
        fetch("/shope.json")
         .then(res => res.json())
         .then(data => {
            const singleProlduct = data.find(
                (item) => item.id === parseInt(id)
            );
            setProduct(singleProlduct);
         })
         .catch((error) => console.error(error));
    }, [id]);

      if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

    return (
           <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Left Side */}
        <div className="lg:w-1/2 border rounded-xl p-5">
           
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 space-y-4">

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>
<div className="flex gap-5">
  <div className="border px-5 py-2 rounded-lg bg-[#7393B3]">
    Brand: <span>{product.brand}</span>
  </div>

  <div className="border px-3 py-2 rounded-lg bg-[#7393B3]">
    Category: <span>{product.category}</span>
  </div>
</div>
          <p className="text-yellow-500 font-semibold">
            ⭐ {product.rating} ({product.reviews} Reviews)
          </p>

            <div className="space-y-2">
  {/* Offer Badge */}
  <span className="inline-block bg-red-400 text-white text-xs font-semibold px-2 py-1 rounded">
   {product.discount}%OFF
  </span>

  {/* Price */}
  <div className="flex items-center gap-3">
    <h2 className="text-2xl font-bold text-[#E35335]">
      ৳ {product.price}
    </h2>

    <p className="text-gray-500 line-through">
      ৳ {product.oldPrice}
    </p>
  </div>
</div>

          <p className="text-gray-600">
            <p>{product.features}</p>
          </p>

<div className="flex gap-4 mt-6 w-full">
  <button
   className="btn flex-1 bg-blue-600 hover:bg-blue-700 text-white border-none rounded-lg">
    🛒 Add to Cart
  </button>

  <button className="btn flex-1 bg-orange-500 hover:bg-orange-600 text-white border-none rounded-lg">
    ⚡ Buy Now
  </button>
</div>

        </div>
      </div>
        <div className='max-w-3xl mx-auto pt-5'>
         
                    <div className='mt-3 mb-5'>
                    <ul>
                         <li className='text-lg font-bold text-[#525252] border-1 pl-10'>warranty : <span className='text-base font-normal text-[#818589]  pl-5'> {product.warranty}</span></li>
                        <li className='text-lg font-bold text-[#525252] border-1 pl-10'>Delivery : <span className='text-base font-normal text-[#818589] pl-5'>{product.delivery}</span></li>
                        <li className='text-lg font-bold text-[#525252] border-1 pl-10'>Details    : <span className='text-base font-normal text-[#818589] pl-5'>   {product.details}</span></li>                       
                    </ul>
                     </div>

            <h1 className='text-2xl font-bold'>specifications</h1>
    <table className="table w-full border mt-2">
  <tbody>
    {Object.entries(product.specifications).map(([key, value]) => (
      <tr key={key}>
        <td className="font-bold">{key}</td>
        <td>{value}</td>
      </tr>
    ))}
  </tbody>
</table>
        <div className='mt-7'>
            <p className='text-xl font-bold'>Description</p>
            <p className='text-base  mt-1'>{product.description}</p>
        </div>
        </div>  
    </div>
    );
};

export default Dettels;
