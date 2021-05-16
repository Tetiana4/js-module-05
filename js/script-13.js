// Выполни рефакторинг заменив функцию - конструктор StringBuilder на класс с методами.
// Сделай так, чтобы свойство value было приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов
// в той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

class StringBuilder {
  #value
  constructor(baseValue){
  this.#value = baseValue;
}

getValue() {
  return this.#value;
};

padEnd(str) {
  this.#value += str;
};

padStart(str) {
  this.#value = str + this.#value;
};

padBoth(str) {
  this.padStart(str);
  this.padEnd(str);
};
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='