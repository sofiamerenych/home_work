// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.

let pets = ['cat', 'dog', 'fish', 'hamster']
let i = 0

while (i < pets.length){
  console.log (pets[i]);
  ++i
}

//або

for (let pet of pets) {
    console.log (pet)
}


// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.

let myHouse = {
    floors: 2,
    rooms: 4,
    garage: 1,
    kitchen: 1
}
console.log (myHouse)

for (let key in myHouse) {
    console.log (key, myHouse[key])
}
//я тут ще спробувала те саме зробити з об'єктом в об'єкті, перевіриш? консоль показує то шо треба, але раптом)
let myHouse = {
    floors: 2,
    garage: 1,
    kitchen: 1,
    rooms: {
        firstFloor: 2,
        secondFloor: 3
    }
}

for (let room in myHouse) {
    console.log (room);
    if (typeof myHouse[room] === 'object'){
        for (let roomFloor in myHouse[room]) {
            console.log (room, roomFloor)
        }
    }
}

//OR
function showObjectKeys (arg1) {
    for (let key in arg1) {
        console.log (key);
        if (typeof arg1[key] === 'object'){
            for (let keyInner in arg1[key]) {
                console.log (key, keyInner)
          }
      }
  }
}


// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.pop ();
console.log (numbers.length);


// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву

let numbers = [1, 2, 3, 4, 5];
numbers.push (15);
console.log (numbers.length);

// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву

let letters = ['a', 'b', 'c', 'd'];
letters.shift ()
console.log (letters.length)

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву

let letters = ['a', 'b', 'c', 'd'];
letters.unshift ('alfa');
console.log (letters.length);


// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву

showArr (arg1) {
    for (let i = 0; i < languages.length; i++) {
        console.log (arg1[i])
        if (Array.isArray (arg1[i])) {
            showArr (arg1[i])
        } 
    }
}

//я над цією функцією просиділа десь 2 години. проклинала все на світі. підбирала, пробувала, комбінувала - і о богі, воно запрацювало!!


// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту


function showObjectKeys (arg1) {
    for (let key in arg1) {
        console.log (key);
        if (typeof arg1[key] === 'object'){
           showObjectKeys (arg1[key])
        }
    }
}

// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.

let languages = ['hungarian', ['ukrainian', 'polish', 'slovakian'], ['german', 'norwegian', 'dutch', ['icelandic']],['french', 'italian', 'spanish']]
typeof (languages)
console.log (languages)

showArr (languages)

// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.

let myHouse = {
    floors: 2,
    garage: 1,
    kitchen: 1,
    rooms: {
        firstFloor: {
            mamaRoom: 1,
            mishaRoom: 1   
        }       
    }
}
console.log (myHouse)
typeof (myHouse)

showObjectKeys (myHouse)
