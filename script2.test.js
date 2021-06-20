const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', () => {
    expect.assertions(1)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82);
    })
});

it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })
});

it('calls swapi to get Chuck Norris', () => {
    expect.assertions(1)
    return swapi.getChuck(fetch).then(data => {
        expect(data.value).not.toBe(null);
    })
});