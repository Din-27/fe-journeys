// import package
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// import assets
import { UserContext } from "../../context/UserContext";

// create component here
function PrivateRoute({ element: Component }) {
  const [state] = useContext(UserContext);

  return state.isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute