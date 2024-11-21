import { Outlet, Link } from 'react-router-dom';

export default function RootPage({ cities, error }) {
    return (
        <>
            {cities ? cities.map((city, index) => (<div key={city.id}>{index + 1}. {city.name}</div>)) : <div>Сервер не доступен</div>}
            <Outlet />
        </>
    );
}