import { Outlet, Link } from 'react-router-dom';
import NavBarMenu from '../Components/NavBarMenu'
import Typography from '@mui/material/Typography';
export default function RootPage({ cities, error, menuItems }) {

    return (
        <>

            < NavBarMenu menuItems={menuItems} />

          
      

            {cities ? cities.map((city, index) => (<div key={city.id}></div>)) : <div> Сервер временно не доступен </div>}


            <Outlet />
        </>
    );
}