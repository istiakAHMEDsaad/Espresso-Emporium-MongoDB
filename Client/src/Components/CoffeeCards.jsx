import { useContext } from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContexAPI } from '../Provider/ContexProviderAPI';

const CoffeeCards = ({ singleCoffee}) => {
  const { _id, name, photo, chef, price } = singleCoffee || {};
  const {handleCoffeeDelete} = useContext(ContexAPI);
  

  return (
    <div className='border p-2 flex flex-col md:flex-row items-center justify-center md:justify-around gap-3 md:gap-0 bg-[#F5F4F1] rounded-md shadow-sm'>
      {/* Image */}
      <div className='flex items-center justify-center'>
        <img
          className='w-48 h-48 object-contain'
          src={photo}
          alt='coffee image'
        />
      </div>
      
      {/* Text */}
      <div className='space-y-2'>
        <p className='font-semibold text-brown'>
          Name: <span className='font-normal text-gray-500'>{name}</span>
        </p>
        <p className='font-semibold text-brown'>
          Chef: <span className='font-normal text-gray-500'>{chef}</span>
        </p>
        <p className='font-semibold text-brown'>
          Price: <span className='font-normal text-gray-500'>{price} Taka</span>
        </p>
      </div>
      
      {/* Button */}
      <div className='flex flex-row md:flex-col gap-3'>
        <Link to={`/add-coffee/${_id}`}>
          <button className='bg-[#D2B48C] p-2 rounded-[6px]'>
            <span className='text-white'>
              <FaEye></FaEye>
            </span>
          </button>
        </Link>

        <Link to={`/update-coffee/${_id}`}>
        <button className='bg-[#3C393B] p-2 rounded-[6px]'>
          <span className='text-white'>
            <FaPen></FaPen>
          </span>
        </button>
        </Link>

        <button onClick={()=>handleCoffeeDelete(_id)} className='bg-[#EA4744] p-2 rounded-[6px]'>
          <span className='text-white'>
            <FaTrash></FaTrash>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CoffeeCards;
