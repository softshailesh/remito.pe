import { axiosInstance } from "../../axiosInstance.jsx";
import { ENQUIRY_URL } from "../../constant/constant";

// 🔹 Create Enquiry (Public)
export const addEnquiryApi = async (formData) => {
  const response = await axiosInstance.post(ENQUIRY_URL, formData);
  return response.data;
};

// 🔹 Get All Enquiries (Admin + Pagination)
export const getAllEnquiryApi = async (page = 1, limit = 20) => {
  const token = localStorage.getItem("tokenId");
  const response = await axiosInstance.get(
    `${ENQUIRY_URL}?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
