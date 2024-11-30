import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footers from '../Components/Footers';

const MainLayout = () => {
  return (
    <div className='lg:max-w-7xl md:max-w-screen-md max-w-sm mx-auto'>
      <Header></Header>
      <div className='min-h-[calc(100vh-556px)]'>
        <Outlet></Outlet>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;
