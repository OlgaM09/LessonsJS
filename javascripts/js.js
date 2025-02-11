document.addEventListener("DOMContentLoaded", function () {
//     let x = 5;
//     let y = 6;
//     console.log( x + y ); // 11
//     console.log( 1 / 0 ); // Infinity
//     console.log( "не число" / 2 ); // NaN
//     console.log( 2 + 2 + "22" ); // "422"

//     let str = "Привет";
//     let str2 = 'Одинарные кавычки тоже подойдут';
//     let ph = `Обратные кавычки позволяют встраивать переменные ${str}`;

//     console.log(ph); // Вывод строки с обратными кавычками
//     console.log( "некий текст" + str2 ); // "некий текстОдинарные кавычки тоже подойдут"

//     console.log( `результат: ${1 + 2}` ); // "результат: 3"

//     let sun = 6 > 8;
//     console.log(sun); // false

//     let moon = 6 < 8;
//     console.log(moon); // true

//     let has = true; // Объявляем переменную
//     let isL = false; // Объявляем переменную

//     let can = has && isL; 
//     console.log(can); // false
//     //&& - значит И

//     let te = 25;
//     let isH = te > 30 ? "Горячо" : "Не горячо";
//     console.log(isH); // "Не горячо"

// });


// // ДОМАШКА 1


// // 1 задание
// const str = "abcde"
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[4]);

// // 2 задание

// let a = parseInt(prompt ("Введите первое число", ""));
// let b = parseInt(prompt("Введите второе число:"));
// console.log(a > 0 || b > 0);

// // 3 задание
// let user = parseInt (prompt ("Сколько тебе лет?", ""));
// if (user >= 18) {
//     console.log("Совершеннолетний");
// } else console.log("Несовершеннолетний");


// ДОМАШКА 2

// Задача 1: Проверка возраста

// let person = parseInt (prompt ("Введите ваш возраст?", ""));
// if (person <= 65) 
//     {console.log("Вам ещё рано на пенсию")}
//  else console.log("Поздравляем с пенсионным возрастом!");


// Задача 2: Сравнение чисел

// let a = parseInt(prompt ("Введите первое число", ""));
// let b = parseInt(prompt("Введите второе число:"));
// if (a > b) 
//     {console.log("Первое число больше")}
// else if (a < b) 
//     {console.log("Второе число больше")}
// else if (a = b) 
//     {console.log("Числа равны")}



// Задача 4: Угадай число

// const secretNumber = 7;
// let number = parseInt(prompt ("Угадай число", ""));   
// if (secretNumber ===  number) {
//     console.log("Вы угадали")
// } else console.log("Попробуйте ещё раз");


//Задача 5: Проверка логина и пароля



// let a = prompt("Введите логин:", ""); 
// let b = parseInt(prompt("Введите пароль:"));
// if (a === "admin" && b === 12345) 
//    {console.log("Добро пожаловать!")
// } else console.log("Неверный логин или пароль");


// ДОМАШКА 3

//let button = document.querySelectorAll(".styled-button")

//button.forEach(function (button){ 
    //button.addEventListener("click", function(){
        //if (button.style.backgroundColor === "green") {
            //button.style.backgroundColor = "pink";
            //button.style.margin = "40px";
        //} else {
            //button.style.backgroundColor = "green";
            //button.style.margin = "20px";
        //}    
    //}) 
//}) 

// ДОМАШКА 4









});

