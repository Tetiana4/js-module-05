// С помощью Function Declaration напиши функцию - конструктор Storage,
// которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров,
// который записывается на создаваемый объект в свойство items.
function Storage(items) {
  this.items = items; 
}
Storage.prototype.getItems = function(){
  return this.items;
}
Storage.prototype.addItem = function (newItem){
 return this.items.push(newItem);
}
Storage.prototype.removeItem = function (item) {
  return this.items.splice(1,1)}
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]