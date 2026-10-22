
import React, { Component } from "react";
import { Link } from "react-router";





const Dashboard = () => {
  const stats = [
    {
      title: "Total Products",
      value: "0",
      icon: "📦",
      color: "bg-blue-100",
    },
    {
      title: "Total Orders",
      value: "0",
      icon: "🛒",
      color: "bg-green-100",
    },
    {
      title: "Home Services",
      value: "0",
      icon: "🔧",
      color: "bg-orange-100",
    },
    {
      title: "Total Customers",
      value: "0",
      icon: "👥",
      color: "bg-purple-100",
    },
  ];

  const menus = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "📊",
    },
{
  name: "All Products",
  path: "/admin/AllProduct",
  icon: "📦",
},
    {
      name: "Add Product",
      path: "/admin/AddProduct",
      icon: "➕",
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: "🛒",
    },
    {
      name: "Services",
      path: "/admin/services",
      icon: "🔧",
    },
    {
      name: "Customers",
      path: "/admin/customers",
      icon: "👥",
    },
    {
      name: "Payments",
      path: "/admin/payments",
      icon: "💳",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 md:flex">

      {/* Sidebar */}
      <aside className="w-full bg-gray-900 text-white md:min-h-screen md:w-64 md:shrink-0">
        <div className="border-b border-gray-700 p-6">
          <h1 className="text-2xl font-bold text-blue-400">
            Smart Home Service BD
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Admin Panel
          </p>
        </div>

        <nav className="flex flex-wrap gap-1 p-3 md:block">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className="block rounded-lg px-4 py-3 transition hover:bg-blue-600"
            >
              <span className="mr-3">{menu.icon}</span>
              {menu.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-4 md:p-8">

        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Dashboard Overview
            </h2>

            <p className="mt-2 text-gray-500">
              Welcome to your Admin Dashboard!
            </p>
          </div>

          <Link
            to="/admin/AddProduct"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            + Add Product
          </Link>
        </header>

        {/* Statistics Cards */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-gray-800">
                    {item.value}
                  </h3>
                </div>

                <div className={`${item.color} rounded-xl p-4 text-2xl`}>
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-bold text-gray-800">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

            <Link
              to="/admin/products"
              className="rounded-xl border p-5 transition hover:border-blue-500 hover:bg-blue-50"
            >
              <span className="text-3xl">📦</span>
              <h4 className="mt-3 font-bold text-gray-800">
                Manage Products
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                View and manage your products.
              </p>
            </Link>

            <Link
              to="/admin/orders"
              className="rounded-xl border p-5 transition hover:border-green-500 hover:bg-green-50"
            >
              <span className="text-3xl">🛒</span>
              <h4 className="mt-3 font-bold text-gray-800">
                Manage Orders
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Check and manage customer orders.
              </p>
            </Link>

            <Link
              to="/admin/home-services"
              className="rounded-xl border p-5 transition hover:border-orange-500 hover:bg-orange-50"
            >
              <span className="text-3xl">🔧</span>
              <h4 className="mt-3 font-bold text-gray-800">
                Home Services
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Manage home service requests.
              </p>
            </Link>

          </div>
        </section>

        {/* Recent Orders */}
        <section className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="border-b p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Recent Orders
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Latest customer orders will appear here.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-sm text-gray-600">
                <tr>
                  <th className="whitespace-nowrap p-4">Order ID</th>
                  <th className="whitespace-nowrap p-4">Customer</th>
                  <th className="whitespace-nowrap p-4">Amount</th>
                  <th className="whitespace-nowrap p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    No orders available yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          © 2026 Real Brothers Shop. All rights reserved.
        </footer>

      </main>
    </div>
  );
};

export default Dashboard;
