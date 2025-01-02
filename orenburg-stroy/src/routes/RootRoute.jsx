import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RootPage from '../pages/RootPage.jsx'

export default function RootRoute({ cities, error, status }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 200 && cities && cities.length > 0) {
            const aliasCity = cities[0].alias;
            cityRedirect(aliasCity)
        }
    }, [cities, error, status]);

    const [menuItems] = useState([
        {
            id: 1,
            name: "Новостройки",
            select: false,
            path: "/newbuildings"
        },
        {
            id: 2,
            name: "Проекты",
            select: true,
            path: "/projects"
        },
        {
            id: 3,
            name: "О компании",
            select: false,
            path: "/aboutcompany"
        },
        {
            id: 4,
            name: "Контакты",
            select: false,
            path: "/contacts"
        }
    ]);

    const navigatedPage = (page) => {
        const path = page.path;

        
    }

    return (<RootPage cities={cities} error={error} menuItems={menuItems} navigatedPage={navigatedPage}  />);

    function cityRedirect(aliasCity) {
        navigate(`/${aliasCity}`);
    }
}
