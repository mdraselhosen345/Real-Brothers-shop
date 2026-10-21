
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Load products from localStorage
  const loadProducts = () => {
    const savedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts(savedProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Delete product
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setProducts(updatedProducts);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const productName = (product.name || "").toLowerCase();

    const matchesSearch = productName.includes(
      search.toLowerCase()
    );

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              All Products
            </h1>

            <p className="mt-1 text-gray-500">
              Manage all products in your store.
            </p>
          </div>

          <Link
            to="/AddProduct"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            + Add Product
          </Link>
        </div>

        {/* Statistics */}
        <div className="mb-6 rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Products</p>

          <h2 className="mt-1 text-3xl font-bold text-blue-600">
            {products.length}
          </h2>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm md:flex-row">
          <input
            type="text"
            placeholder="Search product by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border bg-white p-3 outline-none focus:border-blue-500 md:w-64"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-14 w-14 rounded-lg border object-contain"
                      />
                    </td>

                    <td className="p-4 font-medium text-gray-800">
                      {product.name}
                    </td>

                    <td className="p-4">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                        {product.category}
                      </span>
                    </td>

                    <td className="p-4 font-semibold">
                      ৳{Number(product.price || 0).toLocaleString("en-BD")}
                    </td>

                    <td className="p-4">
                      {product.stock ?? 0}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="p-10 text-center text-gray-500"
                  >
                    {products.length === 0
                      ? "No products added yet."
                      : "No matching products found."}

                    <div className="mt-4">
                      <Link
                        to="/AddProduct"
                        className="font-semibold text-blue-600 hover:underline"
                      >
                        Add your first product
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>
    </div>
  );
};

export default AllProduct;
