import Layout from "@/layout/Layout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/register/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}

        {/* <Route
          path="/dashboard"
          element={
            <AdminPrivateRoute>
              <AdminLayout />
            </AdminPrivateRoute>
          }
        >  
        
        </Route> */}
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
        </Route>

        {/* NOT FOUND */}
        <Route path="*" element={<div>Not Found Shamshod</div>} />
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default Router;
