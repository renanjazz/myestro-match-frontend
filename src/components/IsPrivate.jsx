import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MySpinner from "./Spinner";
import { AuthContext } from "../context/auth.context";

const IsPrivate = ({ children }) => {
  const { isLoading, currUser } = useContext(AuthContext);
  if (isLoading) {
    return <MySpinner />;
  }
  if (!currUser) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};
export default IsPrivate;
