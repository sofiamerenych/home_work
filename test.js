// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення

let first = 'You can change this string'
const second = false 

// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

//short comment

/* And this
is a 
very long
comment*/

// 3) Створіть "масив" який буде містити 5 довільних значень.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з масиву перше і останнє значення.
// * Виведіть змінну в консоль за допомогою "console.log"

let animals = ['panda', 'kangaroo', 'chicken', 'fox', 'deer'];
console.log (animals) 
delete animals [0]
delete animals [animals.length - 1]
console.log 
//console returns (5) [empty, "kangaroo", "chicken", "fox", empty]

// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з об'єкту перший і останній ключ
// * Виведіть змінну в консоль за допомогою "console.log"

let myFamily = {
  'mother': 'Liana',
  'father': 'Ivan',
  'husband': 'Mykhailo',
  'cousin1': 'Andrii',
  'cousin2': 'Stepan'
}
console.log (myFamily)

delete myFamily.mother
true
delete myFamily.cousin2
true
console.log (myFamily)

//console returns {father: "Ivan", husband: "Mykhailo", cousin1: "Andrii"}


// 5) Напишіть всі способи створення функції.

function func (){}
let func2 = function () {}


// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

let a = 1
let b = 2
let c = 3
function add (arg1, arg2, arg3) {return arg1+arg2+arg3}
add (b, c, a)
// console returns 6

add (5, 4, 3)
//console returns 12

// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"

let worktype = 'fulltime'
let salary = (worktype === 'fulltime') ? '1000': '500'
console.log (salary) 
//console returns 1000

let worktype = 'parttime'
let salary = (worktype === 'fulltime') ? '1000': '500'
console.log (salary)
//console returns 500

// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
// * Зробіть два різні приклади

let friend = prompt ('Enter the name of your friend')
//Enter Oxana
console.log (friend)
//returns Oxana


