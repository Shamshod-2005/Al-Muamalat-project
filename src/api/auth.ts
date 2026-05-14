import { axiosInstance } from "@/configs/axios";

export const getMeApi = async () => {
  const res = await axiosInstance.get("/users/me");
  return res.data.data;
};

//Userni update qilish
export const updateUserApi = async (id: string, data: any) => {
  const res = await axiosInstance.put(`/users/${id}`, data);
  return res.data;
};

export const loginApi = async (data: { email: string; password: string }) => {
  const res = await axiosInstance.post("/v2/auth/signin/init", data);
  return res.data;
};

export const registerApi = async (data: {
  email: string;
  password: string;
  phone_number: string;
  first_name: string;
  last_name: string;
}) => {
  const res = await axiosInstance.post("/v2/auth/signup/init", data);
  return res.data;
};

export const otpApi = async (data: { email: string; otp: string }) => {
  const payload = {
    email: data.email,
    otp: data.otp,
  };
  const res = await axiosInstance.post("/v2/auth/signin/verify", payload);
  return res.data.data;
};

export const ResendOtpApi = async (data: { email: string }) => {
  const payload = { email: data.email };
  const res = await axiosInstance.post("/v2/auth/signin/resend", payload);
  return res.data.data;
};

export const otpApiRegister = async (data: { email: string; otp: string }) => {
  const payload = {
    email: data.email,
    otp: data.otp,
  };
  const res = await axiosInstance.post("/v2/auth/signup/verify", payload);
  return res.data.data;
};

//Programs

export const CourseList = async () => {
  const res = await axiosInstance.get("/courses/main");
  return res.data.data;
};

export const Payment = async (payload: {
  course_id: number;
  user_id: number;
}) => {
  const res = await axiosInstance.post("/courses/user", payload);

  return res.data.data;
};

export const GetPaymentUrl = async (id: number) => {
  const res = await axiosInstance.get(`/courses/purchase/${id}`);

  return res.data.data;
};
