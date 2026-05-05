// import { createContext, useState } from "react";
// import type { ReactNode } from "react";
// import { request } from "../services/request";

// type UserType = {
//   id?: string;
//   name?: string;
//   email?: string;
// } | null;

// type LoginParams = {
//   email: string;
//   password: string;
// };

// type RegisterParams = {
//   name: string;
//   email: string;
//   password: string;
// };

// type OtpParams = {
//   email: string;
//   code: string;
// };

// type AuthContextType = {
//   user: UserType;
//   loading: boolean;
//   login: (data: LoginParams) => Promise<void>;
//   register: (data: RegisterParams) => Promise<void>;
//   handleVerifyOtp: (data: OtpParams) => Promise<void>;
// };

// const defaultValue: AuthContextType = {
//   user: null,
//   loading: false,
//   login: async () => {},
//   register: async () => {},
//   handleVerifyOtp: async () => {},
// };

// export const AuthContext = createContext<AuthContextType>(defaultValue);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<UserType>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   // LOGIN
//   const login = async (data: LoginParams) => {
//     try {
//       setLoading(true);

//       const res = await request.post("/v2/auth/signin/init", data);

//       setUser(res.data.user);

//       return res.data;
//     } catch (error: any) {
//       throw error?.response?.data?.message || "Login failed";
//     } finally {
//       setLoading(false);
//     }
//   };

//   // REGISTER
//   const register = async (data: RegisterParams) => {
//     try {
//       setLoading(true);

//       const res = await request.post("/v2/auth/signin/init", data);

//       // faqat OTP bosqichiga o‘tamiz
//       return res.data;
//     } catch (error: any) {
//       throw error?.response?.data?.message || "Login failed";
//     } finally {
//       setLoading(false);
//     }
//   };

//   // OTP VERIFY
//   const handleVerifyOtp = async (data: OtpParams) => {
//     try {
//       setLoading(true);

//       const res = await request.post("/v2/auth/signin/verify", data);

//       // ✅ token saqlaymiz
//       localStorage.setItem("userToken", res.data.accessToken);
//       localStorage.setItem("refreshToken", res.data.refreshToken);

//       setUser(res.data.user);

//       return res.data;
//     } catch (error: any) {
//       throw error?.response?.data?.message || "OTP failed";
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, loading, login, register, handleVerifyOtp }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

