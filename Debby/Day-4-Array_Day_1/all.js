// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1543, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(a => (a.year >= 1500 && a.year < 1600));
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map((inventor => `捐贈者：${inventor.first} ${inventor.last}` ));
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthdate = inventors.sort((a,b) => (b.year - a.year));
console.table(birthdate);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYear = inventors.reduce((total,inventor) => (total + (inventor.passed - inventor.year)),0);
console.log(totalYear);

// 5. Sort the inventors by years lived
const yearList = inventors.sort(function(a,b){
  const prevInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return prevInventor - nextInventor;
});
console.table(yearList);

// 列出所有歲數
const newYearList = yearList.map( inventor => inventor.passed - inventor.year);
console.table(newYearList);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
    .map(link => link.textContent)
    .filter(streetName => streetName.includes('de'));
console.log(de);

// 7. sort Exercise
// Sort the "people" alphabetically by last name
const lastNameList = people.sort(function(lastOne,nextOne){
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
  });
console.table(lastNameList);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj,item){
  // if there is no object item, then object item is equal(等於) to zero.
  // console.log(item);
  if(!obj[item]){
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
},{});

console.log(transportation);


