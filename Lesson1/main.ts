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




//------------------------------Масиви та об'єкти-------------------------
//
// 2.1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль




// let arr: (number | boolean | string)[] = [123, -5, true, 'abc', 33.5, 45, 'Lemon', 'Tomato', false, 'undefined'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

//2.2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

//let bookThriller = {
//        title: 'UNDER THE SAME STARS',
//        pageCount: 480,
//        genre: 'thriller'
// }
//
//
//let bookMystery = {
//     title: 'A SLANT OF LIGHT',
//     pageCount: 192,
//     genre: 'historical mystery'
// }
//
//let bookRomance = {
//     title: 'UNLOVED',
//     pageCount: 464,
//     genre: 'romance'
// }

//2.3 - Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

//let bookThriller = {
//     title: 'UNDER THE SAME STARS',
//     pageCount: 480,
//     genre: 'thriller',
//     authors: [{name: 'Libba Bray', age: 60}]
// }
//
//
//let bookMystery = {
//     title: 'A SLANT OF LIGHT',
//     pageCount: 192,
//     genre: 'historical mystery',
//     authors: [{name: 'Laura Whitcomb', age: 66}]
// }
//
//let bookRomance = {
//     title: 'UNLOVED',
//     pageCount: 464,
//     genre: 'romance',
//     authors: [{name: 'Peyton Corinne', age: 33}]
// }


//2.4 - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

//let users = [
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: '1234sdxa'
//     },
//     {
//         name: 'Bred',
//         userName: 'sorm',
//         password: '1234Hgfdn'
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 1234
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 'Gtsjnin'
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 'mcmdmcuuuj'
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 'jdncjdnchne'
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 'oicjdmmvijc'
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 'pdkmcdwcun'
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 'dkmcuijedjfin'
//     },
//     {
//         name: 'Serhii',
//         userName: 'serg',
//         password: 'wkcmeiijncuiern'
//     },
// ]
//
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);


//2.5 - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

//let weather = [
// {
// day: ‘monday’,
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: ‘tuesday’,
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: ‘wednesday’,
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: ‘thursday’,
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: ‘friday’,
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: ‘saturday’,
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: ‘sunday’,
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// }
// ]

//Логічні розгалуження:

//2.6 - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


//let x = +prompt('Введіть число:');
//
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

//2.7 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//let time = +prompt('Введіть число від 0 до 59:');
//
// if (time >= 0 && time <= 15) {
//     console.log('Ваше число попадає до першої четверті');
// } else if(time > 15 && time <= 30) {
//     console.log('Ваше число попадає до другої четверті');
// } else if(time > 30 && time <= 45) {
//     console.log('Ваше число попадає до третьої четверті');
// } else if(time > 45 && time <= 59) {
//     console.log('Ваше число попадає до четвертої четверті');
// }

// 2.8 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

//let day = +prompt('Введіть число від 1 до 31:');
//
// if(day >=1 && day <= 10) {
//     console.log('Ваше число потрапляє в першу декаду місяця');
// } else if(day > 10 && day <= 20) {
//     console.log('Ваше число потрапляє в другу декаду місяця');
// } else if(day > 20 && day <= 31) {
//     console.log('Ваше число потрапляє в третю декаду місяця');
// }

//2.9 - Скласти розклад на тиждень за допомоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).


//let day = +prompt('Введіть порядковий номер дня тижня:');
//
// switch (day) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('Ви ввели не вірне число!')
//
// }

//2.10- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


//let a = +prompt('Введіть перше число a:');
// let b = +prompt('Введіть друге число b:');
//
// if(a > b) {
//     console.log('Число а більше за b і дорівнює:', a);
// } else if(a === b) {
//     console.log('Число a дорівнює числу b:', a)
// } else {
//     console.log('Число b більше за а і дорівнює:', b);
// }

//2.11 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default",
// якщо ви намагаєтесь присвоїти в неї false-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


//let x;
//
// x = undefined;
//
// x = !Boolean(x) ? console.log("default") : true;


//2.11 - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


//let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// if (coursesAndDurationArray[0].monthDuration > 5) {
//  console.log("Супер");
//  }
//
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log("Супер");
// }
//
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log("Супер");
// }
//
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log("Супер");
// }
//
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log("Супер");
// }
//
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log("Супер");
// }
//
//
// for (let i = 0; i < coursesAndDurationArray.length; i+=1) {
//      if(coursesAndDurationArray[i].monthDuration > 5) {
//          console.log("Супер");
//      }
// }