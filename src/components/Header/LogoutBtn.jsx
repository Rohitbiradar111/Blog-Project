import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout());
                navigate("/");
            });
    }

    return (
        <button
            onClick={logoutHandler}
            className="inline-block px-6 py-2 duration-200 rounded-3xl active:bg-green-500 text-xl font-semibold"
        >
            Logout
        </button>
    )
}

export default LogoutBtn;