import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const message = await getMessage();

async function getMessage() {
    const response = await fetch('/api/');

    if (response.status === 200) {
        const data = await response.json();
        return { title: data.title, error: undefined };
    } else {
        return { title: undefined, error: 'Сервер недоступен. Перезагрузите страницу.' };
    }
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {message.title ?
            <h1>{message.title} - Данные получены с сервера.</h1>
            :
            <h3 style={{ color: 'red' }}>{message.error}</h3>
        }
    </StrictMode>,
)


