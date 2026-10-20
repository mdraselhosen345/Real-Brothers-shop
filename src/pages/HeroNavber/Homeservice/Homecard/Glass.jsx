import React from 'react';


const Glass = () => {
    return (
<div className="flex flex-col lg:flex-row md:flex-row max-w-6xl mx-auto pt-10">

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
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আপনার বাসা, অফিস বা প্রতিষ্ঠানের গ্লাস স্থাপন, মেরামত অথবা পরিবর্তনের প্রয়োজনীয়তা সম্পর্কে বিস্তারিত তথ্য অনলাইনে অথবা আমাদের সঙ্গে যোগাযোগের মাধ্যমে জানান।</h1>
               </div>
               <div>
                  <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>দর জেনে নিন</h3>
                  <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আমরা আপনাকে ফোন বা সরাসরি সাক্ষাতের মাধ্যমে গ্লাস ইনস্টলেশন, মেরামত এবং প্রয়োজনীয় উপকরণের খরচসহ বিস্তারিত পরিষেবা পরিকল্পনা ও একটি প্রাক্কলন প্রদান করব।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>পরিষেবা পরিকল্পনা অনুমোদন করুন</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">প্রস্তাবিত গ্লাস ইনস্টলেশন বা মেরামতের পরিকল্পনা এবং খরচের প্রাক্কলন পর্যালোচনা ও অনুমোদন করুন।</h1>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার গ্লাস হোম সার্ভিস গ্রহণ করুন</h3>
                <h3 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">আমাদের হোম সার্ভিসের মাধ্যমে বাসা, অফিস বা প্রতিষ্ঠানে নতুন গ্লাস স্থাপন, পুরোনো গ্লাস পরিবর্তন এবং প্রয়োজনীয় গ্লাস মেরামতের সেবা গ্রহণ করুন।</h3>
               </div>
               <div>
                <h3 className='lg:text-lg text-base  font-bold text-[#525252]'>আপনার গ্লাস সার্ভিস সম্পন্ন করুন</h3>
                <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">কাজ সম্পন্ন হলে গ্লাসের স্থাপন, ফিটিং ও নিরাপত্তা পরীক্ষা করে বুঝে নিন। আমরা আপনার প্রয়োজন অনুযায়ী গ্লাস ইনস্টলেশন ও মেরামতের কাজ সম্পন্ন করব।</h1>
               </div>
           </div>
   </div>
</div>
    );
};

export default Glass;