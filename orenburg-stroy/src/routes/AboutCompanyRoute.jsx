import { useLoaderData, Link } from 'react-router-dom';
import { getAboutCompanyPage } from '../repository.js';
import AboutCompanyPage from '../pages/AboutCompanyPage.jsx'

export async function loader({ request, params }) {
    const page = await getAboutCompanyPage();
    return page;
}

export default function AboutCompanyRoute() {
    const data = useLoaderData();
    return (<AboutCompanyPage {...data} />);
}