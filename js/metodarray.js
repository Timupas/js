// const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, itaque, expedita nihil tempore facere illum recusandae culpa corporis quas totam voluptate vitae id magni natus dolor sequi molestiae quod quae!";
// console.log(typeof(message));

// const result = message.split(",") //Перетворює рядок в масив по роздільнику(деліметер)
// console.log(typeof(result));

// console.log(result);

// for (let i = 0; i<result.length; i+=1) {
//     console.log(result[i]);
    
// }
// for (const elm of result) {
//     console.log(elm);
    
// }



// const friends = ["artem", "anton", "david", "oleksander", "timofii", "yaroslav", "daria", "katya"]
// const str = friends.join(", ") //Перетворює масив в рядочок по деліметру
// console.log(str);


//Робимо slug з назви статті з URL адреси,
// Заголовок статті складається тільки з букв та пропусків,
// Нормалізуємо рядок,
// Розбиваємо по словах,
// Записуємо в рядок з роздільником,
// Чейнінг
// повинно получитися top-10-benefits-of-react-fremework
const title = "Top 10 Benefits Of React Fremework"
const result = title.split(" ")
// console.log(result);
const result2 = result.join("-")
// console.log(result2);
const result3 = result2.toLowerCase()
console.log(result3);

