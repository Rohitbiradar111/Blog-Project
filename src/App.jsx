import { useState, useEffect } from "react";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router-dom";
import { login, logout } from "./store/authSlice.js";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth.js";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="overflow-hidden text-wrap break-words min-h-screen flex flex-wrap bg-[#e5e5f7] opacity-80 bg-[radial-gradient(#444cf7_0.5px,#e5e5f7_0.5px)] [background-size:10px_10px]">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
