
// Keep count of the current items on display
const myLibrary = [];

// Create a new entry
class Book {
    constructor(name, author, pageNo) {
        // To be added
        this.name = name;
        this.author = author;
        this.pageNo = pageNo;
        this.UUID = crypto.randomUUID();
    }
}

function getContentDiv() {
    return document.querySelector(".book-display");
}

function createDisplayNode(book) {
    const newEntry = document.createElement("div");
    newEntry.classList.add("book-presentation-card")
    for (var property in Object.getOwnPropertyNames(book)) {
        const newProp = document.createElement("p");
        newProp.innerText = book[property];
    }
    return newEntry;
}

// Add a new entry
function addBookToLibrary(book) {
    // Save the entry in the library
    myLibrary.push(book);
    // Get book display div
    const bookDiv = getContentDiv()
    // Create a new entry and append
    bookDiv.appendChild(createDisplayNode(book));
}

function removeBookByUUID(UUID) {
    const toRemoveIdx = myLibrary.filter(book => book.getUUID() == UUID);
    if (toRemoveIdx > -1) {
        myLibrary.splice(toRemoveIdx, 1);
    }
}

function attachBtnListeners() {

    const bookDialog = document.querySelector("dialog");

    const addBookBtn = document.getElementById("add-book");

    addBookBtn.addEventListener("click", () => {
        bookDialog.showModal();
    });

    const closeModalBtn = document.querySelector("dialog #close-btn");

    const submitModalBtn = document.querySelector("dialog #submit-btn");

    closeModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        bookDialog.close();
    });

    submitModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addBookToLibrary(new Book("George", "George", 100, false));
        bookDialog.close();
    });
}

attachBtnListeners();