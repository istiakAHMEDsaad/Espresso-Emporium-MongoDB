// @ts-nocheck
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import ContexProviderAPI from './Provider/ContexProviderAPI';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContexProviderAPI>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </HelmetProvider>
    </ContexProviderAPI>
  </StrictMode>
);
