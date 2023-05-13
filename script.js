let a;
a=alert(10)
a=alert(20)//Задание 1

let year=2007
alert(`год выпуска первого iPhone 9 января ${year} года` )//Задание 2

let creator="Брендан Айк";
alert(`создатель языка JavaScript ${creator}`);//Задание 3

let b=10;
let c=2;
let d=Number(b) + Number(c);
alert(d);
let e=Number(b) - Number(c);
alert(e);
let f=Number(b) * Number(c);
alert(f);
let j=Number(b) / Number(c);
alert(j);//Задание 4

alert(c**5)//2 в 5й степени Задание 5

let i=9
alert(i%2)// остаток от деления 9/2 Задание 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);// использование операторов присваивания Задание 7

let age =(prompt ("Сколько вам лет?"));
alert(age)//Задание 8

const user={
    name: "Ivan",
    age:35,
    isAdmin:true
}// Задание 9

user['city of residence']=true;// Задание 9.1

user.age=37;
console.log(user)//Задание 9.2

delete user['city of residence']// Задание 9.3

let info=prompt("Какую информацию хотите узнать о пользователе?")
console.log(user[info]);
alert(user[info])//Задание 9.4

let name=prompt("Назовите свое имя");
alert(`Привет, ${name}!`);//Задание 10
