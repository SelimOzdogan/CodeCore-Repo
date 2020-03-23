class Library {
    books = [];
    constructor() {

    }
    shelve(book) {
        this.books.push(book);
        return this;
    }
    findByTitle(str) {
        for (const book of this.books) {
            if (book.title.toUpperCase().includes(str.toUpperCase()))
                return book;
        }
    }
    list() {
        return this.books;
    }
}
class Book {
    constructor(title, authors, edition) {
        this.title = title;
        this.authors = authors;
        this.edition = edition;
    }
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
    "The Rust Programming Language",
    ["Steve Klabnik", "Carol Nichols"],
    2
);
const lib = new Library();
lib.shelve(eloquentJS);
lib.shelve(speakingJS).shelve(theRustProgLang);

console.log(lib.findByTitle("eloquent")); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
console.log(lib.findByTitle("Rust")); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}

console.log(lib.list());
// [

//   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},

//   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},

//   Book {title: "Speaking JavaScript", authors: Array(1), edition: 1},

// ]