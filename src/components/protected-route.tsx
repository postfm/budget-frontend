import { useAuth } from '../hooks/use-auth';
import img from '../assets/protected-icon.webp';

interface ProtectedRouterProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouterProps): JSX.Element => {
  const isAuth = useAuth();
  return (
    <>
      {isAuth ? (
        children
      ) : (
        <div className='mt-20 flex flex-col items-center justify-center gap-10'>
          <h1 className='text-2xl'>To view this page you mus be login.</h1>
          <img
            className='w-1/3'
            src={img}
            alt='Protected Icon'
          />
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
