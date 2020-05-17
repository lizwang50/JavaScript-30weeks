const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const isAudlt = people.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log(`is at least one person 19 or older? ${isAudlt}`);
answer1.innerHTML = isAudlt;
const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19);
console.log(`is everyone 19 or older? ${allAdult}`);
answer2.innerHTML = allAdult;

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(comment => comment.id === 823423);
console.log(findComment);
answer3.innerHTML = `text: ${findComment.text}, id: ${findComment.id}`;

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findCommentIndex = comments.findIndex(comment => comment.id === 823423);
console.log(`findCommentIndex: ${findCommentIndex}`);
comments.splice(findCommentIndex, 1);
console.log(comments);
answer4.innerHTML = JSON.stringify(comments)
