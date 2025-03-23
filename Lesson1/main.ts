// let a: string = 'Hello Okten!';

//let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];


//Варіант №1
// type UserType = {
//     name: string;
//     age: number;
//     status: boolean;
//     greeting: (str: string) => string
// }

//Варіант №2

// interface IUser {
//     name: string;
//     age: number;
//     status: boolean;
//     greeting?: (str: string) => string
// }

//Варіант №3
// class User {
//     name: string;
//     age: number;
//     status: boolean;
//
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//
//     greeting() {
//         console.log('Hello!');
//     }
// }
//
//
//
//
// let users = [
//     new User('Jams', 37, false),
// ];
//
// console.log(users);



//#dYQNrBV

// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log */


//
// let a: string = 'hello';
// let b: string = 'owu';
// let c: string = 'com';
// let d: string = 'ua';
// let e: number = 1;
// let f: number = 10;
// let t: number = -999;
// let r: number = 123;
// let k: number = 3.14;
// let j: number = 2.7;
// let h: number = 16;
// let s: boolean = true;
// let l: boolean = false;
//
// console.log('Змінна a:', a);
// console.log('Змінна b:', b);
// console.log('Змінна c:', c);
// console.log('Змінна d:', d);
// console.log('Змінна e:', e);
// console.log('Змінна f:', f);
// console.log('Змінна t:', t);
// console.log('Змінна r:', r);
// console.log('Змінна k:', k);
// console.log('Змінна j:', j);
// console.log('Змінна h:', h);
// console.log('Змінна s:', s);
// console.log('Змінна l:', l);




//
// #6Qb97gsv
// 2. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let firstName: string = 'Сергій';
// let middleName: string = 'Дмитрович';
// let lastName: string = 'Трефель';
//
// console.log(lastName + ' ' + firstName + ' ' + middleName);


// #4N0y5tufA
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//  let a = 100; let b = '100'; let c = true;

// let a: number = 100;
//
// let b: string = '100';
// let c: boolean = true;
//
// console.log('Тип змінної а:', typeof a);
// console.log('Тип змінної b:', typeof b);
// console.log('Тип змінної c:', typeof c);



//
// #ruUtWDUI
//За допомогою 3х різних prompt() отримати 3 слова
// які являються вашими Імям, По-Батькові та роками. та вивести в консоль



// let firstName: string | null = prompt("Введіть Ваше ім'я");
// console.log(firstName);
// let middleName: string | null = prompt("Введіть Ваше По-Батькові");
// console.log( middleName);
// let age: string | null = prompt("Введіть Ваш вік");
//
// console.log( age + ' ' + 'років');