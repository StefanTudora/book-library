
// Keep count of the current items on display
const myLibrary = [];

function Book() {
    // To be added
}

function addBookToLibrary() {
    // To be added
}


const addBookBtn = document.getElementById("add-book");

const bookDialog = document.querySelector("dialog");

const closeModalBtn = document.querySelector("dialog > btn");


addBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

closeModalBtn.addEventListener("click", () => {
    bookDialog.close();
});
