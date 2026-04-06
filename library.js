
// Keep count of the current items on display
const myLibrary = [];

class Book {
    #readStatus;
    constructor(name, author, pageNo) {
        // To be added
        this.name = name;
        this.author = author;
        this.pageNo = pageNo;
        this.readStatus = false;
        this.UUID = crypto.randomUUID();
    }

    toggleReadStatus() {
        this.#readStatus = !this.#readStatus;
    }

    getReadStatus() {
        return this.#readStatus;
    }
}

var propertiesMap = new Map([
  ["name", "Name"],
  ["author", "Author"],
  ["pageNo", "No. pages"]
])

function getContentDiv() {
    return document.querySelector(".book-display");
}

function getCardRow(property, bookProperty) {
    const row = document.createElement("div");
    const attribute = document.createElement("p");
    attribute.innerText = propertiesMap.get(property);
    row.appendChild(attribute);
    const value = document.createElement("p");
    value.innerHTML = bookProperty;
    row.appendChild(value);
    return row;
}

function createDisplayNode(book) {
    const newEntry = document.createElement("div");
    newEntry.classList.add("book-presentation-card")
    for (const property of Object.getOwnPropertyNames(book)) {
        if (property === "UUID") {
            newEntry.dataset.bookUUID = book[property];
            continue;
        }
        newEntry.appendChild(getCardRow(property, book[property]));
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Entry";
    deleteBtn.addEventListener("click", () => {
        newEntry.parentElement.removeChild(newEntry);
        removeBookByUUID(newEntry.dataset.bookUUID);
    });
    newEntry.appendChild(deleteBtn);
    return newEntry;
}

// Add a new entry
function addBookToLibrary(book) {
    // Save the entry in the library
    myLibrary.push(book);
    // Get book display div
    const bookDiv = getContentDiv();
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

    closeModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        bookDialog.close();
    });

    const bookForm = document.querySelector("form");

    bookForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addBookToLibrary(new Book(
            document.getElementById("name").value,
            document.getElementById("author").value,
            document.getElementById("no-pages").value,
            false
        ));
        bookForm.reset();
        bookDialog.close();
    });
}

attachBtnListeners();