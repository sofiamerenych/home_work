// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let a = 177;
a = String(a);
typeof a;
console.log (a);
"177";


// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let b = 874;
b = Boolean(b);
typeof b;
console.log (b);
true;

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let c = 5;
c = null;
// can't explain this. I couldn't find how to change a number to Null, it also didn't work with "Null()". I tried different writings and c = null worked
typeof c;
"object";
console.log (c);

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let d = "87";
d = Number(d);
typeof d;
"number";
console.log;
87;

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let e = "panda";
e = Boolean(e);
typeof e;
"boolean";
console.log (e);
true;

let j = "";
j = Boolean(j);
typeof j;
"boolean";
console.log (j);
false;

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let f - "fiat";
f = null;
typeof f;
"object";
console.log (f);
null;

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let h = true;
h = String(h);
typeof h;
"string";
console.log (h);
"true";

let i = false;
i = String(i);
console.log (i);
"false";
// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let q = true;
q = Number(q);
typeof q;
"number";
console.log (q);
1;

let g = false;
g = Number(g);
console.log (g);
0;
// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let k = false;
k = null;
typeof k;
object;
console.log (k);
null;

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let l = null;
l = String(l);
typeof l;
"string";
console.log (l);
null;

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let n = null;
n = Number(n);
typeof n;
"number";
console.log (n);
0;

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let o = null;
o = Boolean(o);
typeof o;
"boolean";
console.log (o);
false;

// 13) Напишіть всі способи створення функції.
whatever = function () {alert ("sofiya")};
whatever ();

function something () {alert ("merenych")}
something ();

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію

function nothing (){}
nothing ();


// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію

function myName (){ alert ("Sofiya")}
myName ();


// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

let x = 12;
let y = 22;
let z = 122;

function xxx (arg1) {alert (arg1)}
xxx (z)

xxx (7)



// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.

function suma (arg1, arg2) {return arg1 + arg2};
suma (x,y)
34
suma (x,z)
134
suma (4,6)
10

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
function suma (arg1, arg2, arg3) {return arg1 + arg2 + arg3};
suma (x, y, z);
156
suma (x, y, -13);
21
suma (3, 4, -7);
0
function some (one, two, three) {alert (one+two+three)}
some (1,2,3)
6
