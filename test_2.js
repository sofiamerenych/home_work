// 1. Створіть обєкт та масив
// * Використовуйте обєкт і масив створені в першому заданні у всіх наступних завданнях

let user = {
  name: 'Sofiya',
  surname: 'Merenych',
  age: 27,
  languages: ['English', 'German', 'Norwegian']
}

let workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

// 2. Додайте до обєкту ключ "birthdate" типу Date

user.birthdate = new Date (1992, 08, 27)

// 3. Додайте новий елемент в кінець масиву

workdays.push ('Sunday')

// 4. Видаліть з обєкту доданий ключ у завданні 3

delete user.birthdate

// 5. Видаліть елемент з масиву доданий у завданні 4

workdays.pop ()

// 6. Додайте до обєкту метод який буде виводити ваше імя і прізвище.

user.getFullName = function (name, surname) {
    return`${user.name} ${user.surname}`
}

// 7. Створіть конструктор який буде відтворювати функціонал який є наявний в обєкті

class User1 {
  constructor (name, surname, age, languages){
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.languages = languages
      this.getFullName = function (name, surname) {
          return`${this.name} ${this.surname}`
      }
  }
}

// 8. Створіть новий конструктор який буде унаслідувати функціонал конструктору з попереднього звдання і буде мати додатковий метод для виводу дати народження.

class User2 extends User1 {
    getBirthdate = () => {
        return this.birthdate;
    }
}


// 9. Створіть новий eлемент за допомогою конструктору з попереднього завдання і виведіть імя та прізвище або дату народження.
misha = new User2 ('Misha', 'Hrab', 29, ['Ukrainian', 'Russian'])

misha.getBirthdate = new Date (1990, 07, 16)

misha.getFullName ()
"Misha Hrab"
