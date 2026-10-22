
import React, { useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { Link, useSearchParams } from 'react-router';

const Shope = () => {
    const [shope, setShope] = useState([]);
    const [loading, setLoading] = useState(true);

    // Navbar থেকে Search value নেওয়া
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';

    // JSON থেকে Product Load
    useEffect(() => {
        fetch("/shope.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Product load failed");
                }
                return res.json();
            })
            .then((data) => {
                setShope(data);
            })
            .catch((error) => {
                console.error("Product loading error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Search অনুযায়ী Product Filter
    const filteredShope = shope.filter((item) =>
        (item.title || "")
            .toLowerCase()
            .includes(search.trim().toLowerCase())
    );

    return (
        <div className="px-4 py-4">

            {/* Search Result Title */}
            {search.trim() !== '' && (
                <div className="mb-4">
                    <h2 className="text-lg font-bold">
                        Search Result: {search}
                    </h2>

                    <p className="text-sm text-gray-600">
                        পাওয়া গেছে: {filteredShope.length} টি প্রোডাক্ট
                    </p>
                </div>
            )}

            {/* Loading Message */}
            {loading ? (
                <p className="text-center py-10">
                    প্রোডাক্ট লোড হচ্ছে...
                </p>
            ) : (

                /* Product Grid */
                <div className="grid grid-cols-2 md:grid-cols-6
                    lg:grid-cols-7 gap-4">

                    {filteredShope.length > 0 ? (

                        filteredShope.map((item) => (

                            <Link
                                key={item.id}
                                to={`/shope/${item.id}`}
                                className="block h-full"
                            >

                                {/* Product Card */}
                                <div className="h-full shadow-lg
                                    hover:shadow-2xl transition-all
                                    hover:scale-105 duration-300
                                    rounded-lg bg-[#DBDBDB] p-2
                                    flex flex-col items-center
                                    justify-between">

                                    {/* Product Image */}
                                    <div className="flex items-center
                                        justify-center">

                                        <img
                                            src={item.image}
                                            className="w-[120px] h-[120px]
                                                lg:w-[150px] lg:h-[150px]
                                                object-contain border-2"
                                            alt={item.title || "Product"}
                                        />

                                    </div>

                                    {/* Product Details */}
                                    <div className="pt-1 w-full">

                                        <h1 className="text-[14px]
                                            font-bold">
                                            {item.title}
                                        </h1>

                                        {/* Rating and Reviews */}
                                        <div className="flex
                                            justify-between px-3 py-1">

                                            <div className="flex gap-1
                                                text-yellow-500">

                                                <CiStar className="text-xl" />

                                                <span className="text-gray-700
                                                    text-[12px] font-medium">
                                                    {item.rating}
                                                </span>

                                            </div>

                                            <h3 className="font-semibold
                                                text-[14px]">
                                                ({item.reviews})
                                            </h3>

                                        </div>

                                        {/* Price */}
                                        <div className="pt-2
                                            text-[#FF0000] text-[16px] pl-4">

                                            <h1 className="font-bold">
                                                <span className="text-2xl
                                                    font-bold">
                                                    ৳
                                                </span>{' '}
                                                {item.price}
                                            </h1>

                                        </div>

                                        {/* Details Button */}
                                        <div className="text-center mt-2">

                                            <button
                                                type="button"
                                                className="btn btn-active
                                                    btn-primary px-4
                                                    text-[12px]"
                                            >
                                                বিস্তারিত দেখুন
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                        ))

                    ) : (

                        /* No Product Found */
                        <div className="col-span-full
                            text-center py-10">

                            <h2 className="text-xl font-bold
                                text-gray-600">
                                কোনো প্রোডাক্ট পাওয়া যায়নি!
                            </h2>

                            <p className="text-gray-500 mt-2">
                                অন্য নাম দিয়ে সার্চ করে দেখুন।
                            </p>

                            <Link
                                to="/shope"
                                className="inline-block mt-4
                                    text-blue-600 underline"
                            >
                                সব প্রোডাক্ট দেখুন
                            </Link>

                        </div>

                    )}

                </div>
            )}

        </div>
    );
};

export default Shope;
