import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthorized, children }) => {
  if (!isAuthorized) {
    return <Navigate to="/Login" replace />;
  }
  return children;
};

export default ProtectedRoute;
