import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getCities, getCity } from './repository.js'

const result = await getCities();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {result.status === 200 ?
            <ul>
                {result.cities.map((city, index) => (
                    <li key={city.id}>{`${index + 1}.${city.name}`}</li>
                ))}
            </ul>
            :
            <h3 style={{ color: 'red' }}>{result.error}</h3>
        }
    </StrictMode>
);


