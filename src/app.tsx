import { RouterProvider } from 'react-router-dom';
import { router } from './routers/router';
import { useAppDispatch } from './store/hooks';
import { getTokenFromLocalStorage } from './helpers/local-storage.helpers';
import { toast } from 'react-toastify';
import { AuthService } from './service/auth.service';
import { login, logout } from './store/user/user.slice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();
    try {
      if (token) {
        const data = await AuthService.getProfile();

        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
        }
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
