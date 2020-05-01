
// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.

alert ('hello, user');
let user = 'Sofiya';
alert ('Hello, ' + user);
//received alert 'Hello, Sofiya'

// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в конnameомогою "console.log"

let name = prompt ('Enter your name')
// In the pop-up I entered my name Sofiya, which was automatically assigned to a variable
console.log (name) 
Sofiya

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let cats = prompt ('How many cats do you have?, 13)
// in the pop-up I entered 2, which was assigned to a variable cats
console.log (cats)
2
                   
// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let deutsch = confirm ('Sprechen Sie Deutsch?')
// In the pop-up I choose OK, so the variable deutsch becomes true
console.log (deutsch)
true

// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна
let ownCat = confirm ('Do you have a cat?')
console.log (ownCat) 
true
if (ownCat) {
  console.log ('1')
} 

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"
let books = prompt ('Your favorite book')

if (books == 'Harry Potter') {
  console.log ('1')
} else {
  console.log ('2')
}

//Enter 'Harry Potter' - receive 1, if I enter Lord of the Rings - receive 2.


// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"

let books = prompt ('Your favorite book')

if (books == 'Harry Potter') {
    console.log ('1')
} else if 
   (books == 'Lord of the Rings') {
    console.log ('2')
} else {
    console.log ('3')
}
// When I enter 'Harry Potter' - I receive '1', 'Lord of the Rings' - '2', "Alice in Wonderland' - '3'.  

// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо вiдповідь на питання була позитивна

let ice = confirm ('Do you like ice-cream?')
console.log (ice)
true

switch (ice) {
  case true : {
   '1'
    break
  }
  case false: {
    '0'
    break
  }
}
// console shows '1'

// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"

let show = prompt ('What is your favorite TV universe?')
//entered DC
console.log (show)
DC

switch (show) {
    case 'DC': {
      console.log ('1')
      break
    }

    default: {
      console.log ('2')
    break
    }
}

//console returns '1'

// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"

let hero = prompt ('Who is your favorite DC hero?')
//entered Flash
console.log (hero)
Flash

switch (hero) {
    case 'Arrow': {
        console.log ('1')
        break
    }
    case 'Flash' : {
        console.log ('2')
        break
    }
    default: {
        console.log ('3')
    }
}

//console returns '2'

// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади

let language = prompt ('What is your mother tongue?')
//In pop-up enter 'Ukrainian'
console.log (language)
"Ukrainian"
switch (language) {
    case 'Ukrainian': {
        console.log ('1')
        break
    }
    case 'English': {
        console.log ('2')
        break
    }
    default : {
        console.log ('3')
        break
    }
}
//In console we receive 1

let language = prompt ('What is your mother tongue?')
//In pop-up enter 'Danish'

if (language === 'Ukrainian') {
    console.log ('1')
} else if 
    (language === 'English') {
    console.log ('2')
} else {
    console.log ('3')
}
// In console we receive 3


let catName = prompt ('What is your cat name?')
// In pop-up enter 'Morgana'
console.log (catName)
Morgana

catName
"Morgana"
switch (catName) {
    case 'Morgana' : {
        console.log ('Black cat')
        break
    }
    case 'Marusia' : {
        console.log ('Grey cat')
        break
    }
    default : {
        console.log ('Unknown cat')
        break
    }
}
//console returns 'Black cat'
let catName = prompt ('What is your cat name?')
// Enter 'Marusia'
console.log (catName)
Marusia
if (catName === 'Morgana') {
    console.log ('Black cat')
} else if 
    (catName === 'Marusia') {
    console.log ('Grey cat')
} else {
    console.log ('Unknown cat')
} 

//console returns 'Grey cat'

