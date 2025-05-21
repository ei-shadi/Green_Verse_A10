import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (user) {
    return children
  }
  else {
    return <Navigate to="/auth/login" state={location.pathname} />
  }
};
export default PrivateRoute;
