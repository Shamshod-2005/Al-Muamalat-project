import { useAuthStore } from "@/store/useAuthStore";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const { isAuth } = useAuthStore();

  if (isAuth) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
