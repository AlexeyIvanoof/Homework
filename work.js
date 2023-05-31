//Домашка 7

//Задание 1

let str = 'Сорока';
str = str.toUpperCase();
console.log(str);

//Задание 2

let searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let search = 'ко';
searchStart.forEach((searchStart) => {
if (searchStart.toLowerCase().startsWith(search.toLowerCase())) {
  searchStart = searchStart.split();
 console.log(searchStart);
	}
});

function filterByPrefix(arr, prefix){
  const regex = new RegExp(`${prefix}`, "i");
  return arr.filter((str)=> regex.test(str));
};
filterByPrefix(['Кошка', 'Кит', 'Комар', 'Носорог'],"ко");
console.log(filterByPrefix(['Кошка', 'Кит', 'Комар', 'Носорог'],"ко"))// помогла Надя.

 //Задание 3
let numbr = 32.58884
 Math.floor(numbr);
 Math.ceil(numbr);
 Math.round(numbr);
console.log(Math.floor(numbr), Math.ceil(numbr), Math.round(numbr));

//Задание 4

let max = Math.max(52, 53, 49, 77, 21, 32);
let min = Math.min(52, 53, 49, 77, 21, 32);
console.log(max, min);

//Задание 5

function getRandomInt(min, max) {
   return Math.random()* min, Math.random()*max;
};
console.log(getRandomInt(1, 10));

//Задание 6

function getRandomArrNumbers(num){
  return (Array.from({length: num/2}, () =>Math.round(Math.random()* num)));
};
console.log(getRandomArrNumbers (8));

//Задание 7

function getRandomArrNumber(x, y) {
  let num = Math.abs(y - x) + 1;
  let randNum = Math.floor(Math.random() * num) + x;
  return randNum;
}
console.log(getRandomArrNumber(2, 10));// ответ взят из интернета.
 
//Задание 8

let myDate = new Date(2023, 4, 30, 19, 20, 20, 10);
console.log(myDate); 

//Задание 9

let currentDate = new Date(2023, 4, 30);
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
new Date(2023, 4, 30, 19, 20, 20, 10).toLocaleString('ru', {day:'numeric', month: 'long', year: 'numeric'});
console.log( 'Дата:', new Date().toLocaleString('ru', {day:'numeric', month: 'long', year: 'numeric'}));
new Date(2023, 4, 30, 19, 20, 20, 10).toLocaleTimeString();
console.log('Время:', new Date().toLocaleTimeString());

//Задание 11 в script.js =>

