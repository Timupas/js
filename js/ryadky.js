const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis eaque nobis dolor debitis fugiat dolores perferendis ex sed! Voluptates exercitationem repellat ab. Obcaecati velit vitae alias, accusantium reiciendis quos.";
console.log(message.length); //Повертає довжину рядка
console.log(message[0]); //Повертає перший символ рядка
console.log(message[message.length-1]); //Повертає останній елемент рядка по його індексу

console.log(message.toLowerCase()); //Малий регістр
console.log(message.toUpperCase()); //Великий регістр

console.log("timur" === "Timur");

console.log(message.indexOf("dolor sit amet")); //Повертає індекс першого знайденного елемента
console.log(message.indexOf("qwe")); //Повертає -1 якщо не знайдено входження
console.log(message.includes("qwe")); //Повертає true або false якщо не знайдено
console.log(message.indexOf("alias") !== -1);

console.log(message.startsWith("Lorem ipsum dolor")); //Перевіряє чи починається рядок з шукаємого підрядка і повертає true або false
console.log(message.endsWith("Lorem ipsum dolor")); //Перевіряє чи закінчується рядок з шукаємого підрядка і повертає true або false
const picture = "image.svg";
console.log(picture.endsWith(".svg"));


