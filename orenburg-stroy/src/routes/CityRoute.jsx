import { useLoaderData, Link } from 'react-router-dom';
import { getCity } from '../repository.js';
import CityPage from '../pages/CityPage.jsx'

export async function loader({ request, params }) {
    const aliasCity = params.aliasCity;
    return await getCity(params.aliasCity);
}

export default function CityRoute() {
    const data = useLoaderData();

    return (<CityPage {...data} />);
}