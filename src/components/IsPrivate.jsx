import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const IsPrivate = ({ children }) => {
  const { currUser } = useContext(AuthContext);

  if (!currUser) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};
export default IsPrivate;

// TO-DO - message saying for user to log in