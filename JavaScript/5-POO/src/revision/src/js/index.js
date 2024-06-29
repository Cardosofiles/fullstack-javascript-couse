// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fanasy", "adbenture", "medieval"],
//   author: {
//     name: "Christopher Paolini",
//     age: 48,
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
//   save: function () {
//     // save in base
//   },
// };

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {};
}

const author = { name: "Chistopher Paolini" };
const tags = ["fantasy", "adventure"];

const eragon = new Book("Eragon", 468, author, tags);

console.log(eragon);

eragon.addOnStock(20);

const eldest = new Book("Eldest", 644, tags, author);

console.log(eragon);
console.log(eldest);
