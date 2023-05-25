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
console.log(monthNumber());