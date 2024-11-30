// @ts-nocheck
import { TiCoffee } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import coffeeIcon from '../assets/icons/1.png';
import badgeIcon from '../assets/icons/2.png';
import beansIcon from '../assets/icons/3.png';
import cupIcon from '../assets/icons/4.png';
import bgImageOne from '../assets/more/1.png';
import { useContext, useState } from 'react';
import { ContexAPI } from '../Provider/ContexProviderAPI';
import CoffeeCards from '../Components/CoffeeCards';

const Home = () => {
  const { coffee } = useContext(ContexAPI);

  return (
    <div>
      {/* --> Hero Section <-- */}
      <div className='relative bg-home-banner bg-cover lg:bg-bottom md:bg-left bg-[bottom_right_-19rem] w-full h-[20rem] lg:h-[32rem]'>
        <div className='md:w-96 lg:w-[30rem] absolute lg:top-[10rem] lg:left-[37rem] md:top-[6rem] md:left-[22rem] top-20 space-y-3'>
          <h2 className='font-rancho text-white lg:text-3xl md:text-2xl text-xl'>
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className='text-sm text-gray-400'>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className='font-rancho text-xl text-brown bg-[#E3B577] px-4 py-1 hover:rotate-2 hover:bg-[#E3B577]/90 active:scale-95 transition-all'>
            Learn More
          </button>
          <div className='flex gap-2'>
            <Link to={'/signup'}><button className='text-white border px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all'>Sign Up</button></Link>
            <Link to={'/login'}><button className='text-white border px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all'>Login</button></Link>
          </div>
        </div>
      </div>

      {/* 2 background image */}
      <div className='relative'>
        <img
          className='absolute top-[20rem] -z-10'
          src={bgImageOne}
          alt='bg image'
        />
        {/* --> Brand Section <-- */}
        <div className='bg-[#ECEAE3] flex flex-col md:flex-row gap-4 items-center justify-around lg:px-16 py-14'>
          {/* 1 */}
          <div className='lg:w-60 md:w-48'>
            <img className='w-12' src={coffeeIcon} alt='Coffee Icon' />
            <h2 className='font-rancho text-2xl text-brown'>Awesome Aroma</h2>
            <p className='text-[12px] font-semibold text-brown'>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          {/* 2 */}
          <div className='lg:w-60 md:w-48'>
            <img className='w-12' src={badgeIcon} alt='Coffee Icon' />
            <h2 className='font-rancho text-2xl text-brown'>High Quality</h2>
            <p className='text-[12px] font-semibold text-brown'>
              We served the coffee to you maintaining the best quality
            </p>
          </div>

          {/* 3 */}
          <div className='lg:w-60 md:w-48'>
            <img className='w-12' src={beansIcon} alt='Coffee Icon' />
            <h2 className='font-rancho text-2xl text-brown'>Pure Grades</h2>
            <p className='text-[12px] font-semibold text-brown'>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>

          {/* 4 */}
          <div className='lg:w-60 md:w-48'>
            <img className='w-12' src={cupIcon} alt='Coffee Icon' />
            <h2 className='font-rancho text-2xl text-brown'>Proper Roasting</h2>
            <p className='text-[12px] font-semibold text-brown'>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>

        {/* Add more Coffee Button */}
        <div className='flex flex-col items-center my-10 gap-3'>
          <p className='text-sm'>--- Sip & Savor ---</p>
          <h2 className='font-rancho md:text-4xl text-3xl'>
            Our Popular Products
          </h2>
          <Link to={'/add-coffee'}>
            <button className='border border-1 border-brown bg-[#E3B577] px-4 py-1 rounded-md flex items-center gap-1 font-rancho text-xl hover:bg-brown hover:text-white active:scale-95 transition-all'>
              <span className='text-xl'>
                <TiCoffee></TiCoffee>
              </span>
              Add Coffee
            </button>
          </Link>
        </div>
      </div>

      {/* Coffee Card */}
      <div className='md:grid md:grid-cols-2 md:gap-4 lg:mx-40'>
        {coffee.map((singleCoffee) => (
          <CoffeeCards
            key={singleCoffee._id}
            singleCoffee={singleCoffee}
          ></CoffeeCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
