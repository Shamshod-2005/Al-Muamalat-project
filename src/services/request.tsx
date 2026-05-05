import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.al-muamalat.uz/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
request.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE INTERCEPTOR
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await axios.post(
          "https://api.al-muamalat.uz/api/auth/refresh",
          { refreshToken },
        );

        localStorage.setItem("userToken", res.data.accessToken);

        return axios(error.config);
      } catch (err) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);
