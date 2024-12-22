import { Outlet, Link } from 'react-router-dom';
import NavBarMenu from '../Components/NavBarMenu'


export default function RootPage({ cities, error, menuItems, navigatedPage }) {

    return (
        <>
            <NavBarMenu cities={cities} menuItems={menuItems} navigatedPage={navigatedPage} />
            <Outlet />
        </>
    );
}