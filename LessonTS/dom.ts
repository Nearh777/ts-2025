
//--------------------------------------  Lesson9  -----------------------------//

//#8Nmt60ZT
// 9.1
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let div: HTMLDivElement = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//
//
// const cloneNode = div.cloneNode(true)
//
//
// document.body.append(div, cloneNode);


//#OPLI89c9G
// 9.2 - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// type ArrayType = string[];
//
// let arr: ArrayType = ['Main','Products','About us','Contacts'];
//
// let menu: HTMLUListElement = document.createElement('ul');
// menu.classList.add('menu');
//
//
//   for (const item of arr) {
//        let li: HTMLElement = document.createElement('li');
//        li.innerText = item;
//        menu.appendChild(li);
//    }
//
//
// document.body.appendChild(menu);

//#jeBqHV525U5
// 9.3 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// interface ICourse {
//     title: string,
//     monthDuration: number
// }
//
// let coursesAndDurationArray: ICourse[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
//
// for (const course of coursesAndDurationArray) {
//
//         let divCourse: HTMLDivElement = document.createElement('div');
//         divCourse.classList.add('courseStyle');
//         divCourse.textContent = `Course: ${course.title},  Duration: - ${course.monthDuration} month.`;
//         document.body.appendChild(divCourse);
//
// }


//#Kx1xgoKy8
// 9.4 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

//
// interface ICourse {
//     title: string,
//     monthDuration: number
//
// }
//
// let coursesAndDurationArray: ICourse[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
//
//    for (const course of coursesAndDurationArray) {
//
//            let divCourse: HTMLDivElement = document.createElement('div');
//            divCourse.classList.add('item');
//
//            let title: HTMLHeadingElement = document.createElement('h2');
//            title.classList.add('heading')
//            title.textContent = course.title;
//
//            let desc: HTMLParagraphElement = document.createElement('p');
//            desc.classList.add('description');
//            desc.textContent = `${course.monthDuration} months`;
//
//            divCourse.append(title, desc);
//
//            document.body.appendChild(divCourse);
//
//    }



//=========================
//
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//
// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.


// interface ICourse {
//     title: string,
//     monthDuration: number,
//     hourDuration: number,
//     modules: string[]
// }
//
//
//
// let coursesArray: ICourse[] = [
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
// // Iterate through the courses array
// for (const course of coursesArray) {
//     // Create wrapper div for each course
//     let courseDiv: HTMLDivElement = document.createElement('div');
//     courseDiv.classList.add('wrapper__courses');
//
//     // Create and set title
//     let title: HTMLHeadingElement = document.createElement('h2');
//     title.textContent = course.title;
//
//     // Create duration container
//     let duration: HTMLDivElement = document.createElement('div');
//     duration.classList.add('duration');
//
//     // Create and set month duration
//     let monthDuration: HTMLParagraphElement = document.createElement('p');
//     monthDuration.textContent = `Month: ${course.monthDuration}`;
//
//     // Create and set hour duration
//     let hourDuration: HTMLParagraphElement = document.createElement('p');
//     hourDuration.textContent = `Hour: ${course.hourDuration}`;
//
//     // Append duration elements
//     duration.append(monthDuration, hourDuration);
//
//     // Create modules list
//     let modulesList: HTMLUListElement = document.createElement('ul');
//     modulesList.classList.add('list');
//
//     // Add each module as a list item
//     for (const module of course.modules) {
//         let li: HTMLLIElement = document.createElement('li');
//         li.textContent = module;
//         modulesList.appendChild(li);
//     }
//
//     // Append all elements to the course div
//     courseDiv.append(title, duration, modulesList);
//
//     // Append course div to document body
//     document.body.appendChild(courseDiv);
// }



  // for (const course of coursesArray) {
  //
  //      let modulesArray: ICourse[] = [];
  //      coursesArray.forEach((module: ICourse): number => (modulesArray.push([...module.modules])));
  //
  //      let courseDiv = document.createElement('div');
  //      courseDiv.classList.add('wrapper__courses');
  //
  //      let title = document.createElement('h2');
  //      title.textContent = course.title;
  //
  //      let duration = document.createElement('div');
  //      duration.classList.add('duration');
  //
  //      let monthDuration = document.createElement('p');
  //      monthDuration.textContent = `Month: ${course.monthDuration}`;
  //
  //      let hourDuration = document.createElement('p');
  //      hourDuration.textContent = `Hour: ${course.hourDuration}`;
  //
  //      duration.append(monthDuration, hourDuration);
  //
  //     let modulesList = document.createElement('ul');
  //     modulesList.classList.add('list')
  //
  //     for (const modules of modulesArray) {
  //         let li = document.createElement('li');
  //         for (const module of modules) {
  //             li.textContent = module;
  //
  //         }
  //         modulesList.appendChild(li);
  //          }
  //
  //      courseDiv.append(title, duration, modulesList);
  //
  //      document.body.appendChild(courseDiv);
  //  }


//-------------------------------------------------  10  -----------------------------------------------------------//

//#sH8c4er
// 10.1 - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// let div: HTMLDivElement = document.createElement('div');
// div.setAttribute('id', 'text');
// div.classList.add('box');

// let button: HTMLButtonElement = document.createElement('button');
// button.classList.add('button');
//
// document.body.append(div, button);
//
//
// const handleClick = () => {
//     div.classList.toggle('hidden');
//
// }
//
// button.addEventListener('click', handleClick);




// const buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
// const button: HTMLButtonElement = buttons[0];
//
// button.onclick = function (): void {
//     document.getElementById('text').classList.toggle('hidden') as HTMLDivElement | null;
// }


//#j693ca8
// 10.2 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form: HTMLFormElement | null = document.forms.namedItem("f1");
//
// if (form) {
//     form.onsubmit = function (e: Event) {
//         e.preventDefault();
//
//         let userAgeInput: HTMLInputElement = form?.elements.namedItem("userAge") as HTMLInputElement;
//         if (userAgeInput && parseInt(userAgeInput.value) < 18) {
//             let p: HTMLParagraphElement = document.createElement('p');
//             p.textContent = 'Warning: Your Age < 18!!!';
//             document.body.appendChild(p);
//         } else {
//             let p: HTMLParagraphElement = document.createElement('p');
//             p.textContent = 'Success!!!';
//             document.body.appendChild(p);
//         }
//     };
// }
//#ymAmN2xJ
// 10.3 - Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом




// let form = document.forms.namedItem("form");
//
// if (form) {
//     form.onsubmit = function (e: Event) {
//         e.preventDefault();
//
//         let nameInput = form?.elements.namedItem("name") as HTMLInputElement;
//         let surnameInput = form?.elements.namedItem("surname") as HTMLInputElement;
//         let ageInput = form?.elements.namedItem("age") as HTMLInputElement;
//
//         if (nameInput && surnameInput && ageInput) {
//             let user = {
//                 name: nameInput.value,
//                 surname: surnameInput.value,
//                 age: parseInt(ageInput.value)
//             };
//
//             let p = document.createElement('p');
//             p.textContent = `User: ${JSON.stringify(user)}`;
//             document.body.appendChild(p);
//         }
//     };
// }
// const forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
// const sendForm: HTMLFormElement = forms[0];




// sendForm.namedItem(name: string)

// const sendForm: HTMLFormElement = document.getElementsByTagName('form')

// sendForm.addEventListener('submit', handleSubmit);
//
// function handleSubmit(e: Event): HTMLParagraphElement {
//     e.preventDefault();
//     const form: EventTarget = e.target;
//     const name: string = form.elements.name.value;
//     const surname: string = form.elements.surname.value;
//     const age: string = form.elements.age.value;
//
//     if (name === "" || surname === "" || age === "") {
//                let p = document.createElement('p');
//        p.textContent = 'Please fill in all the fields!';
//         return (document.body.appendChild(p));
//     }
//     let p: HTMLParagraphElement = document.createElement('p');
//     p.textContent = `UserName: ${name}, Surname: ${surname}, Age: ${age}`;
//     document.body.appendChild(p);
//     form.reset();
//
// }

// #2VaLt4vDczH
// 10.4 -  є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1



// let counter = +localStorage.getItem('number');
// counter += 1;
// localStorage.setItem('number', counter);
// document.getElementById('counter-title').textContent = counter;



// #LhSfdhM3
// 10.5 - Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю
// інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM


// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
//
//     sessionsList.push(new Date());
//
//     localStorage.setItem('sessionsList', JSON.stringify(sessionsList));


// #Jg0gPO00
// 10.6 - створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


// const input = document.getElementById('converter');
// const resultDiv = document.getElementById('result');
//
// input.oninput = function  () {
//     console.log(this.value);
//     resultDiv.textContent = +this.value * 2.2;
// }



//#RbQGnH5DuC
// 10.7 -  В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName, objToAdd) {
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem) {
//         throw new  Error('There is no array in localstorage!');
//     }
//
//     const array = JSON.parse(lsItem);
//     if (typeof objToAdd === 'object') {
//         array.push(objToAdd);
//     }
//
//     localStorage.setItem(arrayName, JSON.stringify(array));
// }
//
// addToLocalStorage('sessionsList', {});




//
//
// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// const table = document.getElementById('table');
//
// const tableGeneratorForm = document.forms['tableGeneratorForm'];
//
//
//
// tableGeneratorForm.addEventListener('submit', handleOnSubmit);
//
// function handleOnSubmit(e) {
//     table.textContent = '';
//     e.preventDefault();
//     const linesValue = +e.target.lines.value;
//     const cellsValue = +e.target.cells.value;
//     const contentsValue = e.target.contents.value;
//
//    for (let i = 0; i < linesValue; i += 1) {
//        const tr = document.createElement('tr');
//        for (let j = 0; j < cellsValue; j += 1) {
//            const td = document.createElement('td');
//            td.textContent = contentsValue;
//            tr.appendChild(td);
//        }
//
//        table.appendChild(tr);
//
//    };
//
//
// };





//
//
// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів