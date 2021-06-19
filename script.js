const googleDatabase = [
    'cars.com',
    'souprecipes.com',
    'flowers.com',
    'roads.com',
    'musclecars.com',
    'newcar.com',
    'classiccars.com',
    'vintagecars.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('cars', googleDatabase));

module.exports = googleSearch;