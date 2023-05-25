//Домашка 5

//Задание 1

function number(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
      };
    
    console.log(number(4, 8));
    
    //Задание 2
    
    function numb(c) {
      if (c % 2 == 0) {
        return('Число четное');
      } else {
        return('Число нечетное');
      }
    };
    console.log(numb(3))
    
    //Задание 3
    
    function numbr(d) {
      return d**=2;
    }
    console.log(numbr(6));
    
    //Задание 4
    let answer = Number(prompt('Сколько вам лет?'));
    function question(answer) {
      if ( answer <= 12 && answer >= 0) {
        return 'Привет, друг!';
      } else if (answer >= 13 && answer >= 0){
        return'Добро пожаловать!';
      } else {
        return 'Не правильное значение';
    }
    }
    alert(question(answer));
    
    //Задание 5
    let x = Number(prompt('Задание 5: Введите первое число'));
    let y = Number(prompt('Введите второе число'));
    function num(x, y) {
      if (isNaN(x) && isNaN(y)) {
        return 'Одно или оба значения не являются числом';
      } else {
        return x*y;
      }
    }
    alert(num(x, y));
    
    //Задание 6
    
    let z = Number(prompt('Задание 6: Введите число'));
    function examin(z) {
      if (isNaN(z)) {
        return 'Переданный параметр не является числом';
      } else {
        return z**=2;
      }
    }
    alert(examin(z));
    
    //Задание 7
    
    const circle1 = {
      radius :20,
      getArea:function Area() {
        let r = 20;
        let p = 3.14;
          return p * (r **= 2)
      },
      getPerimeter:function Perimeter () {
        let r = 20;
        let p = 3.14;
          return 2 * p * r
    },
    };
    console.log(`Площадь равна ${circle1.getArea()} ,Периметр равен ${circle1.getPerimeter()}`);
    
    const circle2 = {
      radius :15,
      getArea:function Area() {
        let r = 15;
        let p = 3.14;
          return p * (r **= 2)
      },
      getPerimeter:function Perimeter () {
        let r = 15;
        let p = 3.14;
          return 2 * p * r
    },
    };
    console.log(`Площадь равна ${circle2.getArea()} ,Периметр равен ${circle2.getPerimeter()}`);
    // думаю что не совсем верно исполнил))
  