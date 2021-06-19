const googleSearch = require('./script');

dbMock = [
    'chess.com',
    'hamburger.com',
    'ford.com',
    'candy.com',
    'chessgame.com'
];

describe('googleSearch', () => {
    it('it is a silly test', () => {
        expect('hello').toBe('hello');
    }); 
    
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('che', dbMock)).toEqual(['chess.com', 'chessgame.com'])
    });
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});
