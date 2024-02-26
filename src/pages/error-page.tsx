import { Link } from 'react-router-dom';
import pageNotFound from '../assets/page-not-found.png';
const ErrorPage = (): JSX.Element => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 font-roboto text-white'>
      <img
        src={pageNotFound}
        alt='Page Not Found'
      />
      <Link
        className='rounded-md bg-sky-500 px-6 py-2 hover:bg-sky-600'
        to={'/'}
      >
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
