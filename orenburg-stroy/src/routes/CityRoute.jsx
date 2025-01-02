import { useLoaderData, Link } from 'react-router-dom';
import { getCity } from '../repository.js';
import CityPage from '../pages/CityPage.jsx'

import ClientForm from '../Components/ClientForm.jsx'


export async function loader({ request, params }) {
    const aliasCity = params.aliasCity;
    return await getCity(params.aliasCity);
}


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
            <CityPage {...data} projectsCallback={projectsCallback} />
        </>



    );
}