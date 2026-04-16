import { Navigate } from "react-router";
import useAuthStore from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthStore();
  if (!token) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;