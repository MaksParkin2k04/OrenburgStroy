import { useLoaderData, useNavigate } from 'react-router-dom';
import { getCity } from '../repository.js';
import CityPage from '../pages/CityPage.jsx'

import ClientForm from '../Components/ClientForm.jsx'


export async function loader({ request, params }) {
    const aliasCity = params.aliasCity;
    return await getCity(params.aliasCity);
}

export default function CityRoute() {
    const data = useLoaderData();
    const navigate = useNavigate();

    function projectsCallback(project) {
        navigate(`/project/${project.alias}`);
    }

    return (
        <>
            <CityPage {...data} projectsCallback={projectsCallback} />
        </>



    );
}