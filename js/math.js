console.log(Math.min(4,6,8,10,2));// Повертає мінімальне число
console.log(Math.max(3,6,2,18));// Повертає максимальне число
const a = 5;
const b = 2;
const c = 7;
const d = 10;
console.log(Math.max(a,b,c,d));
console.log(Math.pow(8,3));// Піднесення до степеня
console.log(Math.floor(15.7));// Заокруглює до найменшого цілого числа
console.log(Math.ceil(14.1));// Заокруглює до найбільшого цілого числа
console.log(Math.round(16.4));// Математичне округлення
console.log(Math.sqrt(1445));// Вичислює квадратний корінь числа
const max = 100;
const min = 10;
console.log(Math.round(Math.random()*(max - min)+ min));// Рандомне число заокругленне до математичного цілого
const age = Number(prompt("Enter you age"))
if (age < 18) {
    console.log("You blocked");
    
}