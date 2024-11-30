import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='flex flex-col w-full h-screen items-center justify-center'>
      <h1 className='lg:text-6xl md:text-5xl text-4xl'>404 Page not found!</h1>
      <p className='text-xl font-semibold text-gray-500'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='text-red-500 font-semibold'>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
