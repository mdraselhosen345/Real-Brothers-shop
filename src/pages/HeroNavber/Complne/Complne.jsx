import React from 'react';

const Complne = () => {
    return (
      
 <div>
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto">

  {/* Input Field */}
  <div className="w-full px-5 py-5">

    <div className="card bg-base-100 w-full max-w-xl mx-auto shadow-2xl">

      <h1 className="text-2xl font-bold pl-8 pt-5">
        Get Help from Experts
      </h1>

      <div className="card-body">

        <fieldset className="fieldset w-full">

          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="label">
                Name
              </label>

              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Name"
              />
            </div>

            <div>
              <label className="label">
                Phone Number
              </label>

              <input
                type="tel"
                className="input input-bordered w-full"
                placeholder="017XXXXXXXX"
              />
            </div>

          </div>


          {/* Email */}
          <div>
            <label className="label">
              Email
            </label>

            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>


          {/* Service */}
          <div>
            <label className="label">
              The Best Service For You
            </label>

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Service Name"
            />
          </div>


          {/* Issue */}
          <div>
            <label className="label">
              A little about the issue
            </label>

            <textarea
              className="textarea textarea-bordered w-full h-28"
              placeholder="Write here..."
            ></textarea>
          </div>


          {/* Button */}
          <button
            type="submit"
            className="btn btn-neutral w-full mt-4"
          >
            Submit Request
          </button>

        </fieldset>

      </div>
    </div>

  </div>

</div>
 </div>
        
    );
};

export default Complne;