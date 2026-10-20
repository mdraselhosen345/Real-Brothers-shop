import React from 'react';


const Cctv = () => {
    return (
<div className="flex flex-col lg:flex-row md:flex-row max-w-6xl mx-auto pt-10">

  {/* input Filde */}
   <div className="w-full pt-8 px-5 py-5"> 
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
         <h3 className="text-base text-[#0D0D0D]">এই সহজ ধাপগুলো অনুসরণ করুন</h3>
         <h1 className="lg:text-2xl text-xl font-bold py-2 text-[#242424]">এই সহজ ধাপগুলো অনুসরণ করুন</h1>
           <div className="px-5 py-3">
               <div>
                  <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার সমস্যার বিবরণ দিন</h3>
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আপনার CCTV ক্যামেরার সমস্যা, নতুন ক্যামেরা ইনস্টলেশন অথবা সেটআপের প্রয়োজনীয়তা সম্পর্কে অনলাইনে অথবা আমাদের সার্ভিস সেন্টারে সশরীরে জানান।</h1>
               </div>
               <div>
                  <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>দর জেনে নিন</h3>
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আমরা আপনাকে ফোন বা সরাসরি সাক্ষাতের মাধ্যমে CCTV ইনস্টলেশন, মেরামত এবং প্রয়োজনীয় সরঞ্জামের খরচ সম্পর্কে বিস্তারিত জানাব।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>পরিষেবা পরিকল্পনা অনুমোদন করুন</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">প্রস্তাবিত CCTV সার্ভিস পরিকল্পনা ও খরচের প্রাক্কলন পর্যালোচনা করে অনুমোদন করুন।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার CCTV সার্ভিস গ্রহণ করুন</h3>
                <h3 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">নতুন CCTV ক্যামেরা ইনস্টলেশন, ক্যামেরা মেরামত, DVR/NVR সেটআপ অথবা মোবাইলে লাইভ ভিউ কনফিগারেশনের জন্য আমাদের সেবা গ্রহণ করুন।</h3>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার CCTV সার্ভিস সম্পন্ন করুন</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">কাজ সম্পন্ন হলে আপনার CCTV ক্যামেরা ও সংযোগ পরীক্ষা করে বুঝে নিন এবং প্রয়োজনীয় ব্যবহারবিধি জেনে নিন।</h1>
               </div>
           </div>
   </div>
</div>
    );
};

export default Cctv;