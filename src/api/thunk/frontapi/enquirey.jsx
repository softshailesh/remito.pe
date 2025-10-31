import { axiosInstance } from "../../axiosInstance.jsx";
import { ENQUIRY_URL } from "../../constant/constant";

// 🔹 Enquiry API Call
export const addEnquiryApi = async (formData) => {
  const response = await axiosInstance.post(ENQUIRY_URL, formData);
  return response.data;
};
