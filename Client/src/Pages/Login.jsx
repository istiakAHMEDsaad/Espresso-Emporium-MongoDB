import { useContext } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContexAPI } from '../Provider/ContexProviderAPI';
import { toast, Slide } from 'react-toastify';

const Login = () => {
  const {signInUser} = useContext(ContexAPI);

  // Handle User Login
  const handleSignIn = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const email = form.get('email');
    const password = form.get('password');
    const loginUser = { email, password };
    
    signInUser(email, password)
    .then(userCredential=>{
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
        const lastSignInTime = user?.metadata?.lastSignInTime;
        const logInInfo = {email, lastSignInTime}
        fetch(`http://localhost:3000/users/`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(logInInfo)
        })
        .then(res=>res.json())
        .then(data=>{})
        .catch(error=>console.error(error))
    })
    .catch(error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  };

  return (
    <div className='my-10'>
      <Link to={'/'}>
        <button className='font-rancho text-2xl flex items-center gap-1 hover:scale-105 transition-all active:scale-95 mb-5'>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>Back to home
        </button>
      </Link>

      <h2 className='font-rancho text-4xl text-center'>Login</h2>

      {/* Form */}
      <div className='flex flex-col items-center justify-center'>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          {/* Form Start */}
          <form onSubmit={handleSignIn} className='card-body'>
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
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>

            {/* New to this website? Create Account */}
            <div>
              <p className='text-sm text-gray-500'>
                New to this website?{' '}
                <Link
                  to={'/signup'}
                  className='font-bold text-blue-600 hover:underline cursor-pointer'
                >
                  Create account.
                </Link>
              </p>
            </div>

            {/* Sign Up Button */}
            <div className='form-control mt-6'>
              <button
                
                className='btn btn-neutral bg-brown'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
