// @ts-nocheck
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast, Bounce } from 'react-toastify';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Utilities/firebase.init';

export const ContexAPI = createContext(null);

const ContexProviderAPI = ({ children }) => {
  const [coffee, setCoffee] = useState([]);
  const [removeCoffee, setRemoveCoffee] = useState(coffee);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Fetch All Data
  useEffect(() => {
    fetch('http://localhost:3000/add-coffee/')
      .then((res) => res.json())
      .then((data) => setCoffee(data))
      .catch((err) => console.error(err));
  }, []);

  // Add data Function
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name');
    const chef = form.get('chef');
    const price = form.get('price');
    const taste = form.get('taste');
    const category = form.get('category');
    const details = form.get('details');
    const photo = form.get('photo');
    const newCoffee = { name, chef, price, taste, category, details, photo };
    // console.log(newCoffee);

    // Send Data to the server
    fetch('http://localhost:3000/add-coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Add to Databse!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        }

        console.log(data);
        // form.reset();
      })
      .catch((err) => {
        toast.warn('Something Wrong!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
        console.error(err);
      });
  };

  // Handle Delete Coffee Data
  const handleCoffeeDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:3000/add-coffee/${_id}`,{
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire({
                title: 'Deleted!',
                text: 'Your coffee has been deleted.',
                icon: 'success',
              });
              const remaining = removeCoffee.filter(cof=>cof._id !== _id);
              setRemoveCoffee(remaining);
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

 // Create user with email & password
 const createCoffeeUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 }

  const value = {
    // MongoDB
    handleAddCoffee,
    coffee,
    handleCoffeeDelete,
    // Firebase
    loading,
    user,
    createCoffeeUser,
  };

  return <ContexAPI.Provider value={value}>{children}</ContexAPI.Provider>;
};

ContexProviderAPI.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContexProviderAPI;
//name, supplier, category, chef, taste, details, photo
