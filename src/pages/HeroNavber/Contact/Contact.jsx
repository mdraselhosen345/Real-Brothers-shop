// import React from 'react';
// import Complne from "../../../assets/complne.png";
// import  online  from "../../../assets/online-Service.png";
// import { Link } from 'react-router';
// import { FaPhoneSquareAlt } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { ImFacebook2 } from "react-icons/im";

// const Contact = () => {
//     return (
//          <div className="max-w-5xl mx-auto py-10">
//              <div className="flex flex-col lg:flex-row px-5 gap-5">
//                    <div className="w-[400px]">

//                       <div className="rounded-md bg-[#C4C4C4] w-96 shadow-md px-5 py-3">
//                         <h3 className='pl-10 text-base'>Contact Number:</h3>
//                         <h2 className="text-xl font-bold flex gap-3"><FaPhoneSquareAlt size={30} className=''/>01782299570</h2>
//                       </div>
                      
//                       <div className="rounded-md bg-[#C4C4C4] w-96 shadow-md px-5 py-3 mt-3">
//                         <h3 className='pl-10 text-base'>Whatsapp Number:</h3>
//                         <h2 className="text-xl font-bold flex gap-3"><FaWhatsappSquare size={30} className=''/>01782299570</h2>
//                       </div>
                      
//                       <div className="rounded-md bg-[#C4C4C4] w-96 shadow-md px-5 py-3 mt-3 flex">
//                        <a className='flex gap-5 text-blue-600'
//                              href="https://www.facebook.com/profile.php?id=61595514920705"
//                              target="_blank"
//                              rel="noopener noreferrer"
//                          >
//                                 <ImFacebook2 size={30}/> Facebook Page
//                         </a>
//                       </div>
     
//                    </div>

//                    <div className="w-full flex gap-6">
//                           <div className="rounded-md bg-[#C4C4C4] w-86 h-40 shadow-md px-4 py-2">
//                                 <div className="flex items-center justify-center pt-4">
//                                     <div className="h-[100px] w-[100px]">
//                                         <img src={Complne} alt="" />
//                                     </div>

//                                     <div className="pt-5 px-3">
//                                         <h3 className="text-base font-bold">Talk to Export</h3>
//                                         <h2 className="md:text-xl text-base font-bold">Get Online Support</h2>
//                                         <Link to="/Complne" className="text-blue-600 font-semibold hover:underline">
//                                            Request Support
//                                         </Link>
//                                     </div>
                                  
//                                 </div>
//                           </div>
//                           <div className="rounded-md bg-[#C4C4C4] w-86 h-40 shadow-md px-4 py-2">
//                                  <div className="flex items-center justify-center pt-4">
//                                     <div className="h-[100px] w-[100px]">
//                                         <img src={online} alt="" />
//                                     </div>

//                                     <div className="pt-2 px-3">
//                                         <h3 className="text-base font-bold">Share Your Experience</h3>
//                                         <h2 className="md:text-xl text-base font-bold">Any Complain On Us?</h2>
//                                         <Link to="/Complne" className="text-blue-600 font-semibold hover:underline">
//                                            Raise a Complaint
//                                         </Link>
//                                     </div>
                                  
//                                 </div>
//                           </div>
//                    </div>
//              </div>

//              <div className="flex flex-col md:flex-row justify-center gap-5 pt-10">

//   {/* Home Address */}
//   <div className="w-full md:w-1/3 rounded-md bg-[#C4C4C4] shadow-md px-4 py-5">
//     <h2 className="text-xl md:text-2xl font-bold py-3">
//       Home Address
//     </h2>

//     <p className="text-base md:text-lg py-2">
//       Khangan Bajar, Khagan, Birulia, Savar, Dhaka
//     </p>

//     <h3 className="text-base font-semibold py-2">
//       Get Direction
//     </h3>

//     <p className="text-sm">5 PM - 10 PM</p>
//     <p className="text-sm">Available All Day</p>
//   </div>

//   {/* Shop Location */}
//   <div className="w-full md:w-2/3 rounded-md bg-[#C4C4C4] shadow-md px-4 py-5">
//     <h2 className="text-xl md:text-2xl font-bold mb-4">
//       Our Shop Location
//     </h2>

//     <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6028824862888!2d90.31184567431364!3d23.874384034007125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c30036d30273%3A0x42f3e7acec19669a!2sAsadul%20Hair%20salon%20%E2%9C%84!5e1!3m2!1sen!2sbd!4v1786681024185!5m2!1sen!2sbd"
//         className="w-full h-full border-0"
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Our Shop Location"
//       ></iframe>
//     </div>
//   </div>

// </div>
//          </div>
//     );
// };

// export default Contact;

import React from 'react';
import Complne from "../../../assets/complne.png";
import online from "../../../assets/online-Service.png";
import { Link } from 'react-router';
import { FaPhoneSquareAlt, FaWhatsappSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto py-6 md:py-10 w-full">

            {/* Contact Information */}
            <div className="flex flex-col lg:flex-row px-4 md:px-5 gap-5">

                <div className="w-full lg:w-[400px] flex flex-col">

                    <div className="rounded-md bg-[#C4C4C4] w-full shadow-md px-4 md:px-5 py-3">
                        <h3 className="pl-2 md:pl-10 text-base">
                            Contact Number:
                        </h3>
                        <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 break-all">
                            <FaPhoneSquareAlt size={30} className="shrink-0" />
                            01782299570
                        </h2>
                    </div>

                    <div className="rounded-md bg-[#C4C4C4] w-full shadow-md px-4 md:px-5 py-3 mt-3">
                        <h3 className="pl-2 md:pl-10 text-base">
                            Whatsapp Number:
                        </h3>
                        <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 break-all">
                            <FaWhatsappSquare size={30} className="shrink-0" />
                            01782299570
                        </h2>
                    </div>

                    <div className="rounded-md bg-[#C4C4C4] w-full shadow-md px-4 md:px-5 py-3 mt-3 flex">
                        <a
                            className="flex items-center gap-3 sm:gap-5 text-blue-600"
                            href="https://www.facebook.com/profile.php?id=61595514920705"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImFacebook2 size={30} className="shrink-0" />
                            Facebook Page
                        </a>
                    </div>

                </div>

                {/* Online Support & Complaint */}
                <div className="w-full min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

                    <div className="rounded-md bg-[#C4C4C4] w-full min-w-0 min-h-40 shadow-md px-3 sm:px-4 py-3">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 h-full">

                            <div className="w-20 h-20 sm:w-[100px] sm:h-[100px] shrink-0">
                                <img
                                    src={Complne}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="text-center sm:text-left min-w-0">
                                <h3 className="text-base font-bold">
                                    Talk to Export
                                </h3>
                                <h2 className="text-base md:text-xl font-bold">
                                    Get Online Support
                                </h2>
                                <Link
                                    to="/Complne"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Request Support
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="rounded-md bg-[#C4C4C4] w-full min-w-0 min-h-40 shadow-md px-3 sm:px-4 py-3">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 h-full">

                            <div className="w-20 h-20 sm:w-[100px] sm:h-[100px] shrink-0">
                                <img
                                    src={online}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="text-center sm:text-left min-w-0">
                                <h3 className="text-base font-bold">
                                    Share Your Experience
                                </h3>
                                <h2 className="text-base md:text-xl font-bold">
                                    Any Complain On Us?
                                </h2>
                                <Link
                                    to="/Complne"
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Raise a Complaint
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Home Address & Shop Location */}
            <div className="flex flex-col md:flex-row justify-center gap-5 px-4 md:px-5 pt-8 md:pt-10">

                {/* Home Address */}
                <div className="w-full md:w-1/3 min-w-0 rounded-md bg-[#C4C4C4] shadow-md px-4 py-5">
                    <h2 className="text-xl md:text-2xl font-bold py-3">
                        Home Address
                    </h2>

                    <p className="text-base md:text-lg py-2 break-words">
                        Khangan Bajar, Khagan, Birulia, Savar, Dhaka
                    </p>

                    <h3 className="text-base font-semibold py-2">
                        Get Direction
                    </h3>

                    <p className="text-sm">5 PM - 10 PM</p>
                    <p className="text-sm">Available All Day</p>
                </div>

                {/* Shop Location */}
                <div className="w-full md:w-2/3 min-w-0 rounded-md bg-[#C4C4C4] shadow-md px-4 py-5">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                        Our Shop Location
                    </h2>

                    <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6028824862888!2d90.31184567431364!3d23.874384034007125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c30036d30273%3A0x42f3e7acec19669a!2sAsadul%20Hair%20salon%20%E2%9C%84!5e1!3m2!1sen!2sbd!4v1786681024185!5m2!1sen!2sbd"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Our Shop Location"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
