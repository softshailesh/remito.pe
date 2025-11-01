import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEnquiries } from "../../../store/slice/enquirySlice";
import { Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import Loader from "../../../components/common/Loader";

const AllEnquiryList = () => {
  const dispatch = useDispatch();
  const { allEnquiries, total, loading, error } = useSelector(
    (state) => state.enquiry
  );

  const [page, setPage] = useState(1);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const limit = 10;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(getAllEnquiries({ page, limit }));
  }, [dispatch, page]);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );

  if (error)
    return <p className="text-center mt-10 text-red-500 font-medium">{error}</p>;

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden m-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-[#f57c47] to-[#F08A68] text-white px-6 py-4">
        <h2 className="font-semibold text-lg tracking-wide flex items-center gap-2">
          📋 All Enquiries
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-gray-100 text-gray-700 font-semibold border-b">
            <tr>
              <th className="p-3 text-left">No.</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Contact No</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Service Type</th>
              <th className="p-3 text-left">Message</th>
              {/* <th className="p-3 text-left">Status</th> */}
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center w-24">Actions</th>
            </tr>
          </thead>

          <tbody>
            {allEnquiries && allEnquiries.length > 0 ? (
              allEnquiries.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-orange-50 transition"
                >
                  <td className="p-3 text-gray-700">
                    {(page - 1) * limit + (index + 1)}
                  </td>
                  <td className="p-3 font-medium text-gray-800">{item.name}</td>
                  <td className="p-3 text-gray-600">{item.email || "—"}</td>
                  <td className="p-3 text-gray-600">
                    {item.country_code ? `${item.country_code} ` : ""}
                    {item.mobileNumber || "—"}
                  </td>
                  <td className="p-3 text-gray-600">{item.country || "—"}</td>
                  <td className="p-3 text-gray-600">
                    {item.type_of_service || "—"}
                  </td>
                  <td
                    className="p-3 max-w-[180px] truncate text-gray-600"
                    title={item.message}
                  >
                    {item.message || "—"}
                  </td>
                  {/* <td
                    className={`p-3 font-medium ${
                      item.status === "Pending"
                        ? "text-yellow-600"
                        : item.status === "Resolved"
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    {item.status || "—"}
                  </td> */}
                  <td className="p-3 text-gray-600">
                    {new Date(item.createdAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-3 flex justify-center">
                    <button
                      onClick={() => setSelectedEnquiry(item)}
                      className="bg-lime-400 text-white p-2 rounded-md hover:bg-lime-500 transition"
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-center p-5 text-gray-500 italic"
                >
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {total > limit && (
        <div className="flex flex-wrap items-center justify-center gap-3 py-6 px-4 border-t bg-gray-50">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white transition ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#F08A68] hover:bg-[#f57c47]"
            }`}
          >
            <ChevronLeft size={16} /> Previous
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-9 h-9 flex items-center justify-center rounded-md border text-sm font-medium transition ${
                    page === pageNum
                      ? "bg-lime-400 border-lime-500 text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-lime-50"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white transition ${
              page === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#F08A68] hover:bg-[#f57c47]"
            }`}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl font-semibold text-[#F08A68] mb-5 border-b pb-2">
              Enquiry Details
            </h3>

            <div className="space-y-4 text-gray-700 text-sm">
              <Detail label="Name" value={selectedEnquiry.name} />
              <Detail label="Email" value={selectedEnquiry.email} />
              <Detail
                label="Contact"
                value={
                  (selectedEnquiry.country_code
                    ? `${selectedEnquiry.country_code} `
                    : "") + (selectedEnquiry.mobileNumber || "—")
                }
              />
              <Detail label="Country" value={selectedEnquiry.country} />
              <Detail
                label="Service Type"
                value={selectedEnquiry.type_of_service}
              />
              <Detail label="Message" value={selectedEnquiry.message}  />
              {/* <Detail
                label="Status"
                value={selectedEnquiry.status}
                className={
                  selectedEnquiry.status === "Pending"
                    ? "text-yellow-600 font-medium"
                    : selectedEnquiry.status === "Resolved"
                    ? "text-green-600 font-medium"
                    : "text-gray-600"
                }
              /> */}
              <Detail
                label="Date"
                value={new Date(selectedEnquiry.createdAt).toLocaleString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ✅ Small reusable detail line component
const Detail = ({ label, value, className }) => (
  <div className="flex justify-between gap-2  border-b pb-1">
    <span className="font-semibold text-gray-800">{label}: {" "}</span>
    <span className={`text-gray-600 ${className}`}>{value || "—"} {" "}</span>
  </div>
);

export default AllEnquiryList;
