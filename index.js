// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"

let myVar1 = 7;
const myVar2 = 'some information';
var myVar3 = 'true';

// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення

let changeVar = 94;
const noChangeVar = "Barcelona"


// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

// here's a one row comment

/* and this
comment
is a bit
larger */


// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let quarantine = 'ends soon'
typeof quarantine
console.log (quarantine)

// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

const endDate = 11
typeof endDate
console.log (endDate)


// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let iAmDeveloper = false
typeof iAmDeveloper
console.log (iAmDeveloper)

// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let user1 = { name: 'Sofiya', age: 27, job: 'writer', favshow: 'Lucifer', favdestination: 'Malta'};
typeof user1
console.log (user1)

let favshows = ['Lucifer', 'The Flash', 'Good Omens'];
user1.fawshow = favshows;
console.log (user1);

//seems like I managed to insert an array into an onject. wow! console said it worked!


// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

const dogNames = ['Gendalf', 'Sirko', 'Psiuk', 'Shojeshojeshoje', 'Sobaken'];
dogNames [0];
dogNames [dogNames.length - 1];

typeof dogNames
console.log (dogNames)

// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

const greeting = function () {Hello};
typeof freeting;
console.log (greeting);

// 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

var flower;
var tree = "big"

typeof flower;

//in the console we get type - undefined
console.log (flower)

// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

var a = null;
typeof a
// console says it's an object
console.log (a)
// console returns null


// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.

let admin = {name: 'Sofiya', surname: 'Merenych', birth: '27.09.1992', age: 27, location: 'Uzhhorod', male: false, favdrink: ['masala', 'cocoa', 'shou-puer']}
