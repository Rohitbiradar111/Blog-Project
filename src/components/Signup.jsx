import { useState } from "react";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { Button, Input } from "./index.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

function Signup() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createUserAccount = async (data) => {
    setError("");
    try {
      const account = await authService.createAccount(data);
      if (account) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-5 my-12 md:my-0 lg:p-0">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-800 text-white rounded-xl p-5 lg:p-10`}
      >
        <h2 className="text-center text-white text-2xl font-bold leading-tight">
          Sign Up To Create An Account
        </h2>
        <p className="mt-2 text-center text-base text-white">
          Already have an account ? &nbsp;
          <Link
            to="/login"
            className="font-medium text-white transition-all duration-200 hover:underline"
          >
            Login
          </Link>
          &nbsp;or&nbsp;
          <Link
            to="/login"
            className="font-medium text-white transition-all duration-200 hover:underline"
          >
            Login as a Guest
          </Link>
        </p>
        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
        <form onSubmit={handleSubmit(createUserAccount)} className="mt-6">
          <div className="space-y-5">
            <Input
              label="Full Name :"
              type="text"
              placeholder="Enter Your Full Name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email :"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password :"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
            />
            <Button
              className="w-full active:bg-green-500 font-bold hover:bg-blue-800"
              type="submit"
            >
              CREATE ACCOUNT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
