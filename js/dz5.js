const drink = "Кава";

switch (drink) {
  case "Кава":
    console.log("Ви обрали каву");
    break;
  case "Чай":
    console.log("Ви обрали чай");
    break;
  case "Сік":
    console.log("Ви обрали сік");
    break;
  default:
    console.log("Необраний напій");
}

const day = "Субота";

switch (day.toLowerCase()) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П’ятниця":
    console.log("Це робочий день");
    break;
  case "Субота":
  case "Неділя":
    console.log("Це вихідний день");
    break;
  default:
    console.log("Невідомий день тижня");
}

const month = 6;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невідомий місяць");
}

const color = "зелений";

switch (color.toLowerCase()) {
  case "червоний":
    console.log("Стоп");
    break;
  case "жовтий":
    console.log("Чекати");
    break;
  case "зелений":
    console.log("Йти");
    break;
  default:
    console.log("Невідомий колір");
}

const num1 = 10;
const num2 = 0;
const operator = "*";

switch (operator) {
  case "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Помилка: ділення на нуль");
    } else {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  default:
    console.log("Невідомий оператор");
}
