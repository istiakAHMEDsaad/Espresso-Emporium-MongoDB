import notFound from '../assets/404/404.gif';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className=''>
      <Link to={'/'}>
        <button className='font-rancho text-2xl flex items-center gap-1 hover:scale-105 transition-all active:scale-95'>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>Back to home
        </button>
      </Link>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <img src={notFound} alt='404 not found' />
      </div>
    </div>
  );
};

export default NotFound;
