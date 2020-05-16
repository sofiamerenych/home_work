// 1. Створіть дві змінні типу стрінг і виведіть їх в консоль разом, використовуючи конкатинацію стрiнги.

let car = 'fiat'
let model = 'panda'
console.log(`Your car is ${car} ${model}`)

// 2. Створіть змінну типу стрінг і виведіть в консоль її довжину.

let song = 'What is love'
console.log(song.length)

// 3. Створіть змінну типу стрінг і виведіть в консоль перший символ стрінги.

let song1 = 'Baby dont hurt me'
console.log (song1[0])

// 4. Створіть змінну типу стрінг і виведіть в консоль останній символ, довільної стрінги.

let song1 = 'Baby dont hurt me'
console.log (song1[song1.length-1])

//ще можна вирізати всі інші букви

console.log (song1.slice(-1))

// 5. Створіть змінну типу стрінг і приведіть змінну до верхнього регістру.

let who = 'sherlock'
console.log (who.toUpperCase())

// 6. Створіть змінну типу стрінг і приведіть змінну до нижнього регістру.

let who1 = 'ShErLoCk'
console.log (who1.toLowerCase())

// 7. Створіть змінну і присвойте в неї дату вашого народження.

let birthday = new Date (1992, 08, 27)

// 8. Виведіть рік вашого народження (Використовуючи змінну з 7 завдання).

console.log(birthday.getFullYear())

// 9. Виведіть місяць вашого народження (Використовуючи змінну з 7 завдання).

console.log(birthday.getMonth())

// 10. Виведіть день вашого народження (Використовуючи змінну з 7 завдання).

console.log (birthday.getDate())

// 11. Виведіть в консоль рік місяць день вашого народження через тире (-) (Використовуючи змінну з 7 завдання).

console.log (`${birthday.getFullYear()} - ${birthday.getMonth()} - ${birthday.getDate()}`)

// 12. Створіть нову дату яка має 14 годину і 23 хвилини.

let birthdayMisha = new Date (1990, 07, 16)
birthdayMisha.setHours (14, 23)
console.log (birthdayMisha)

// 13. Порівняйте дві дати між собою і результат виведіть в консоль.

console.log(birthday>birthdayMisha)
true
console.log(birthday<birthdayMisha)
false
