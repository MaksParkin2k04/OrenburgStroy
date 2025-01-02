import { useLoaderData, useNavigate } from 'react-router-dom';
import { getProject } from '../repository.js';
import ProjectPage from '../pages/ProjectPage.jsx'

export async function loader({ request, params }) {
    const project = await getProject(params.aliasProject);
    return project;
}

export default function ProjectRoute() {
    const data = useLoaderData();
    return (<ProjectPage {...data.project} />);
}