import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RootPage from '../pages/RootPage.jsx'

export default function RootRoute({ cities, error, status }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 200 && cities && cities.length > 0) {
            const aliasCity = cities[0].alias;
            cityRedirect(aliasCity)
        }
    }, [cities, error, status]);

    return (<RootPage cities={cities} error={error} />);

    function cityRedirect(aliasCity) {
        navigate(`/${aliasCity}`);
    }
}
