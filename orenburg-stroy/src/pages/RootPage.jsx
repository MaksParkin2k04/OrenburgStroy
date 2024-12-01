import { Outlet, Link } from 'react-router-dom';
import NavBarMenu from '../Components/NavBarMenu'
export default function RootPage({ cities, error }) {
    return (
        <>
            < NavBarMenu cities={cities} />
            {cities ? cities.map((city, index) => (<div key={city.id}></div>)) : <div> Сервер временно не доступен </div>}
            <Outlet />
        </>
    );
}