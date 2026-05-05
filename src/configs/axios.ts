import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";

const BASE_URL = import.meta.env.VITE_API_URL;

// =======================
// 1. Axios instance
// =======================
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

// =======================
// 2. Request interceptor (Zustand token)
// =======================
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// =======================
// 3. Refresh control variables
// =======================
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// =======================
// 4. Response interceptor (AUTO REFRESH)
// =======================
axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshToken, logout, login, user } = useAuthStore.getState();

      if (!refreshToken) {
        logout();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      // agar refresh allaqachon ketayotgan bo‘lsa
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        // refresh request
        const res = await axios.post(`${BASE_URL}/v2/auth/refreshToken`, {
          refreshToken: refreshToken,
        });

        const newAccessToken = res.data.access_token;
        const newRefreshToken = res.data.refresh_token; // agar backend bersa

        // Zustand update
        if (!user) {
          logout();
          return;
        }
        login({
          user,
          accessToken: newAccessToken,
          refreshToken: newRefreshToken || refreshToken,
        });

        processQueue(null, newAccessToken);

        // original request qayta yuboriladi
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);

        // logout
        logout();
        window.location.href = "/login";

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
