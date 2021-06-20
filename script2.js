const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
};

const getPeople = async(fetch) => {
    const getRequest = await fetch('https://swapi.dev/api/people');
    const data = await getRequest.json();    
    return {
        count: data.count,
        results: data.results
    };
};

// getPeople(fetch);

const getChuck = async(fetch) => {
    const getRequest = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await getRequest.json();    
    return {
        url: data.url,
        value: data.value
    };
};

// getChuck(fetch)

module.exports = {
    getPeoplePromise,
    getPeople,
    getChuck
};