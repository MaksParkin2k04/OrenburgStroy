// [HttpGet("/api/cities/")]
export async function getCities() {
    const response = await fetch('/api/cities/');
    const cities = response.status === 200 ? await response.json() : undefined;

    let error = undefined;
    switch (response.status) {
        case 200:
            error = undefined;
            break;
        default:
            error = 'Error';
            break;
    }

    return { cities, error, status: response.status };
}

//  [HttpGet("/api/{aliasCity}")]
export async function getCity(aliasCity) {
    const response = await fetch(`/api/${aliasCity}`);
    const city = response.status === 200 ? await response.json() : undefined;

    let error = undefined;
    switch (response.status) {
        case 200:
            error = undefined;
            break;
        default:
            error = 'Error';
            break;
    }

    return { city, error, status: response.status };
}