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

// interface IBook {
//     title: string,
//     pageCount: number,
//     genre: string
// }
//
// let bookThriller: IBook = {
//        title: 'UNDER THE SAME STARS',
//        pageCount: 480,
//        genre: 'thriller'
// }
//
//
//
// let bookMystery: IBook = {
//     title: 'A SLANT OF LIGHT',
//     pageCount: 192,
//     genre: 'historical mystery'
// }
//
// let bookRomance: IBook = {
//     title: 'UNLOVED',
//     pageCount: 464,
//     genre: 'romance'
// }

//2.3 - Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// interface IBook {
//         title: string,
//     pageCount: number,
//     genre: string,
//     authors: [{name: string, age: number}]
// }
//
//
// let bookThriller: IBook = {
//     title: 'UNDER THE SAME STARS',
//     pageCount: 480,
//     genre: 'thriller',
//     authors: [{name: 'Libba Bray', age: 60}]
// }
//
//
// let bookMystery: IBook = {
//     title: 'A SLANT OF LIGHT',
//     pageCount: 192,
//     genre: 'historical mystery',
//     authors: [{name: 'Laura Whitcomb', age: 66}]
// }
//
// let bookRomance: IBook = {
//     title: 'UNLOVED',
//     pageCount: 464,
//     genre: 'romance',
//     authors: [{name: 'Peyton Corinne', age: 33}]
// }


//2.4 - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

// interface IUser {
//     name: string,
//     userName: string,
//     password: string
// }
//
// let users: IUser[] = [
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


// interface IWeather {
//     day: string,
//     temperatureInTheMorning: number,
//     temperaturePerDay: number,
//     temperatureInTheEvening: number
// }
//
//
//
// let weather: IWeather[] = [
// {
// day: 'monday',
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: 'tuesday',
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: 'wednesday',
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: 'thursday',
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: 'friday',
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: 'saturday',
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// {
// day: 'sunday',
// temperatureInTheMorning: 5,
// temperaturePerDay: 15,
// temperatureInTheEvening: 7
// },
// ]



//Логічні розгалуження:

//2.6 - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let input: string | null = prompt('Введіть число:');
// let x: number = input !== null ? +input : 0;
//
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

//2.7 - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let input: string | null = prompt('Введіть число від 0 до 59:');
// let time: number = input !== null ? +input : 0;
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

// 2.8 - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let input: string | null= prompt('Введіть число від 1 до 31:');
// let day: number = input !== null ? +input : 0;
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

// let input: string | null = prompt('Введіть порядковий номер дня тижня:');
// let day: number = input !== null ? +input : 0;
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

// let inputFirstNumber: string | null = prompt('Введіть перше число a:');
// let a = inputFirstNumber !== null ? +inputFirstNumber : 0;
//
// let inputSecondNumber: string | null = prompt('Введіть друге число b:');
// let b: number = inputSecondNumber !== null ? +inputSecondNumber : 0;
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
// якщо ви намагаєтесь присвоїти в неї false-значення (хибноподібні, тобто ті, які приводиться до false,
// а це 0 null undefined і тд).


// let x;
//
// x = undefined;
//
// x = !Boolean(x) ? console.log("default") : true;


//2.11 - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// interface ICoursesArray {
//     title: string,
//     monthDuration: number,
// }
//
//
// let coursesAndDurationArray: ICoursesArray[] = [
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


// 3.1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// for (let i: number = 0; i < 10; i += 1) {
//      document.write(`<div><h3>Lorem ipsum dolor.</h3></div>`)
//  }

//3.2 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i: number = 0; i < 10; i += 1) {
//     document.write(`<div>
// <h3>Lorem ipsum dolor. Index - ${i}</h3>
// </div>`)
// }

//3.3 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


// let i: number = 0;
//
//  while ( i < 20) {
//     document.write(`<h1>Lorem ipsum dolor.</h1>`);
//     i += 1;
// }

//3.3 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i: number = 0;
//
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor. Index - ${i}</h1>`);
//     i += 1;
// }



//3.4 - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву



// let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
//     document.write(`<ul>`)
// for (let item of listOfItems) {
//      document.write(
// `
//      <li>${item}</li>
// `
//      );
// }
// document.write(`</ul>`);

//3.5 Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// interface IProduct {
//     title: string,
//     price: number,
//     image: string,
// }
//
// let products: IProduct[] = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];

// for (let product of products) {
//     for (let fieldName in product) {
//         document.write(`<div class="product-card">
//         <h3 class="product-title">${product['title']}. Price - '${product['price']}'</h3>
//         <img src="${product['image']}" alt="" class="product-image">
// </div>`)
//     }
// }

// for (const product of products) {
//         document.write(`<div class="product-card">
//         <h3 class="product-title">${product.title}. Price - ${product.price} UAH</h3>
//          <img src="${product.image}" alt="${product.title}" class="product-image">
//       </div>`)
// }


//3.6 є масив
// let users = [
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
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років


// interface IUser {
//     name: string,
//     age: number,
//     status: boolean,
// }
//
// let users: IUser[] = [
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
//
//
//
// for (const user of users) {
//     if (user.status) {
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }
//
// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }

// ----------------------------------------------------------------------------------//


//#I2XsG6f
//4.1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function squareOfRectangle(a: number, b: number): number {
//
//    return  a * b;
// }
//
// squareOfRectangle(7, 8);


// #ETGAxbEn8l
//4.2 - створити функцію яка обчислює та повертає площу кола з радіусом r


// function squareCircle(r: number): number {
//     return Math.PI * Math.pow(r, 2);
//
//  }
//
//  squareCircle(2);

//#Mbiz5K4yFe7
//4.3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder(r: number, h: number): number {
//
//     return 2 * Math.PI * r * (h + r);
// }
//
// squareCylinder(3, 5);


// #SIdMd0hQ
//4.4 - створити функцію яка приймає масив та виводить кожен його елемент

 // function outputsArray(arr: any): void {
 //
 //     for (const arrElement of arr) {
 //
 //           console.log(arrElement);
 //       }
 //   }
 //
 //
 //   outputsArray([1, 5, 7, 8, 9]);

//#59g0IsA
//4.5 - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

// function outputText(text: string): void {
//     return document.write(`<p>${text}`)
// }
//
// outputText('Lorem ipsum dolor sit amet.');

//#hOL6126
// 4.6- створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий


// function outputList(text: string): void {
// return document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
//
// outputList('lorem home!');


//#0Kxco1edSN
//4.7 - створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//Зроблено за допомогою відеорозв'язку

// function outputList(text: string, quantity: number): void {
//     document.write(`<ul>`);
//     for (let i: number = 1; i <= quantity; i += 1) {
//        document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
//
// }
//
// outputList('Hello!', 15);


//#gEFoxMMO
// 4.8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

// function arrayItem(arr: any): void {
//     document.write(`<ul>`);
//     for (let i: number = 0; i < arr.length; i += 1) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//
//     document.write(`</ul>`);
// }
//
// arrayItem([1, 'hello!', true, 234, 'milk', false, 546, 'tomato']);

//#bovDJDTIjt
//4.9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// function objectItem(object: any): void {
//     document.write(`<ul>`);
//     for (const item of object) {
//         document.write(`<li>${item.id} ${item.name} ${item.age}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// interface IUser {
//     id: number,
//     name: string,
//     age: number,
// }
//
// let users: IUser[] = [
//     {
//         id: 1,
//         name: 'Serhii',
//         age: 45
//     },
//     {
//         id: 2,
//         name: 'Jon',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Volodimir',
//         age: 35
//     },
//
// ];
//
// objectItem(users);

//#pghbnSB
//4.10 - створити функцію яка повертає найменьше число з масиву

// function arrayMinNumber(arr: number[]): number {
//     let min: number = arr[0];
//     for (let i: number = 0; i < arr.length; i += 1){
//         let number: number = arr[i];
//         if(number < min) {
//             min = number;
//         }
//
//     }
//     return min;
// }
//
// document.write(`Найменьше число в масиві дорівнює:`, arrayMinNumber([33, 45, -25, 123, 67, 89]).toString());



//#EKRNVPM
//4.11 - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr: number[]): number {
//     let result: number = 0;
//     for (let i: number = 0; i < arr.length; i += 1) {
//         result += arr[i];
//     }
//     return result;
// }
//
//
// console.log(sum([3, 3, 4, 5, 20, 5]));
//
// document.write('Сума чисел масиву дорівнює: ', sum([3, 3, 4, 5, 20, 5]).toString());

//#kpsbSQCt2Lf
//4.12 - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//Зроблено за допомогою відеорозв'язку

// function swap(arr: any, index1: number, index2: number): any {
//      let temp: any = arr[index1];
//      arr[index1] = arr[index2];
//      arr[index2] = temp;
//      return arr;
//  }
//
//  console.log(swap([11,22,33,44],0,1) );

//#mkGDenYnNjn
//4.13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// type Currency = {
//     currency: string;
//     value: number;
// };
//
// function exchange(sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number | null {
//     let chosenCurrency: Currency | undefined;
//
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             chosenCurrency = item;
//             break; // Зупиняємо цикл, якщо знайшли валюту
//         }
//     }
//
//     if (!chosenCurrency) {
//         console.error('Валюта не знайдена');
//         return null; // Обробляємо випадок, коли валюта не знайдена
//     }
//
//     return sumUAH / chosenCurrency.value;
// }
//
// console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));

// --------------------------------------------------------------------------------------------------------//

//Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// 5.1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let squareOfRectangle = (a: number, b: number): number => a * b;
//
// console.log(squareOfRectangle(2, 10));


// #ETGAxbEn8l
// 5.2 - створити функцію яка обчислює та повертає площу кола з радіусом r

// let squareCircle = (r: number): number => Math.PI * Math.pow(r, 2);
//
// console.log(squareCircle(2));


// #Mbiz5K4yFe7
// 5.3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let squareCylinder = (r: number, h: number): number => 2 * Math.PI * r * (h + r);
//
// console.log(squareCylinder(5, 10));


// #SIdMd0hQ
// 5.4 - створити функцію яка приймає масив та виводить кожен його елемент

// let outputsArray = (arr: any[]): void => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// outputsArray([1, 5, 7, 8, 9, 'one']);

// #59g0IsA
// 5.5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let outputText = (text: string): void => document.write(`<p>${text}`);
//
// outputText('Okten!');


// #hOL6126
// 5.6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let outputList = (text: string): void =>
//                 document.write(
//                     `<ul>
//                  <li>${text}</li>
//                  <li>${text}</li>
//                  <li>${text}</li>
//               </ul>`)
//
//
// outputList('Okten!');




// #0Kxco1edSN
// 5.7 - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// let outputList = (text: string, quantity: number): void =>
// {
//     document.write(`<ul>`);
//     for (let i = 1; i <= quantity; i += 1) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
//
//
// outputList('Okten!', 20);




// #gEFoxMMO
// 5.8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayItem = (arr: any[]): void =>
// {
//     document.write(`<ul>`);
//
//        for (let i = 0; i < arr.length; i += 1) {
//            document.write(`<li>${arr[i]}</li>`);
//        }
//
//        document.write(`</ul>`);
// }
//
// arrayItem([1, 'hello!', true, 234, 'milk', false, 546, 'tomato']);



// #bovDJDTIjt
// 5.9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// interface IUser {
//     id: number,
//     name: string,
//     age: number
// }
//
//
// let objectItem = (object: IUser[]) =>
// {
//          document.write(`<ul>`);
//        for (const item of object) {
//            document.write(`<li>${item.id} ${item.name} ${item.age}</li>`)
//        }
//        document.write(`</ul>`);
// }
//
//    let users = [
//        {
//            id: 1,
//            name: 'Serhii',
//            age: 45
//        },
//        {
//            id: 2,
//            name: 'Jon',
//            age: 25
//        },
//        {
//            id: 3,
//            name: 'Volodimir',
//            age: 35
//        },
//
//    ];
//
//    objectItem(users);




// #pghbnSB
// 5.10 - створити функцію яка повертає найменьше число з масиву

// let findMinNumber = (arr: number[]): number => {
//     let min: number = arr[0];
//     for (let i: number = 0; i < arr.length; i += 1) {
//         let number: number = arr[i];
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// };
//
// document.write(`Найменше число в масиві: ${findMinNumber([33, 45, -25, 123, 67, 89])}`);



// #EKRNVPM
// 5.11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let sum = (arr: number[]): number =>
// {
//          let result: number = 0;
//        for (let i: number = 0; i < arr.length; i += 1) {
//            result += arr[i];
//        }
//        return result;
// }
//
// console.log(sum([3, 3, 4, 5, 20, 5]));



// #kpsbSQCt2Lf
// 5.12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr: any[], index1: any, index2: any): any[] =>
// {
//           let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//         return arr;
// }
//
// console.log(swap([11,22,33,44],0,1) );



// #mkGDenYnNjn
// 5.13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// type Currency = {
//     currency: string;
//     value: number;
// };

// const exchange = (sumUAH: number, currencyValues: Currency[], exchangeCurrency: string): number | null => {
//     let chosenCurrency: Currency | undefined;
//
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             chosenCurrency = item;
//             break; // Зупиняємо цикл, якщо знайшли валюту
//         }
//     }
//
//     if (!chosenCurrency) {
//         console.error('Валюта не знайдена');
//         return null; // Повертаємо null, якщо валюта не знайдена
//     }
//
//     return sumUAH / chosenCurrency.value;
// };
//
// console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));


// ----------------------------------------------------------------------------------------------------------//

//#dFeorS3m7u
// 6.1 - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// const strHello: string = 'hello world';
// console.log('Довжина змінної strHello:', strHello.length);
//
// const strLorem: string = 'lorem ipsum';
// console.log('Довжина змінної strLorem:', strLorem.length);
//
// const strJs: string = 'javascript is cool';
// console.log('Довжина змінної strJs:', strJs.length);



// 6.2- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// const strHello: string = 'hello world';
// console.log(strHello.toUpperCase());
//
// const strLorem: string = 'lorem ipsum';
// console.log(strLorem.toUpperCase());
//
// const strJs: string = 'javascript is cool';
// console.log(strJs.toUpperCase());


//#ClDsAm7xba7
// 6.3 - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// const strHello: string = 'HELLO WORLD';
// console.log(strHello.toLowerCase());
//
// const strLorem: string = 'LOREM IPSUM';
// console.log(strLorem.toLowerCase());
//
// const strJs: string = 'JAVASCRIPT IS COOL';
// console.log(strJs.toLowerCase());



// #0b89BkYZwu
// 6.4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str: string = ' dirty string   ';
// console.log(str.trim());


//#bfoJuse4ZzP
// 6.5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

 // let str: string = 'Ревуть воли як ясла повні';
 //
 //  let stringToArray = (str: string): string[] =>
 //  {
 //      if (str) {
 //          return str.split(' ');
 //      }
 //      return ['']
 //  }
 //
 //  console.log(stringToArray(str));


//#Rbr5kEQ
// 6.6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// const arr: number[] = [10,8,-7,55,987,-1011,0,1050,0];
// const arrToString: string[] = arr.map((value: number) => value.toString());
//
// console.log(arrToString);


//#5hqyKTfmc
// 6.7 - створити функцію sortNums(array,direction), яка приймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

 // let nums: number[] = [11,21,3];
 //
 //   let sortNums = (nums: number[], direction: string) => {
 //       if(direction === 'descending') return nums.sort((num1: number, num2: number) => num2 - num1);
 //
 //        if(direction === 'ascending') return nums.sort((num1: number, num2: number) => num1 - num2);
 //        else {
 //           return ('Enter the correct question!');
 //       }
 //   }
 //
 //   console.log(sortNums(nums, 'descending'));


//#yo06d74c1C
// 6.8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  =========================

// interface ICourse {
//     title: string,
//     monthDuration: number
// }
//
//
// const coursesAndDurationArray: ICourse[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// interface IMapCourse extends ICourse{
//     id: number;
// }
//
// const mapCourses: IMapCourse[] = coursesAndDurationArray
//         .sort((a, b) => b.monthDuration - a.monthDuration)
//         .filter((course) => course.monthDuration > 5)
//         .map((course, index) => {
//         let newCourse: IMapCourse[] = {
//         id: index + 1,
//         title: course.title,
//         mapCourses: course.monthDuration,
//
//         }
//         return newCourse;
//         });
// console.log(mapCourses);

// const mapCourses: IMapCourse[] = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter((course) => course.monthDuration > 5)
//     .map((course, index) => ({id: index + 1, ...course}));
//
// console.log(mapCourses);


// #bolvdlhP
//  6.9 - описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// interface ICard {
//     cardSuit: string;
//     value: string;
//     color: string;
// }
//
//  const suits: string[] = ['spade', 'diamond','heart', 'clubs'];
//    const values: string[] = ['6', '7', '8', '9', '10','jack','queen','king', 'ace'];
//
//    const cards: ICard[] = [];
//
//    for (const suit of suits) {
//        for (const value of values) {
//           const card: ICard = {
//               cardSuit: suit,
//               value: value,
//               color: suit === 'heart' || suit === 'diamond' ? 'red' : 'black'
//           };
//            cards.push(card);
//        }
//    }

   // console.log(cards);


// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade') );
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));


//#EP5I1UUzAX
// 6.10 - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// interface ICard {
//     cardSuit: 'spade' | 'diamond' | 'heart' | 'club';
// }
//
// interface ISortedCards {
//     spades: ICard[];
//     diamonds: ICard[];
//     hearts: ICard[];
//     clubs: ICard[];
// }
//
// const cards: ICard[] = [
//     { cardSuit: 'spade' },
//     { cardSuit: 'diamond' },
//     { cardSuit: 'heart' },
//     { cardSuit: 'club' }
// ];
//
// let sortCards: ISortedCards = cards.reduce<ISortedCards>((acc, card) => {
//     if (card.cardSuit === 'spade') {
//         acc.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         acc.diamonds.push(card);
//     } else if (card.cardSuit === 'heart') {
//         acc.hearts.push(card);
//     } else if (card.cardSuit === 'club') {  // виправлено "clubs" -> "club"
//         acc.clubs.push(card);
//     }
//     return acc;
// }, { spades: [], diamonds: [], hearts: [], clubs: [] });
//
// console.log(sortCards);
//#4LJn7zBx
// 6.11 - взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker



// interface ICourse {
//     title: string,
//     monthDuration: number,
//     hourDuration: number,
//     modules: string[]
// }
//
//
// const coursesArray: ICourse[] = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
//
// const coursesSass = coursesArray.filter(course => {
//     return course.modules.includes('sass');
// })
//
// console.log(coursesSass);
//
// const coursesDocker = coursesArray.filter(course => {
//     return course.modules.includes('docker');
// });
//
// console.log(coursesDocker);

// ------------------------------------------------------------------------------------- //


//#XjJuucOMR0
// 7.1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


// interface IUser {
//     id: number;
//     name: string;
//     surname: string;
//     email: string;
//     phone: string;
// }
//
// class User implements IUser {
//     constructor(
//         public id: number,
//         public name: string,
//         public surname: string,
//         public email: string,
//         public phone: string
//     ) {}
// }
//
// const users: User[] = [
//     new User(1, 'vasya', 'pupkin', 'asd@asd.com', '380935554345'),
//     new User(2, 'kolya', 'repkin', 'asd@asd.com', '380935554345'),
//     new User(3, 'olya', 'trokin', 'asd@asd.com', '380935554345'),
//     new User(4, 'petya', 'stopkin', 'asd@asd.com', '380935554345'),
//     new User(5, 'sveta', 'dronff', 'asd@asd.com', '380935554345'),
//     new User(6, 'dora', 'kurtz', 'asd@asd.com', '380935554345'),
//     new User(7, 'lisa', 'pupkin', 'asd@asd.com', '380935554345'),
//     new User(8, 'max', 'pupkin', 'asd@asd.com', '380935554345'),
//     new User(9, 'alex', 'pupkin', 'asd@asd.com', '380935554345'),
//     new User(10, 'vasya', 'pupkin', 'asd@asd.com', '380935554345'),
// ];
//
// console.log(users);


//#2ikXsE2WiKZ
// 7.2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

 // const filterUsers: User[] = users.filter(user => (user.id % 2 === 0));
 //
 //  console.log(filterUsers);


//#pOeHKct
// 7.3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// const sortUsers: User[] = filterUsers.sort((user1, user2) => user1.id - user2.id);
//
// console.log(sortUsers);


//#nkMXISv
// 7.4 - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
// }
//
// class Product implements IProduct {
//     constructor(
//         public id: number,
//         public name: string,
//         public price: number
//     ) {}
// }
//
// interface IClient {
//     id: number;
//     name: string;
//     surname: string;
//     email: string;
//     phone: string;
//     order: Product[];
// }
//
// class Client implements IClient {
//     constructor(
//         public id: number,
//         public name: string,
//         public surname: string,
//         public email: string,
//         public phone: string,
//         public order: Product[]
//     ) {}
// }
//
// const clients: Client[] = [
//     new Client(1, 'vasya', 'pupkin', 'pup@gmail.com', '+380975645654', [new Product(1, 'apple', 34), new Product(4, 'kiwi', 55)]),
//     new Client(2, 'olga', 'tronss', 'tronss@gmail.com', '+380975646754', [new Product(1, 'apple', 34), new Product(5, 'apricot', 57)]),
//     new Client(3, 'max', 'ford', 'ford@gmail.com', '+380678956453', [new Product(3, 'fig', 29)]),
// ];
//
// console.log(clients);


//#8abtVjRv
// 7.5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// const sortClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
//
// console.log(sortClients);


//#vV9a6584I5
// 7.6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// class Car {
//     model: string;
//     producer: string;
//     year: number;
//     maxSpeed: number;
//     engineVolume: string;
//     driver?: { name?: string; age?: number; experience?: number };
//
//     constructor(model: string, producer: string, year: number, maxSpeed: number, engineVolume: string) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//     drive(): void {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
//     }
//
//         info(): void {
//             console.log("Інформація про авто:");
//              for (const [key, value] of Object.entries(this)) {
//                  console.log(`${key}:`, value);
//             }
//         }
//
//     increaseMaxSpeed(newSpeed: number): void {
//         if(newSpeed > 0) {
//             this.maxSpeed += newSpeed;
//         }
//     }
//
//     changeYear(newYear: number): void {
//         if (newYear > 1885) {
//             this.year = newYear;
//         }
//     }
//
//     addDriver(driverObject: { name?: string; age?: number; experience?: number }): void {
//         this.driver = driverObject;
//     }
//
//
// }
//
// const car = new Car("Camry", "Toyota", 2023, 200, "2.4L");
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2015);
// car.addDriver({ name: "John Doe", age: 35, experience: 10 });
//
// console.log(car);



//#5kla3yMpgp
// 7.7 - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     model: string;
//     producer: string;
//     year: number;
//     maxSpeed: number;
//     engineVolume: string;
//     driver?: { name?: string; age?: number; experience?: number };
//
//     constructor(model: string, producer: string, year: number, maxSpeed: number, engineVolume: string) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//     drive(): void {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
//     }
//
//         info(): void {
//             console.log("Інформація про авто:");
//              for (const [key, value] of Object.entries(this)) {
//                  console.log(`${key}:`, value);
//             }
//         }
//
//     increaseMaxSpeed(newSpeed: number): void {
//         if(newSpeed > 0) {
//             this.maxSpeed += newSpeed;
//         }
//     }
//
//     changeYear(newYear: number): void {
//         if (newYear > 1885) {
//             this.year = newYear;
//         }
//     }
//
//     addDriver(driverObject: { name?: string; age?: number; experience?: number }): void {
//         this.driver = driverObject;
//     }
//
//
// }
//
// const car = new Car("Camry", "Toyota", 2023, 200, "2.4L");
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2015);
// car.addDriver({ name: "John Doe", age: 35, experience: 10 });
//
// console.log(car);

//#zg6Fifnqig
// 7.8 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Cinderella {
//     name: string;
//     age: number;
//     footSize: number;
//
//     constructor(name: string, age: number, footSize: number) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

//class Cinderella {
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const cinderellas: Cinderella[] = [
//     new Cinderella('Olia', 23, 35),
//     new Cinderella('Ella', 21, 34),
//     new Cinderella('Jane', 26, 36),
//     new Cinderella('Dora', 28, 37),
//     new Cinderella('Anne', 22, 38),
//     new Cinderella('Jess', 21, 33),
//     new Cinderella('Abigail', 20, 35),
//     new Cinderella('Diana', 24, 38),
//     new Cinderella('Eliza', 23, 37),
//     new Cinderella('Emma', 23, 35)
//
// ];
//
// class Prince {
//     name: string;
//     age: number;
//     shoeHeFound: number;
//     wife?: Cinderella;
//
//     constructor(name: string, age: number, shoeHeFound: number) {
//         this.name = name;
//         this.age = age;
//         this.shoeHeFound = shoeHeFound;
//     }
//
//         princeWife(cinderellas: Cinderella[]): void {this.wife = cinderellas.find((cinderella) => cinderella.footSize === this.shoeHeFound);};
//
//
// }
//
//
// const prince = new Prince('Jon', 33, 21);
//
// prince.wife = princeWife;



// // Поиск жены
// console.log(prince.findWife(cinderellas));;
//
// console.log(prince);


//
// class Prince {
//
//     constructor(name, age, shoeHeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeHeFound = shoeHeFound;
//     }
//
// }
//
// const prince = new Prince('Jon', 33, 21);



//for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.shoeHeFound) prince.wife = cinderella;
// }

//const princeWife = cinderellas.find(cinderella => cinderella.footSize === prince.shoeHeFound);
//
// prince.wife = princeWife;

// ---------------------------------------------------------------------------------------//

//
// class Cinderella {
//     name: string;
//     age: number;
//     footSize: number;
//
//     constructor(name: string, age: number, footSize: number) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const cinderellas: Cinderella[] = [
//     new Cinderella("Olia", 23, 35),
//     new Cinderella("Ella", 21, 34),
//     new Cinderella("Jane", 26, 36),
//     new Cinderella("Dora", 28, 37),
//     new Cinderella("Anne", 22, 38),
//     new Cinderella("Jess", 21, 33),
//     new Cinderella("Abigail", 20, 35),
//     new Cinderella("Diana", 24, 38),
//     new Cinderella("Eliza", 23, 37),
//     new Cinderella("Emma", 23, 35),
// ];
//
// class Prince {
//     name: string;
//     age: number;
//     shoeHeFound: number;
//     wife?: Cinderella;
//
//     constructor(name: string, age: number, shoeHeFound: number) {
//         this.name = name;
//         this.age = age;
//         this.shoeHeFound = shoeHeFound;
//     }
//
//     findWife(cinderellas: Cinderella[]): void {
//         this.wife = cinderellas.find((cinderella) => cinderella.footSize === this.shoeHeFound);
//     }
// }
//
// const prince = new Prince("Jon", 33, 35);
//
// // Поиск жены
// prince.findWife(cinderellas);
//
// console.log(prince);



//#gsKLAsNWM
// 7.9 - Через Array.prototype. створити власний foreach, filter

// Расширение интерфейса массива в TypeScript
// interface Array<T> {
//     myForEach(callback: (item: T, index?: number, array?: T[]) => void): void;
//     myFilter(callback: (item: T, index?: number, array?: T[]) => boolean): T[];
// }
//
// // Реализация метода myForEach
// Array.prototype.myForEach = function <T>(callback: (item: T, index?: number, array?: T[]) => void): void {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };
//
// // Реализация метода myFilter
// Array.prototype.myFilter = function <T>(callback: (item: T, index?: number, array?: T[]) => boolean): T[] {
//     const arr: T[] = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// };
//
// // Тестирование myForEach
// [2, 3, 4, 5].myForEach((x) => console.log(x));
//
// // Тестирование myFilter
// const users = [
//     { name: "vasya", age: 33 },
//     { name: "petya", age: 35 },
//     { name: "kolya", age: 37 },
//     { name: "sasha", age: 33 },
// ];
//
// const result = users.myFilter((user) => user.age === 33);
//
// console.log(result);

//-----------------------------------------------------------------------------------//

//#AiN5CoUQ
// 8.1 - Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


// interface IUser {
//     id: number,
//     name: string,
//     surname: string,
//     skills: string[],
//     foo: () => void,
//     greeting: () => void
//
// }

// interface IUser {
//     id: number;
//     name: string;
//     surname: string;
//     skills: string[];
//     foo: () => void;
//     greeting: () => void;
// }
//
// function copyObjFun<T extends Record<string, any>>(obj: T): T {
//     if (!obj || typeof obj !== "object") {
//         throw new Error("Помилка!");
//     }
//
//     let functions: { key: string; functionCopy: Function }[] = [];
//
//     for (const key in obj) {
//         if (typeof obj[key] === "function") {
//             functions.push({ key, functionCopy: obj[key] });
//         }
//     }
//
//     // Клонируем объект без методов
//     const copyObj: Partial<T> = Object.assign({}, obj);
//
//     // Восстанавливаем методы
//     for (const func of functions) {
//         (copyObj as any)[func.key] = func.functionCopy;
//     }
//
//     return copyObj as T;
// }
//
// const user: IUser = {
//     id: 1,
//     name: "petya",
//     surname: "stronov",
//     skills: ["html", "js", "node.js"],
//     foo() {
//         console.log("Foo executed");
//     },
//     greeting() {
//         console.log("Hello!");
//     },
// };
//
// const copiedUser = copyObjFun(user);
// console.log(copiedUser);
// copiedUser.greeting();
// copiedUser.foo();

// -----------------------------------------------------------------------------------//




// const user: IUser = {
//     id: 1,
//     name: 'petya',
//     surname: 'stronov',
//     skills: ['html', 'js', 'node.js'],
//     foo() {},
//     greeting() {}
// }



// function copyObjFun(obj) {
//     let functions = [];
//     for (const key in obj) {
//         if (typeof obj[key] === 'function') {
//             const functionCopy = obj[key].bind({});
//             functions.push({functionCopy, key});
//         }
//     }
//
//     if (obj) {
//         const copyObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             copyObj[func.key] = func.functionCopy;
//         }
//
//         return  copyObj;
//     }
//     throw new Error('Помилка!');
//
// }


// console.log(copyObjFun(user));



//#iz6emEsP2BA
// 8.2 - є масив

// interface IArray {
//     id?: number,
//     title: string,
//     monthDuration: number
// }
//
// let coursesAndDurationArray: IArray[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// //за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// //     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
//
//
// const newCoursesAndDurationArray: IArray[] = coursesAndDurationArray.map((course: IArray, index: number): IArray =>
//     ({...course, id: index + 1}));
//
// console.log(newCoursesAndDurationArray);



