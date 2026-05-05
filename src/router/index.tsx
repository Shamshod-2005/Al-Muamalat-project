import Layout from "@/layout/Layout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import ProtectedRoute from "@/router/ProtectedRoute";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Programs from "@/pages/Programs/Programs";
import Profile from "@/pages/Profile/Profile";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="programs/:id" element={<Programs />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================= NOT FOUND ================= */}
        <Route path="*" element={<div>Not Found</div>} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default Router;
