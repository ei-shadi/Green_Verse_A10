import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
        <Toaster position="top-center" richColors />
        <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
