const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const q4 = document.querySelector('.q4');
const q5 = document.querySelector('.q5');
const q6 = document.querySelector('.q6');
const q7 = document.querySelector('.q7');
const q8 = document.querySelector('.q8');
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
  { first: '🐣', last: '🐣🐣🐣🐣🐣🐣🐣🐣🐣🐣🐣', year: 1879, passed: 1955 },
  { first: '🐤', last: '🐤🐤🐤🐤', year: 1643, passed: 1727 },
  { first: '🐔', last: '🐔🐔', year: 1564, passed: 1642 },
  { first: '🐥', last: '🐥🐥🐥🐥🐥🐥🐥🐥🐥', year: 1867, passed: 1934 },
  { first: '🐓', last: '🐓🐓🐓', year: 1571, passed: 1630 },
  { first: '🐔', last: '🐔', year: 1473, passed: 1543 },
  { first: '🐥', last: '🐥🐥🐥🐥🐥🐥🐥🐥', year: 1858, passed: 1947 },
  { first: '🐣', last: '🐣🐣🐣🐣🐣🐣🐣🐣🐣🐣🐣🐣', year: 1898, passed: 1979 },
  { first: '🐤', last: '🐤🐤🐤🐤🐤', year: 1815, passed: 1852 },
  { first: '🐥', last: '🐥🐥🐥🐥🐥🐥🐥', year: 1855, passed: 1905 },
  { first: '🐣', last: '🐣🐣🐣🐣🐣🐣🐣🐣🐣🐣', year: 1878, passed: 1968 },
  { first: '🐤', last: '🐤🐤🐤🐤🐤🐤', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);
q1.innerHTML = JSON.stringify(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const name = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(name);
q2.innerHTML = name;

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sort = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(sort);
q3.innerHTML = JSON.stringify(sort);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const reduce = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(reduce);
q4.innerHTML = reduce

// 5. Sort the inventors by years lived
const sortLive = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
console.table(sortLive);
q5.innerHTML = JSON.stringify(sortLive);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
q6.innerHTML = ["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone"];

// 7. sort Exercise
// Sort the people alphabetically by last name
// 英文姓名一般都是先寫名(First Name)，再寫姓(Last Name/Surname)，若是先寫姓再寫名，標準格式是會加上一個逗號(，)
const sortPeople = people.sort((a, b) => a.split(', ')[0] > b.split(', ')[0] ? 1 : -1);
console.log(sortPeople);
q7.innerHTML = sortPeople;

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const sum = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(sum);
q8.innerHTML = JSON.stringify(sum);
