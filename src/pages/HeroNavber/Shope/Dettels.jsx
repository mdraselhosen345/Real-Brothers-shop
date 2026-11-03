import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';


const API_URL = 'http://localhost:5000/api/products';

const Dettels = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();

        const loadProduct = async () => {
            try {
                setLoading(true);
                setError('');

                const response = await fetch(API_URL, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('Product load failed');
                }

                const result = await response.json();

                if (!Array.isArray(result.data)) {
                    throw new Error('Invalid product data');
                }

                const singleProduct = result.data.find(
                    (item) => String(item._id || item.id) === String(id)
                );

                if (!singleProduct) {
                    setProduct(null);
                    setError('এই প্রোডাক্টটি পাওয়া যায়নি।');
                    return;
                }

                setProduct(singleProduct);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Product loading error:', err);
                    setError('প্রোডাক্ট লোড করা যাচ্ছে না। Backend পরীক্ষা করুন।');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        loadProduct();

        return () => controller.abort();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">
                    প্রোডাক্ট লোড হচ্ছে...
                </h1>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen gap-4 px-4">
                <h1 className="text-xl font-bold text-red-600">
                    {error || 'প্রোডাক্ট পাওয়া যায়নি।'}
                </h1>

                <Link to="/shope" className="btn btn-primary">
                    Shop-এ ফিরে যান
                </Link>
            </div>
        );
    }

    const specifications =
        product.specifications &&
        typeof product.specifications === 'object' &&
        !Array.isArray(product.specifications)
            ? product.specifications
            : {};

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <div className="flex flex-col lg:flex-row gap-10">

                {/* Left Side: Product Image */}
                <div className="lg:w-1/2 border rounded-xl p-5 flex items-center justify-center min-h-[300px]">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name || 'Product'}
                            className="w-full max-h-[400px] object-contain"
                        />
                    ) : (
                        <p className="text-gray-500">
                            কোনো Product Image নেই
                        </p>
                    )}
                </div>

                {/* Right Side: Product Information */}
                <div className="lg:w-1/2 space-y-4">

                    <h1 className="text-2xl md:text-3xl font-bold">
                        {product.name || product.title || 'Product'}
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        {product.brand && (
                            <div className="border px-4 py-2 rounded-lg bg-[#7393B3]">
                                Brand: {product.brand}
                            </div>
                        )}

                        <div className="border px-4 py-2 rounded-lg bg-[#7393B3]">
                            Category: {product.category || 'N/A'}
                        </div>
                    </div>

                    {(product.rating != null || product.reviews != null) && (
                        <p className="text-yellow-500 font-semibold">
                            ⭐ {product.rating ?? 'N/A'} (
                            {product.reviews ?? 0} Reviews)
                        </p>
                    )}

                    <div className="space-y-2">
                        {product.discount != null && (
                            <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                {product.discount}% OFF
                            </span>
                        )}

                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-2xl font-bold text-[#E35335]">
                                ৳ {product.price ?? 'N/A'}
                            </h2>

                            {product.oldPrice != null && (
                                <p className="text-gray-500 line-through">
                                    ৳ {product.oldPrice}
                                </p>
                            )}
                        </div>
                    </div>

                    {product.stock != null && (
                        <p>
                            Stock:{' '}
                            <span className="font-semibold">
                                {product.stock}
                            </span>
                        </p>
                    )}

                    {product.features && (
                        <p className="text-gray-600">
                            {Array.isArray(product.features)
                                ? product.features.join(', ')
                                : product.features}
                        </p>
                    )}

                    {product.description && (
                        <p className="text-gray-600">
                            {product.description}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <button
                            type="button"
                            className="btn flex-1 bg-blue-600 hover:bg-blue-700 text-white border-none rounded-lg"
                        >
                            🛒 Add to Cart
                        </button>

<button
    type="button"
    onClick={() => navigate(`/checkout/${product._id || product.id}`)}
    className="btn flex-1 bg-orange-500 hover:bg-orange-600 text-white border-none rounded-lg"
>
    ⚡ Buy Now
</button>
                    </div>
                </div>
            </div>

            {/* Additional Product Information */}
            <div className="max-w-3xl mx-auto pt-8">
                <ul>
                    {[
                        ['Warranty', product.warranty],
                        ['Delivery', product.delivery],
                        ['Details', product.details],
                    ]
                        .filter(([, value]) => value != null && value !== '')
                        .map(([label, value]) => (
                            <li
                                key={label}
                                className="text-lg font-bold text-[#525252] border p-3"
                            >
                                {label}:{' '}
                                <span className="text-base font-normal text-[#818589]">
                                    {value}
                                </span>
                            </li>
                        ))}
                </ul>

                {Object.keys(specifications).length > 0 && (
                    <>
                        <h2 className="text-2xl font-bold mt-6">
                            Specifications
                        </h2>

                        <table className="table w-full border mt-2">
                            <tbody>
                                {Object.entries(specifications).map(
                                    ([key, value]) => (
                                        <tr key={key}>
                                            <td className="font-bold">
                                                {key}
                                            </td>
                                            <td>
                                                {typeof value === 'object'
                                                    ? JSON.stringify(value)
                                                    : String(value)}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </>
                )}

                <div className="mt-7">
                    <h2 className="text-xl font-bold">
                        Description
                    </h2>

                    <p className="text-base mt-2 text-gray-700">
                        {product.description || 'কোনো Description দেওয়া হয়নি।'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dettels;

