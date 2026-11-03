import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const SERVICE_NAME = "CCTV";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceName: "",
  message: "",
};

const Cctv = () => {
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
        body: JSON.stringify({
          ...form,
          serviceName: form.serviceName.trim() || SERVICE_NAME,
          category: "Home Service",
        }),
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
    <div className="flex flex-col lg:flex-row md:flex-row max-w-6xl mx-auto pt-10">
      {/* input Field */}
      <div className="w-full pt-8 px-5 py-5">
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

              {/* Name & Phone */}
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

              {/* Email */}
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

              {/* Address */}
              <div>
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Your address"
                  required
                />
              </div>

              {/* Service */}
              <div>
                <label className="label">The Best Service For You</label>
                <input
                  type="text"
                  name="serviceName"
                  value={form.serviceName}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="CCTV (খালি রাখলে CCTV যাবে)"
                />
              </div>

              {/* Issue */}
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

              {/* Button */}
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
          এই সহজ ধাপগুলো অনুসরণ করুন
        </h3>
        <h1 className="lg:text-2xl text-xl font-bold py-2 text-[#242424]">
          এই সহজ ধাপগুলো অনুসরণ করুন
        </h1>
        <div className="px-5 py-3">
          <div>
            <h3 className="lg:text-lg text-base font-bold text-[#525252]">
              আপনার সমস্যার বিবরণ দিন
            </h3>
            <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
              আপনার CCTV ক্যামেরার সমস্যা, নতুন ক্যামেরা ইনস্টলেশন অথবা সেটআপের প্রয়োজনীয়তা সম্পর্কে অনলাইনে অথবা আমাদের সার্ভিস সেন্টারে সশরীরে জানান।
            </h1>
          </div>
          <div>
            <h3 className="lg:text-lg text-base font-bold text-[#525252]">
              দর জেনে নিন
            </h3>
            <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
              আমরা আপনাকে ফোন বা সরাসরি সাক্ষাতের মাধ্যমে CCTV ইনস্টলেশন, মেরামত এবং প্রয়োজনীয় সরঞ্জামের খরচ সম্পর্কে বিস্তারিত জানাব।
            </h1>
          </div>
          <div>
            <h3 className="lg:text-lg text-base font-bold text-[#525252]">
              পরিষেবা পরিকল্পনা অনুমোদন করুন
            </h3>
            <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
              প্রস্তাবিত CCTV সার্ভিস পরিকল্পনা ও খরচের প্রাক্কলন পর্যালোচনা করে অনুমোদন করুন।
            </h1>
          </div>
          <div>
            <h3 className="lg:text-lg text-base font-bold text-[#525252]">
              আপনার CCTV সার্ভিস গ্রহণ করুন
            </h3>
            <h3 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
              নতুন CCTV ক্যামেরা ইনস্টলেশন, ক্যামেরা মেরামত, DVR/NVR সেটআপ অথবা মোবাইলে লাইভ ভিউ কনফিগারেশনের জন্য আমাদের সেবা গ্রহণ করুন।
            </h3>
          </div>
          <div>
            <h3 className="lg:text-lg text-base font-bold text-[#525252]">
              আপনার CCTV সার্ভিস সম্পন্ন করুন
            </h3>
            <h1 className="lg:text-md text-[14px] text-[#808080] px-4 py-1">
              কাজ সম্পন্ন হলে আপনার CCTV ক্যামেরা ও সংযোগ পরীক্ষা করে বুঝে নিন এবং প্রয়োজনীয় ব্যবহারবিধি জেনে নিন।
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cctv;