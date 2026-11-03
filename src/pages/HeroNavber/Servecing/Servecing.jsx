import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PCService from "../../../assets/ServiceBackground/PcService.png";
import CCTVBac from "../../../assets/ServiceBackground/CCTVBAC.png";
import Electronic from "../../../assets/ServiceBackground/ElectronicService.png";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceName: "",
  message: "",
};

const Servecing = () => {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });
    setSending(true);

    try {
      const response = await fetch(`${API_URL}/service-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const detail = Array.isArray(result.details)
          ? result.details.map((d) => `${d.field}: ${d.message}`).join(", ")
          : "";
        throw new Error(
          `${result.message || "Request could not be sent."}${
            detail ? ` (${detail})` : ""
          }`
        );
      }

      setStatus({
        type: "success",
        text: "আপনার রিকোয়েস্ট পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।",
      });
      setForm(emptyForm);
    } catch (err) {
      setStatus({ type: "error", text: `Error: ${err.message}` });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={PCService} className="w-full h-[350px] object-cover" />
        </div>
        <div>
          <img src={Electronic} className="w-full h-[350px] object-cover" />
        </div>
        <div>
          <img src={CCTVBac} className="w-full h-[350px] object-cover" />
        </div>
        <div>
          <img src={Electronic} className="w-full h-[350px] object-cover" />
        </div>
      </Carousel>

      <div className="flex flex-col lg:flex-row md:flex-row max-w-6xl mx-auto">
        {/* input Field */}
        <div className="w-full pt-18 px-5 py-5">
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl pt-5">
            <h1 className="text-2xl pl-8">সেবা গ্রহণ করুন</h1>
            <form className="card-body" onSubmit={handleSubmit}>
              <fieldset className="fieldset w-full max-w-xl mx-auto">
                {status.text && (
                  <div
                    className={`mb-3 rounded-lg p-3 text-sm ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status.text}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="01XXXXXXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label className="label">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Your address"
                  />
                </div>

                <div>
                  <label className="label">The Best Service For You</label>
                  <input
                    type="text"
                    name="serviceName"
                    value={form.serviceName}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Service Name"
                    required
                  />
                </div>

                <div>
                  <label className="label">A little about the issue</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full h-28"
                    placeholder="Write here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-neutral w-full mt-4"
                >
                  {sending ? "পাঠানো হচ্ছে..." : "রিকোয়েস্ট পাঠান"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        {/* Document field */}
        <div className="w-full px-8 py-5">
          <h3 className="text-base text-[#0D0D0D]">
            আপনার সার্ভিসিং সমস্যার সহজ ও নির্ভরযোগ্য সমাধান
          </h3>
          <h1 className="lg:text-lg text-lg font-bold py-2 text-[#242424]">
            আমরা আপনার সুবিধাকে গুরুত্ব দিয়ে বাসায় সার্ভিস প্রদান এবং ডিভাইস সংগ্রহ থেকে শুরু করে মেরামত ও হোম ডেলিভারি পর্যন্ত সেবা দেওয়ার চেষ্টা করি।
          </h1>
          <div className="px-5 py-3">
            <div>
              <h3 className="lg:text-lg text-base font-bold text-[#525252]">
                ১. আপনার সমস্যার বিবরণ দিন
              </h3>
              <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
                আপনার ডিভাইস বা বাসার সার্ভিসিং সমস্যার বিস্তারিত আমাদের জানান। অনলাইনে সার্ভিস রিকোয়েস্ট জমা দিন অথবা সরাসরি আমাদের সার্ভিস সেন্টারে যোগাযোগ করুন।
              </h1>
            </div>
            <div>
              <h3 className="lg:text-lg text-base font-bold text-[#525252]">
                ২. সার্ভিসের খরচ জেনে নিন
              </h3>
              <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
                আপনার সমস্যার ধরন অনুযায়ী আমরা প্রয়োজনীয় সার্ভিস, সম্ভাব্য খরচ এবং উপযুক্ত সমাধান সম্পর্কে আপনাকে বিস্তারিত জানাব।
              </h1>
            </div>
            <div>
              <h3 className="lg:text-lg text-base font-bold text-[#525252]">
                ৩. বাসা থেকে ডিভাইস সংগ্রহ
              </h3>
              <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
                ডিভাইস নিয়ে বাইরে যাওয়ার ঝামেলা এড়াতে আপনার সুবিধা অনুযায়ী আমরা বাসা থেকে ডিভাইস সংগ্রহ করে আমাদের সার্ভিস সেন্টারে নিয়ে আসব।
              </h1>
            </div>
            <div>
              <h3 className="lg:text-lg text-base font-bold text-[#525252]">
                ৪. মেরামতের পর হোম ডেলিভারি
              </h3>
              <h3 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
                মেরামতের কাজ সম্পন্ন হলে আমরা আপনার ডিভাইসটি নিরাপদে আবার আপনার বাসায় পৌঁছে দেব। ফলে সার্ভিস সেন্টারে আসা-যাওয়ার ঝামেলা ছাড়াই ঘরে বসে সার্ভিস গ্রহণ করতে পারবেন।
              </h3>
            </div>
            <div>
              <h3 className="lg:text-lg text-base font-bold text-[#525252]">
                ৫. আপনার সন্তুষ্টিই আমাদের সাফল্য
              </h3>
              <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
                আপনার সন্তুষ্টিই আমাদের প্রধান লক্ষ্য। মানসম্মত সার্ভিস, আন্তরিক সহযোগিতা ও নির্ভরযোগ্য সমাধানের মাধ্যমে আমরা আপনার আস্থা অর্জনে প্রতিশ্রুতিবদ্ধ।
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servecing;