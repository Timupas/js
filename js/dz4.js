const field1 = "Привіт";
const field2 = "Світ";

if (field1 !== "" && field2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

const number1 = 5;
const number2 = 7;
const sum = number1 + number2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

const text = "Я вивчаю JavaScript";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

const number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const name = "Тимур";
const email = "timur@gmail.com";
const password = "123456";

const isNameValid = name.length >= 3;
const isEmailValid = email.includes("@") && email.indexOf(".") > email.indexOf("@");
const isPasswordValid = password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка, неправильне заповнення");
}
