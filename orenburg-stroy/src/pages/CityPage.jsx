import { Link } from 'react-router-dom';

export default function CityPage({ city, error }) {

    const projects = (city === undefined) ? null : city.projects.map((project) => (
        <li key={project.id}>
            <h4>{project.name}</h4>
            <div>{project.images.map((image) => (<img src={`/${image.path}`} alt={image.alt} />))}</div>
            <div>{project.description}</div>
            <Link to={`/${city.alias}/${project.alias}`}>Подробнее...</Link>
        </li>
    ));

    return (
        <>
            <h1>{city.name}</h1>
            {city ? <ul>{projects}</ul> : null}
        </>
    );
}