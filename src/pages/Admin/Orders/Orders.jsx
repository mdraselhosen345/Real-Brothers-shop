
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Load orders
  const loadOrders = () => {
    try {
      const savedOrders = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );

      setOrders(
        Array.isArray(savedOrders) ? savedOrders : []
      );
    } catch {
      setOrders([]);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  // Update order status
  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id
        ? { ...order, status: newStatus }
        : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  // Delete order
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    const updatedOrders = orders.filter(
      (order) => order.id !== id
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  // Search and filter
  const filteredOrders = orders.filter((order) => {
    const customerName = String(
      order.name || order.customerName || ""
    ).toLowerCase();

    const phone = String(order.phone || "");

    const orderId = String(order.id || "");

    const matchesSearch =
      customerName.includes(search.toLowerCase()) ||
      phone.includes(search) ||
      orderId.includes(search);

    const matchesStatus =
      statusFilter === "All" ||
      (order.status || "Pending") === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getTotal = (order) => {
    if (order.total !== undefined) {
      return Number(order.total) || 0;
    }

    if (order.totalPrice !== undefined) {
      return Number(order.totalPrice) || 0;
    }

    if (order.product?.price !== undefined) {
      return (
        Number(order.product.price) *
        Number(order.quantity || 1)
      );
    }

    return 0;
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const pendingCount = orders.filter(
    (order) => (order.status || "Pending") === "Pending"
  ).length;

  const deliveredCount = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Order Management
            </h1>
            <p className="mt-1 text-gray-500">
              View and manage customer orders.
            </p>
          </div>

          <Link
            to="/Dashboard"
            className="rounded-lg bg-gray-800 px-4 py-3 text-white hover:bg-gray-700"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-gray-500">Total Orders</p>
            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              {orders.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-gray-500">Pending Orders</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-600">
              {pendingCount}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-gray-500">Delivered Orders</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {deliveredCount}
            </h2>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm md:flex-row">
          <input
            type="text"
            placeholder="Search name, phone or order ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border bg-white p-3 md:w-56"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Processing">Processing</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full min-w-[1050px] text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Product</th>
                <th className="p-4">Total</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => {
                  const status = order.status || "Pending";

                  return (
                    <tr
                      key={order.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4 font-semibold">
                        #{order.id}
                      </td>

                      <td className="p-4">
                        <p className="font-medium">
                          {order.name ||
                            order.customerName ||
                            "N/A"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {order.phone || "No phone"}
                        </p>
                        <p className="max-w-48 text-sm text-gray-500">
                          {order.address || ""}
                        </p>
                      </td>

                      <td className="p-4">
                        {order.product?.name ||
                          order.productName ||
                          (Array.isArray(order.items)
                            ? order.items
                                .map((item) => item.name)
                                .join(", ")
                            : "Product order")}
                      </td>

                      <td className="p-4 font-semibold">
                        ৳{getTotal(order).toLocaleString("en-BD")}
                      </td>

                      <td className="p-4">
                        {order.paymentMethod ||
                          order.payment ||
                          "Cash on Delivery"}
                      </td>

                      <td className="p-4">
                        <select
                          value={status}
                          onChange={(e) =>
                            handleStatusChange(
                              order.id,
                              e.target.value
                            )
                          }
                          className={`rounded-lg border-0 p-2 text-sm font-semibold ${getStatusClass(status)}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Processing">Processing</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>

                      <td className="p-4">
                        <button
                          type="button"
                          onClick={() => handleDelete(order.id)}
                          className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="p-10 text-center text-gray-500"
                  >
                    {orders.length === 0
                      ? "No orders found yet."
                      : "No matching orders found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing {filteredOrders.length} of {orders.length} orders
        </p>
      </div>
    </div>
  );
};

export default Orders;