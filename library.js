
// Keep count of the current items on display
const myLibrary = [];


// Create a new entry
function Book() {
    // To be added
}

// Add a new entry
function addBookToLibrary() {
    // To be added
}

function attachBtnListeners() {

    const bookDialog = document.querySelector("dialog");

    const addBookBtn = document.getElementById("add-book");

    addBookBtn.addEventListener("click", () => {
        bookDialog.showModal();
    });

    const closeModalBtn = document.querySelector("dialog #close-btn");

    closeModalBtn.addEventListener("click", () => {
        bookDialog.close();
    });
}

attachBtnListeners();