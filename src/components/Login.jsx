import React, { useState } from "react";
import { Logo, Input, Button } from "./index.js";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth.js";
import { login as authLogin } from "../store/authSlice.js";

function Login() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const userLogin = async (data) => {
        setError("");
        try {
            const loginData = await authService.login(data)
            if (loginData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) dispatch(authLogin(currentUser));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-800 text-white rounded-xl p-10`}>
                <div className="mb-4 flex justify-center">
                    <span className="flex w-full justify-center">
                        <Logo />
                    </span>
                </div>
                <h2 className="text-center text-white text-2xl font-bold leading-tight">
                    Login To Your Account
                </h2>
                <p className="mt-2 text-center text-base text-white">
                    Don&apos;t have an Account ? &nbsp;
                    <Link to="/signup" className="font-medium text-white transition-all duration-200 hover:underline">
                        Signup
                    </Link>
                </p>
                {
                    error && <p className="text-red-600 mt-2 text-center">
                        {error}
                    </p>
                }
                <form onSubmit={handleSubmit(userLogin)} className="mt-6">
                    <div className="space-y-5">
                        <Input
                            label="Email :"
                            placeholder="Enter Your Email"
                            type="email"
                            {
                            ...register("email", {
                                required: true, validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })
                            }
                        />
                        <Input
                            label="Password :"
                            placeholder="Enter Your Password"
                            type="password"
                            {
                            ...register("password", { required: true })
                            }
                        />
                        <Button
                            className="w-full active:bg-green-500 font-bold"
                            type="submit"
                        >
                            LOGIN
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;