import { axiosInstance } from "../../axiosInstance.jsx";
import { LOGIN_URL } from "../../constant/constant";
// 🔹 Login API
export const loginApi = async (email, password) => {
  const response = await axiosInstance.post(LOGIN_URL, { email, password });
  return response.data;
};
