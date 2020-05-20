//1 Створіть об'єкт Person який буде містити імя, прізвище і метод для виводу повного імені і просто імені за допомогою трьох різних варіантів

//2 Просто функції

let createPerson = (name, surname) => {
    let Person = {}
    Person.name = name
    Person.surname = surname
    return `${name} ${surname}`
}

//3 Функції конструктору

function Person (name, surname){
    this.name = name
    this.surname = surname
    return `${name} ${surname}`
}

//4 Класу

let Person = class {
    constructor (name, surname){
        this.name = name
        this.surname = surname
        return `${name} ${surname}`
    }
}
