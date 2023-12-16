// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
    this.id = id;
    // this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let usersArray = [];
usersArray[0] = new User(1, 'aaa', 'Aaa', 'mail1', 101);
usersArray[1] = new User(2, 'bbb', 'Bbb', 'mail2', 102);
usersArray[2] = new User(3, 'ccc', 'Ccc', 'mail3', 103);
usersArray[3] = new User(4, 'ddd', 'Ddd', 'mail4', 104);
usersArray[4] = new User(5, 'fff', 'Fff', 'mail5', 105);
usersArray[5] = new User(6, 'ggg', 'Ggg', 'mail6', 106);
usersArray[6] = new User(7, 'hhh', 'Hhh', 'mail7', 107);
usersArray[7] = new User(8, 'sss', 'Sss', 'mail8', 108);
usersArray[8] = new User(9, 'www', 'Www', 'mail9', 109);
usersArray[9] = new User(0, 'qqq', 'Qqq', 'mail0', 100);
console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(usersArray.filter((value) => (value.id % 2) === 0));
// if (value.id != 0) {
//     value.id % 2 === 0;
// }

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(usersArray.sort((a,b) => (a.id - b.id)));