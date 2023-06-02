 //Домашка 8

 //Задание 1

 const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 const compareAge = (a, b) => a.age - b.age;
 console.log(people.sort(compareAge));

  //Задание 2

function isPositive(number) {
   return number > 0;
 }
 
 function isMale(person) {
   return person.gender === 'male';
 }
 
 function filter(arr, func) {
   const result = [];
   for (let i = 0; i < arr.length; i++) {
     if (func(arr[i])) {
       result.push(arr[i]);
     }
   }
   return result;
 }
 
 console.log(filter([3, -4, 1, 9], isPositive)); // [3, 1, 9]
 
 const peopl = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];
 
 console.log(filter(peopl, isMale)); // [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]
 

//Задание 3
let myDate = new Date(2023, 5, 2, 12, 30, 20, 10); 
let timerId = setInterval(() => alert(myDate), 3000);
setTimeout(() => { clearInterval(timerId); alert('Прошло 30сек.'); }, 30000);
 
//Задание 4

function delayForSecond(callback) {
   setTimeout(callback, 5000);// вывод через 5сек.
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5

function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
           if(cb) { 	cb(); }
   }, 1000)
}

function sayHi (name) {
   console.log(`Привет, ${name}!`);
}

setTimeout(() => {
   return sayHi('Глеб');
}, 2000); delayForSecond();
