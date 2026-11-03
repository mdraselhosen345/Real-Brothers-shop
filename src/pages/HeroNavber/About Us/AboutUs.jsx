import React from 'react';

const AboutUs = () => {
    return (
         <div className="max-w-5xl mx-auto">
            <div className="py-10">
                 <h1 className="text-2xl font-bold py-2 px-2">আমাদের সম্পর্কে</h1>
                <h3 className="text-lg py-2 px-3">আমরা একটি আধুনিক ও নির্ভরযোগ্য Home Service, Servicing Center এবং Electronics Shop। আমাদের লক্ষ্য হলো গ্রাহকের প্রয়োজনীয় সেবা ও পণ্য একটি জায়গা থেকেই সহজে প্রদান করা।</h3>

                <h3 className="text-lg py-2 px-3">আপনার বাসা বা অফিসে প্রয়োজনীয় PC, Laptop, CCTV, Electrical এবং Glass Service থেকে শুরু করে আমাদের Servicing Center-এ Hardware & Software Repair, Troubleshooting এবং বিভিন্ন ধরনের Technical Support প্রদান করা হয়।</h3>

                <h3 className="text-lg py-2 px-3">এর পাশাপাশি আমাদের Electronics Shop-এ বিভিন্ন ধরনের Computer Accessories, Electronic Products, Spare Parts এবং প্রয়োজনীয় যন্ত্রাংশ পাওয়া যায়। অর্থাৎ, আপনার কোনো ডিভাইস নষ্ট হলে শুধু Repair নয়, প্রয়োজন হলে প্রয়োজনীয় Parts বা নতুন Product-ও আমাদের কাছ থেকে নিতে পারবেন।</h3>
            </div>

            <div>
                <h1 className="text-2xl px-3 py-2">আমাদের প্রধান সেবাসমূহ</h1>
                <div className="flex justify-between py-2 px-2 gap-2">
                    <div className="">
                         <h1 className="font-bold md:text-xl text-lg" >Home Service</h1>
                         <ul className="md:text-base text-[10px] px-1">
                            <li>PC & Laptop Service</li>
                            <li>CCTV Installation & Service</li>
                            <li>Electrical Service</li>
                            <li>Networking Service</li>
                            <li>Software & Hardware Support</li>
                         </ul>
                    </div>
                    <div className="">
                         <h1 className="font-bold md:text-xl text-lg" >Home Service</h1>
                         <ul className="md:text-base text-[10px] px-1">
                            <li>Computer & Laptop Repair</li>
                            <li>Hardware Troubleshooting</li>
                            <li>Windows & Software Setup</li>
                            <li>CCTV DVR/NVR Service</li>
                            <li>Printer & Networking Support</li>
                         </ul>
                    </div>
                    <div className="">
                         <h1 className="font-bold md:text-xl text-lg" >Home Service</h1>
                         <ul className="md:text-base text-[10px] px-1">
                            <li>Computer & Laptop Accessories</li>
                            <li>Keyboard & Mouse</li>
                            <li>অন্যান্য প্রয়োজনীয় Electronic Parts</li>
                            <li>CCTV Camera & Accessories</li>
                            <li>Electrical Products</li>
                         </ul>
                    </div>
                    <div className="">
                         <h1 className="font-bold md:text-xl text-lg" >Home Service</h1>
                         <ul className="md:text-base text-[10px] px-1">
                            <li>Home Service সুবিধা</li>
                            <li>নিজস্ব Servicing Center</li>
                            <li>প্রয়োজনীয় Parts ও Products একই জায়গায়</li>
                            <li>সাশ্রয়ী মূল্য</li>
                            <li>দ্রুত ও নির্ভরযোগ্য Service</li>
                         </ul>
                    </div>

                </div>
                <div className="py-2">
                    <h1 className="text-2xl font-bold py-1 px-2">আমাদের লক্ষ্য</h1>
                    <h3 className="text-lg py-1 px-3">আমাদের লক্ষ্য হলো Service, Repair এবং Product—সবকিছু একটি নির্ভরযোগ্য জায়গা থেকে প্রদান করা। আমরা চাই, গ্রাহককে একটি সমস্যার জন্য বিভিন্ন জায়গায় যেতে না হয়। প্রয়োজন অনুযায়ী Home Service, Servicing Center এবং Electronics Shop—সব ধরনের সুবিধা আমরা একসাথে দিতে চাই।</h3>
                    <h4 className="text-xl font-semibold py-1 px-3">আপনার প্রয়োজন, আমাদের সমাধান</h4>
                    <h4 className="text-lg py-1 px-3">Service নিতে চান, Device Repair করতে চান, নাকি প্রয়োজনীয় Electronics Product কিনতে চান?
                       আমাদের সাথে যোগাযোগ করুন। আমরা আপনার প্রয়োজন অনুযায়ী দ্রুত, নির্ভরযোগ্য এবং পেশাদার সেবা দেওয়ার চেষ্টা করব।</h4>
                </div>
            </div>
         </div>
    );
};

export default AboutUs;