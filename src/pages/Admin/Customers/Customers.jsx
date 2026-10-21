import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  // Load customer information from orders
  useEffect(() => {
    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );

      const customerMap = new Map();

      savedOrders.forEach((order) => {
        const name = order.name || order.customerName || "";
        const phone = order.phone || "";
        const email = order.email || "";
        const address = order.address || "";

        // Phone is preferred as the unique customer identifier.
        const key = phone.trim() || email.trim() || name.trim();

        if (!key) return;

        if (!customerMap.has(key)) {
          customerMap.set(key, {
            id: key,
            name: name || "N/A",
            phone: phone || "N/A",
            email: email || "N/A",
            address: address || "N/A",
            totalOrders: 0,
            totalSpent: 0,
          });
        }

        const customer = customerMap.get(key);

        customer.totalOrders += 1;
        customer.totalSpent += Number(
          order.total ??
          order.totalPrice ??
          (Number(order.product?.price || 0) *
            Number(order.quantity || 1))
        ) || 0;

        // Use the latest non-empty details found in orders.
        if (name) customer.name = name;
        if (phone) customer.phone = phone;
        if (email) customer.email = email;
        if (address) customer.address = address;
      });

      setCustomers(Array.from(customerMap.values()));
    } catch {
      setCustomers([]);
    }
  }, []);

  // Search customers
  const filteredCustomers = customers.filter((customer) => {
    const query = search.toLowerCase();

    return (
      customer.name.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.address.toLowerCase().includes(query)
    );
  });

  const totalOrders = customers.reduce(
    (sum, customer) => sum + customer.totalOrders,
    0
  );

  const totalSpent = customers.reduce(
    (sum, customer) => sum + customer.totalSpent,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Customers
            </h1>
            <p className="mt-2 text-gray-500">
              View and manage your store customers.
            </p>
          </div>

          <Link
            to="/Dashboard"
            className="rounded-lg bg-gray-800 px-5 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Statistics */}
        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Customers
            </p>
            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              {customers.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Orders
            </p>
            <h2 className="mt-2 text-3xl font-bold text-purple-600">
              {totalOrders}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Order Value
            </p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              ৳{totalSpent.toLocaleString("en-BD")}
            </h2>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 rounded-xl bg-white p-4 shadow-sm">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer name, phone, email or address..."
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Customer Table */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full min-w-[1000px] text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Email</th>
                <th className="p-4">Address</th>
                <th className="p-4">Orders</th>
                <th className="p-4">Order Value</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                          {customer.name.charAt(0).toUpperCase()}
                        </div>

                        <span className="font-semibold text-gray-800">
                          {customer.name}
                        </span>
                      </div>
                    </td>

                    <td className="p-4">
                      {customer.phone}
                    </td>

                    <td className="p-4">
                      {customer.email}
                    </td>

                    <td className="max-w-56 p-4 text-sm text-gray-600">
                      {customer.address}
                    </td>

                    <td className="p-4">
                      <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">
                        {customer.totalOrders}
                      </span>
                    </td>

                    <td className="p-4 font-semibold text-green-700">
                      ৳{customer.totalSpent.toLocaleString("en-BD")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="p-10 text-center text-gray-500"
                  >
                    {customers.length === 0
                      ? "No customers found. Customer information will appear after orders are saved."
                      : "No matching customers found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing {filteredCustomers.length} of {customers.length} customers
        </p>
      </div>
    </div>
  );
};

export default Customers;
