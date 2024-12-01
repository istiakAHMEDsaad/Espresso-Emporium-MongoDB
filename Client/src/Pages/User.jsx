import { FaLongArrowAltLeft } from 'react-icons/fa';
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
      
    </div>
  );
};

export default User;
