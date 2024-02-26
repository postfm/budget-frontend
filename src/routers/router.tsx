import { createBrowserRouter } from 'react-router-dom';
import LayoutPage from '../pages/layout-page';
import ErrorPage from '../pages/error-page';
import HomePage from '../pages/home-page';
import TransactionsPage from '../pages/transactions-page';
import CategoriesPage from '../pages/categories-page';
import AuthPage from '../pages/auth-page';
import ProtectedRoute from '../components/protected-route';
import { categoriesAction, categoriesLoader } from '../helpers/route.helpers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'transactions',
        element: (
          <ProtectedRoute>
            <TransactionsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'categories',
        action: categoriesAction,
        loader: categoriesLoader,
        element: (
          <ProtectedRoute>
            <CategoriesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
    ],
  },
]);
