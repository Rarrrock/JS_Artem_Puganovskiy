<!--==========================-->
<!-- - є масив-->
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
<!--&#45;&#45; відсортувати його за спаданням за monthDuration-->
<!--&#45;&#45; відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців-->
<!--&#45;&#45; за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}-->

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter((course) => course.monthDuration > 5));
console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course})));