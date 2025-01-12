import { useState, useEffect } from 'react';
import { Footer, Header } from './components/index.js';
import { Outlet } from 'react-router-dom';
import { login, logout } from './store/authSlice.js';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [])

  return !loading ? (
    <div
      className="min-h-screen flex flex-wrap content-between bg-gradient-to-r from-slate-400 to-gray-400">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
