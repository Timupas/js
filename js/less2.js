const age = "14";
console.log(typeof(age));

const massage = Number(prompt("Enter you age"));
console.log(typeof(massage));

const result = age === massage;
console.log(result);

const quesion = prompt("Який відступ задaти?");
console.log(quesion);
const result = Number.parseInt(quesion);
const result = Number.parseFloat(quesion);
console.log(result);

const a = 0.1;
const b = 0.2;
const c = a+b;
const d = c.toFixed(1);
console.log(d);

const a = "asd";
const b = Number.isNaN(a);
console.log(b);
