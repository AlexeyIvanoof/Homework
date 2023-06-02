//Задание 8

function monthNumber() {
  let month = String(prompt("Введите число месяца"));

  if (month >= 3 && month <= 5) {
    alert ('Весна')
  } else if (month >= 6 && month <= 8) {
    alert ('Лето')
  }else if (month >= 9 && month <= 11) {
    alert ('Осень')
  }else if (month == 1 || month ==2 || month ==12)  {
    alert ('Зима')
  }else if (isNaN(month) || month <= 0)  {
    alert ('Неправильный параметр!')
}
};
 
//Домашка 7
//Задание 11

function word() {
let gameWord = (['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']);
gameWord = gameWord.sort(() => Math.random() - 0.5);
alert(gameWord);
let userAnswer1 = prompt('Чему равнялся первый элемент массива?');
let userAnswer2 = prompt('Чему равнялся последний элемент массива?');
if (gameWord[0].toLowerCase() === userAnswer1.toLowerCase() && gameWord[6].toLowerCase() === userAnswer2.toLowerCase() ) {
  alert('Поздравляю! Ответ верный');
} else if(gameWord[0].toLowerCase() === userAnswer1.toLowerCase() && gameWord[6].toLowerCase() !== userAnswer2.toLowerCase() || gameWord[0].toLowerCase() !== userAnswer1.toLowerCase() && gameWord[6].toLowerCase() === userAnswer2.toLowerCase()) {
  alert('Вы были близки к победе!');
} else {
  alert('Ответ неверный! Пооробуй еще раз!');
}};