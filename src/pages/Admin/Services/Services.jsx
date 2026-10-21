
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Load service requests
  useEffect(() => {
    try {
      const savedRequests = JSON.parse(
        localStorage.getItem("serviceRequests") || "[]"
      );

      setRequests(
        Array.isArray(savedRequests) ? savedRequests : []
      );
    } catch {
      setRequests([]);
    }
  }, []);

  // Save requests
  const saveRequests = (updatedRequests) => {
    setRequests(updatedRequests);

    localStorage.setItem(
      "serviceRequests",
      JSON.stringify(updatedRequests)
    );
  };

  // Update service status
  const updateStatus = (id, status) => {
    const updatedRequests = requests.map((request) =>
      String(request.id) === String(id)
        ? { ...request, status }
        : request
    );

    saveRequests(updatedRequests);
  };

  // Delete request
  const deleteRequest = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service request?"
    );

    if (!confirmed) return;

    const updatedRequests = requests.filter(
      (request) => String(request.id) !== String(id)
    );

    saveRequests(updatedRequests);
  };

  // Search and filter
  const filteredRequests = requests.filter((request) => {
    const customer = String(
      request.name || request.customerName || ""
    ).toLowerCase();

    const phone = String(request.phone || "");

    const service = String(
      request.serviceName ||
        request.service ||
        request.category ||
        ""
    ).toLowerCase();

    const searchText = search.toLowerCase();

    const matchesSearch =
      customer.includes(searchText) ||
      phone.includes(search) ||
      service.includes(searchText);

    const matchesStatus =
      filterStatus === "All" ||
      (request.status || "Pending") === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const pendingCount = requests.filter(
    (request) => (request.status || "Pending") === "Pending"
  ).length;

  const completedCount = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  const statusStyle = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-blue-100 text-blue-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Home Service Management
            </h1>
            <p className="mt-2 text-gray-500">
              Manage customer service requests.
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
              Total Requests
            </p>
            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              {requests.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Pending Requests
            </p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-600">
              {pendingCount}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Completed Services
            </p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {completedCount}
            </h2>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm md:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search customer, phone or service..."
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border bg-white p-3 md:w-60"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Requests Table */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full min-w-[1100px] text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Request ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Service</th>
                <th className="p-4">Address</th>
                <th className="p-4">Problem</th>
                <th className="p-4">Cost (৳)</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                  <tr
                    key={request.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4 font-semibold">
                      #{request.id}
                    </td>

                    <td className="p-4">
                      <p className="font-semibold text-gray-800">
                        {request.name ||
                          request.customerName ||
                          "N/A"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {request.phone || "N/A"}
                      </p>
                    </td>

                    <td className="p-4">
                      {request.serviceName ||
                        request.service ||
                        request.category ||
                        "N/A"}
                    </td>

                    <td className="max-w-48 p-4 text-sm">
                      {request.address || "N/A"}
                    </td>

                    <td className="max-w-52 p-4 text-sm">
                      {request.problem ||
                        request.message ||
                        request.description ||
                        "N/A"}
                    </td>

                    <td className="p-4 font-semibold">
                      ৳{Number(request.cost || request.price || 0).toLocaleString("en-BD")}
                    </td>

                    <td className="p-4">
                      <select
                        value={request.status || "Pending"}
                        onChange={(e) =>
                          updateStatus(request.id, e.target.value)
                        }
                        className={`rounded-lg border-0 p-2 text-sm font-semibold ${statusStyle(request.status || "Pending")}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td className="p-4">
                      <button
                        type="button"
                        onClick={() => deleteRequest(request.id)}
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
                    colSpan="8"
                    className="p-10 text-center text-gray-500"
                  >
                    {requests.length === 0
                      ? "No service requests found."
                      : "No matching requests found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing {filteredRequests.length} of {requests.length} requests
        </p>
      </div>
    </div>
  );
};

export default Services;
