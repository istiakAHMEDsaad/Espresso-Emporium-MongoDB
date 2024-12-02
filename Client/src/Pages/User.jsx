import { useState } from 'react';
import { FaLongArrowAltLeft, FaPen, FaTrash } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {
  const loadedUser = useLoaderData();
  const [user, setUser] = useState(loadedUser);

  const handleDeleteUsers = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-pi-seven.vercel.app/users/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              const remainingUsers = user.filter((siU) => siU._id !== id);
              setUser(remainingUsers);
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div>
      <Link to={'/'}>
        <button className='font-rancho text-2xl flex items-center gap-1 hover:scale-105 transition-all active:scale-95 mb-5'>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>Back to home
        </button>
      </Link>

      <h2 className='text-xl'>Total User: {user?.length}</h2>

      <div className='overflow-x-auto'>
        <table className='table table-xs'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Account Created</th>
              <th>Last Login</th>
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
                <td>{singleUser?.lastSignInTime}</td>
                <td className='flex gap-1'>
                  <button className='btn btn-xs'>
                    <FaPen></FaPen>
                  </button>
                  <button
                    onClick={() => handleDeleteUsers(singleUser?._id)}
                    className='btn btn-xs text-red-600'
                  >
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
