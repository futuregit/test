const googleDatabase = [
    'cars.com',
    'souprecipes.com',
    'flowers.com',
    'roads.com',
    'musclecars.com'
];

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(website => {
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('soup'));