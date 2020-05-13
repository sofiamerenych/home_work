// 1. Створіть функцію за допомогою "function expression".

function greeting (name) {
    console.log ('Hello, ' + name)
}

let name = 'Simon'
greeting ()

// 2. Створіть функцію за допомогою "new Function".

let greetingNew = new Function  ('name1', 'console.log ("Hello, " + name1)')
greetingNew ('Petro')

// 3. Створіть функцію за допомогою "arrow function".

let greetingArrow = (name2) => console.log ('Hello, ' + name2)
let name2 = 'Mary'
greetingArrow (name2)

// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.

function hi (obj, cb) {
  console.log ('Hello')
}

function bye (){
   console.log ('Bye-bye') 
}

hi ({}, bye)

// 5. Створіть рекурсивну функцію.
let arr = ['green', ['yellow', 'red', ['black', 'white']], 'purple', ['orange', 'blue']]

function showArr (arg1) {
    for (let i = 0; i < arg1.length; i++) {
        console.log (arg1[i])
        if (Array.isArray (arg1[i])) {
            showArr (arg1[i])
        } 
    }
}

// 6. Створіть самовикликаючусь функцію.

(function (name3) {
    console.log ('Hello, ' + name3)
}) ('Oleg')

// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.

function func2 (a, b, c, d, e){
    console.log (arguments)
}

func2 (func2, 'what', false, null, 3)
