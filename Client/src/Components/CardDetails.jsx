import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContexAPI } from '../Provider/ContexProviderAPI';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const CardDetails = () => {
  const { coffee } = useContext(ContexAPI);
  const selectedId = useParams();
  const _id = selectedId._id;

  const [conffeeDetals, setCoffeeDetails] = useState({});
  useEffect(() => {
    const singleCoffeeDetails = coffee.find((cofee_id) => cofee_id._id === _id);
    setCoffeeDetails(singleCoffeeDetails);
  }, [coffee, _id]);

  const { name, photo, chef, taste, category, details } = conffeeDetals || {};
  return (
    <div className='my-20'>
      <Link to={'/'}>
        <button className='font-rancho text-2xl flex items-center gap-1 hover:scale-105 transition-all active:scale-95 mb-10'>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>Back to home
        </button>
      </Link>
      <div className='bg-[#F4F3F0] flex flex-col md:flex-row items-center justify-center lg:mx-44 md:py-10 rounded-md shadow-md'>
        <div>
          <img className='w-64' src={photo} alt='Coffee Image' />
        </div>
        <div>
          <h2 className='font-rancho text-3xl'>{name}</h2>

          <p className='font-semibold text-brown'>
            Name: <span className='font-normal text-gray-500'>{name}</span>
          </p>

          <p className='font-semibold text-brown'>
            Chef: <span className='font-normal text-gray-500'>{chef}</span>
          </p>
          
          <p className='font-semibold text-brown'>
          Taste: <span className='font-normal text-gray-500'>{taste}</span>
          </p>
          
          <p className='font-semibold text-brown'>
          Category: <span className='font-normal text-gray-500'>{category}</span>
          </p>
          
          <p className='font-semibold text-brown'>
          Details: <span className='font-normal text-gray-500'>{details}</span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
