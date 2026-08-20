import React from 'react';



const LaptopPc = () => {
    return (
      
<div className="flex flex-col lg:flex-row md:flex-row max-w-6xl mx-auto">

  {/* input Filde */}
   <div className="w-full pt-8 px-5 py-5"> 
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl pt-5">
        <h1 className="text-2xl pl-8">Get Help from Experts</h1>
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
         <h3 className="text-base text-[#0D0D0D]">সেবা গ্রহণ করুন</h3>
         <h1 className="lg:text-2xl text-xl font-bold py-2 text-[#242424]">এই সহজ ধাপগুলো অনুসরণ করুন</h1>
           <div className="px-5 py-3">
               <div>
                  <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার সমস্যার বিবরণ দিন</h3>
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আপনি যে সমস্যার সম্মুখীন হচ্ছেন, তার বিস্তারিত তথ্য অনলাইনে অথবা আমাদের সার্ভিস সেন্টারে সশরীরে জানান।</h1>
               </div>
               <div>
                  <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>দর জেনে নিন</h3>
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আমরা আপনাকে ফোন বা সরাসরি সাক্ষাতের মাধ্যমে বিস্তারিত পরিষেবা পরিকল্পনা এবং খরচের একটি প্রাক্কলন প্রদান করব।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>পরিষেবা পরিকল্পনা অনুমোদন করুন</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">প্রস্তাবিত পরিষেবা পরিকল্পনা ও খরচের প্রাক্কলন পর্যালোচনা ও অনুমোদন করুন।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার ডিভাইসটি পাঠান বা নিয়ে আসুন</h3>
                <h3 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আপনার ডিভাইসটি নিরাপদে আমাদের কাছে পাঠান অথবা সরাসরি আমাদের সার্ভিস সেন্টারে নিয়ে আসুন।</h3>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার ডিভাইসটি ফেরত নিন</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">মেরামত সম্পন্ন হলে আমরা দ্রুত আপনার ডিভাইসটি আপনার কাছে ফেরত পাঠাব, অথবা আপনি আমাদের সার্ভিস সেন্টার থেকে এটি সংগ্রহ করতে পারবেন।</h1>
               </div>
           </div>
   </div>
</div>

    );
};

export default LaptopPc;