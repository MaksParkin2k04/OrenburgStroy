import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getCities } from './repository.js';
import RootRoute from './routes/RootRoute.jsx';
import CityRoute, { loader as cityLoader } from './routes/CityRoute.jsx';

const result = await getCities();

const router = new createBrowserRouter([
    {
        path: '/',
        element: <RootRoute {...result} />,
        children: [
            {
                path: '/:aliasCity',
                element: <CityRoute />,
                loader: cityLoader
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);


