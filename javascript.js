//Задание 1
console.log("Задание 1");

const str = "JavaScript is fun!";
console.log(str.includes("fun"));

//Задание 2
console.log("Задание 2");

let a;

if (a) {
    console.log("Не выполнено");
}
else {
    console.log("Выполнено");
}

//Задание 3
console.log("Задание 3");

const firstName = "John";
const lastName = "Pir";
const occupation = "software developer";
console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}`);


//Задание 4
console.log("Задание 4");
let b;
const c = null;
console.log(b == c); //True, наверно потому что обе переменные пусты. b пусто, но может быть заполнено потом, а c пусто намеренно
console.log(b === c); //False, строгое сравнение учитывает тип, у null тип object, а у undefined тип undefined


//Задание 5
console.log("Задание 5");
console.log(1 + '1'); //JS сам переводит тип Number в String при сложении (обратно это не работает)