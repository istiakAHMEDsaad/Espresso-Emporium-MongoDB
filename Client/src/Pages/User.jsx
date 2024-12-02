import { useState } from 'react';
import { FaLongArrowAltLeft, FaTrash, FaPen } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
  const loadedUser = useLoaderData();
  const [user, setUser] = useState(loadedUser);

  return (
    <div>
      <Link to={'/'}>
        <button className='font-rancho text-2xl flex items-center gap-1 hover:scale-105 transition-all active:scale-95 mb-5'>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>Back to home
        </button>
      </Link>

      <div className='overflow-x-auto'>
        <table className='table table-xs'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Account Created</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {user.map((singleUser, index) => (
              <tr key={singleUser?._id}>
                <th>{index + 1}</th>
                <td>{singleUser?.name}</td>
                <td>{singleUser?.email}</td>
                <td>{singleUser?.creationTime}</td>
                <td className='flex gap-1'>
                  <button className='btn btn-xs'>
                    <FaPen></FaPen>
                  </button>
                  <button className='btn btn-xs text-red-600'>
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
