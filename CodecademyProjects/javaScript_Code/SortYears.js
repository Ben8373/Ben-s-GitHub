const sortYears = arr => arr.sort((x, y) => y - x);

const checkYears = (year1, year2) => year2 - year1;

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));

