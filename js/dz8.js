// const fruits = ["яблуко", "банан", "апельсин", "ківі"];
// let result = "";

// for (let i = 0; i < fruits.length; i++) {
//     result += fruits[i];
//     if (i !== fruits.length - 1) {
//         result += ", ";
//     }
// }

// console.log(result);

// const fruits = ["яблуко", "банан", "апельсин", "ківі"];
// const result = fruits.join(", ");

// console.log(result);



//Видалення
const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
];

const cardToRemove = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
    cards.splice(indexToRemove, 1);
}

console.log(cards);

//додавання
const cardToInsert = "Карточка-6";
const insertIndex = 2;

cards.splice(insertIndex, 0, cardToInsert);

console.log(cards);

//оновлення
const cardToUpdate = "Карточка-4";
const updatedCard = "Оновлена карточка-4";
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
    cards.splice(indexToUpdate, 1, updatedCard);
}

console.log(cards);