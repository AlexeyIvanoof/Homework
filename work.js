//Домашка 6

//Задание 1

let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 10) {
    console.log(arr[i]);
    break;
  }
  console.log(arr[i]);
}
//Задание 2

const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

//Задание 3

let numb = [1, 3, 5, 10, 20];
numb = numb.join(' ');
console.log(numb);

//Задание 4

let num = [];
for (let i = 0; i < 3; i++) {
  let innerNum = [];
  for (let j = 0; j < 3; j++) {
    innerNum.push(1);
  }
  num.push(innerNum);
};
console.log(num);

//Задание 5

let z = [1, 1, 1,];
z.push(2, 2, 2);
console.log(z);

//Задание 6

let x = [9, 8, 7, 'a', 6, 5];
x = x.sort();
x.pop();
console.log(x);

//Задание 7

let w = Number(prompt('Введите число'));
let number = [9, 8, 7, 6, 5]
let userNumber = number.includes(w);
console.log(userNumber);
 
//Задание 8

let word = 'abcdef';
word = word.split('').reverse().join('');
console.log(word);
 
//Задание 9

let v = [[1, 2, 3,],[4, 5, 6]];
let result = v.reduce((acc, cur) => acc.concat(cur), []);
console.log(result);

//Задание 10

let array = [2, 8, 4, 7,];
let resul = 0;
for (let i = 0; i < array.length - 1; i++ ) {
array[i] += array[i + 1];
};
console.log(array);

//Задание 11

const m = [2, 5, 6, 7, 8];
let resultat = m.map(item => (item ** 2));
console.log(resultat);

//Задание 12

const str = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const getLength = sourse => sourse.map(str =>str.length);
console.log(getLength(['слово', '', 'слог', 'длинное предложение', 'буква']));// помогла Надя.

//Задание 13

let arrr = [-1, 0, 5, -10, 56];
let res = arrr.filter(function filterPositive(array) {
  if(array < 0){
    return true;
  } else {
    return false;
  }
});
console.log(res);
