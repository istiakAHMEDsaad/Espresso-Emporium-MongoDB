import { useContext } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { ContexAPI } from '../Provider/ContexProviderAPI';

const SignUp = () => {
  const { createCoffeeUser } = useContext(ContexAPI);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const confirmpassword = form.get('confirmpassword');
    const terms = event.target.terms.checked;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // const userNP = { email, password };
    // console.log(userNP);

    // Password length at least 6
    if (password.length < 6) {
      toast.warn('Password Must Contain 6 Character!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
      return;
    } else if (!passwordRegex.test(password)) {
      Swal.fire({
        text: 'Password must be contain 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        icon: 'warning',
      });
      return;
    }

    // Double check password
    if (password !== confirmpassword) {
      toast.warn('Password not matched!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
      return;
    }

    // Accept our terms and condition
    if (!terms) {
      toast.warn('Please accept out terms and conditions!', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
      return;
    }

    // Firebase
    createCoffeeUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        if (user) {
          toast.success('Account create successfully!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        }

        const creationTime = user?.metadata?.creationTime;
        const newUser = { name, email, creationTime };
        // Save new user info to the database
        fetch(`https://espresso-emporium-server-pi-seven.vercel.app/users`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            /* if(data.insertedId){
              toast.success('User created in databse!', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Slide,
              });
            } */
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          toast.warn('User Already Exist!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        } else {
          toast.error('Something Wrong!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        }
      });
  };

  return (
    <div className='my-10'>
      <Link to={'/'}>
        <button className='font-rancho text-2xl flex items-center gap-1 hover:scale-105 transition-all active:scale-95 mb-5'>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>Back to home
        </button>
      </Link>

      <h2 className='font-rancho text-4xl text-center'>Sign Up</h2>

      {/* Form */}
      <div className='flex flex-col items-center justify-center'>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          {/* Form Start */}
          <form onSubmit={handleSignIn} className='card-body'>
            {/* Name */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>

            {/* Email */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>

            {/* Password 1 */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>

            {/* Confirm password */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-bold'>Confirm Password</span>
              </label>
              <input
                type='password'
                name='confirmpassword'
                placeholder='confirm password'
                className='input input-bordered'
                required
              />
            </div>

            {/* Terms and condition */}
            <div className='flex items-center gap-1'>
              <input
                type='checkbox'
                name='terms'
                className='checkbox checkbox-xs'
              />
              <p className='text-sm text-gray-500 '>
                I agree with the Terms and condition
              </p>
            </div>

            {/* Already have account? */}
            <div>
              <p className='text-sm text-gray-500'>
                Already have{' '}
                <Link
                  to={'/login'}
                  className='font-bold text-blue-600 hover:underline cursor-pointer'
                >
                  account
                </Link>
                ?
              </p>
            </div>

            {/* Sign Up Button */}
            <div className='form-control mt-6'>
              <button className='btn btn-neutral bg-brown'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

/* 
Rahim@gmail.com, Rahim@1234
Bojorudding@gmail.com, Bojor@1234
bodir_ami@gmail.com, Bodir@1234
*/
