// ## Array Cardio Day 2

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

    // 抓到今年
    const currentYear = (new Date()).getFullYear();

    // 回傳每一個人的年紀
    const personYear = people.map(person => currentYear - person.year);
    console.table(personYear);

    const isAdult = people.some(person => (currentYear - person.year >= 19));
    console.log(isAdult);


    // Array.prototype.every() // is everyone 19 or older?

    const isAllAdult = people.every(person => (currentYear - person.year >= 19))
    console.log(isAllAdult);


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const findComment = comments.find(comment => (comment.id === 823423)).text
    console.log(findComment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 123523

    // 找到 123523 的 Index
    const findIndexComment = comments.findIndex(comment => (comment.id === 123523))
    console.log(findIndexComment);

    // 刪除原陣列資料 splice
    // comments.splice(findIndexComment,1);
    // console.table(comments);

    // 刪掉資料並產生新的陣列
    const newComments = [
        ...comments.slice(0,findIndexComment), // 複製起始 index(0) 到 findIndexComment (不包含自己)
        ...comments.slice(findIndexComment+1) // 複製 findIndexComment+1 到之後的資料
    ]
    console.table(newComments);
