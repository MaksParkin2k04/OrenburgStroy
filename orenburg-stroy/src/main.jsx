import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getCities } from './repository.js';
import RootRoute from './routes/RootRoute.jsx';
import CityRoute, { loader as cityLoader } from './routes/CityRoute.jsx';
import AboutCompanyRoute, { loader as aboutCompanyLoader } from './routes/AboutCompanyRoute.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import ProjectRoute, { loader as projectLoader } from './routes/ProjectRoute.jsx';

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
            },
            {
                path: 'project/:aliasProject',
                element: <ProjectRoute />,
                loader: projectLoader
            },
            {
                path: 'aboutcompany',
                element: <AboutCompanyRoute />,
                loader: aboutCompanyLoader
            },
            {
                path: 'contacts',
                element: <ContactsPage />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);


