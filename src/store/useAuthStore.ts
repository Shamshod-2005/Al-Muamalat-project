import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number | string;
  name: string;
  email: string;
  roles: string;
}

type AuthState = {
  isAuth: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (data: { user: User; accessToken: string, refreshToken: string }) => void;
  register: (data: { user: User; accessToken: string, refreshToken: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      accessToken: null,
      refreshToken: null,

      login: ({ user, accessToken, refreshToken }) =>
        set({
          isAuth: true,
          user,
          accessToken,
          refreshToken,
        }),

      register: ({ user, accessToken, refreshToken }) =>
        set({
          isAuth: true,
          user,
          accessToken,
          refreshToken,
        }),

      logout: () =>
        set({
          isAuth: false,
          user: null,
          accessToken: null,
          refreshToken: null,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
