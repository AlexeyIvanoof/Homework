//Домашка 3. js
//Задание1
let password = 'Скайпро';
let input=prompt("Введите пароль")
if (input === password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}
//Задание2
let c = 5;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
//Задание3
let d = 120;
let e = 80;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");  
}
//Задание4
let a = '2';
let b = '3';
alert(parseInt(a) + parseInt(b));// синтаксический анализ.

//Задание 5
let monthNumber= String(prompt("Введите число месяца"));
switch (monthNumber) {
    case "1":
        console.log("январь-Зима")
        break;
        case "2":
        console.log("февраль-Зима")
        break;
        case "3":
        console.log("март-Весна")
        break;
        case "4":
        console.log("апрель-Весна")
        break;
        case "5":
        console.log("май-Весна")
        break;
        case "6":
        console.log("июнь-Лето")
        break;
        case "7":
        console.log("июль-Лето")
        break;
        case "8":
        console.log("август-Лето")
        break;
        case "9":
        console.log("сентябрь-Осень")
        break;
        case "10":
        console.log("октябрь-Осень")
        break;
        case "11":
        console.log("ноябрь-Осень")
        break;
        case "12":
        console.log("декабрь-Зима")
        break;
        
    default:
        console.log("Неверно")
        break;
}