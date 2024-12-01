import { Link } from 'react-router-dom';
import headerBanner from '../assets/header.png';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <div className='relative'>
        <Link to={`/user`}>
          <div className='absolute top-2 right-1 lg:top-5 lg:right-8 bg-stone-600 p-2 rounded-full cursor-pointer hover:bg-stone-700 active:scale-95 transition-all z-10'>
            <span className='md:text-xl text-white'>
              <FaUser></FaUser>
            </span>
          </div>
        </Link>
        <img className='md:h-full h-12' src={headerBanner} alt='header logo' />
        <div className='absolute lg:top-4 md:top-0 top-1 left-0 right-0 flex flex-row gap-2 items-center justify-center'>
          <img className='md:w-10 w-8' src='/expresso.png' alt='logo' />
          <h2 className='font-rancho text-white lg:text-4xl md:text-3xl text-2xl'>
            Espresso Emporium
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
/*
position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
*/
/*
position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
*/
