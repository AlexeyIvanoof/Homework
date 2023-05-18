// домашка 4

//Задание 1
let i = 1;
while (i<=2) {
  console.log("Привет");
  i++;
}
//Задание 2
let a = 1;
while (a < 6) {
  console.log(a);
  a++;
}
//Задание 3
let b = 7;
while (b <= 22) {
  console.log(b);
  b++;
}
//Задание 4
const obj={
  'Коля':20000,
  'Вася':30000,
  'Петя':40000
};
for (let salary in obj) {
  console.log(`${salary} зарплата ${obj[salary]} рублей`);
}

//Задание 5
let n=1000;
let nam=0;

while (n >= 50) {
 n/=2;
 nam +=1;
 console.log(nam, n)
}
//Задание 6
let fr=0;
let wk=7;
while(wk < 31){
  fr=wk-2;
  wk+=7;
  console.log(`Сегодня пятница, ${fr}-е число. Необходимо подготовить отчет.`);
}