import { useLoaderData, Link } from 'react-router-dom';
import { getCity } from '../repository.js';
import CityPage from '../pages/CityPage.jsx'
import RootPage from '../pages/RootPage.jsx'
import ClientForm from '../Components/ClientForm.jsx'
import NavBarMenu from '../Components/NavBarMenu.jsx'


export async function loader({ request, params }) {
    const aliasCity = params.aliasCity;
    return await getCity(params.aliasCity);
}



const menuItems = [
       {
            id: 'i1',
            name: 'Новостройки',
            path: '/'
        },

        {
            id: 'i2',
            name: 'Проекты',
            path: '/'
        },

        {
            id: 'i3',
            name: 'О компании',
            path: '/'
        },

        {
            id: 'i4',
            name: 'Контакты',
            path: '/'
        },
];

   


function projectsCallback(project) {


    const info = 
        
            {

            id: project.id,
            name: project.name,
            image: project.image,
            descriprion: project.description,

            }
        
    console.log(project)
}

export default function CityRoute() {
    const data = useLoaderData();


    return (
        <> 

            <CityPage {...data} projectsCallback={projectsCallback} menuItems={menuItems}  />

            <ClientForm projectsCallback={projectsCallback} />


            <RootPage menuItems={menuItems} />
        </>



    );
}