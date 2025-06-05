import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/");
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="block w-full text-left px-4 py-2 text-white rounded-lg font-medium md:inline-block md:px-6 md:py-2 md:duration-200 md:rounded-3xl active:bg-green-500 md:text-xl md:font-semibold"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
