console.log("This is E-library project.")

// improvements :
// 1. store the details in the local storage
// 2. user has a option to delete a book
// 3. add a scroll bar to the view

//  -------------------------------------------------prototye----------------------------------------------------------------
/*
// contructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor 
function Display() {
}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding the book in the table.");
    let tableBody = document.getElementById('tableBody');
    let html = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML += html;

}

// clear method to reset the form after the user adds a book successfully
Display.prototype.clear = function () {
    let bookForm = document.getElementById("bookForm");
    bookForm.reset();       // to reset the form after user submit the form.
}

// validate method to check the book details enterred by the user.
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }

}

// show method to show alerts for successfull or failure.
Display.prototype.show = function (type) {
    let alertMsg;
    if (type == "warning") {
        alertMsg = "Please, Fill all the details properly!"
    }
    else if (type == "success") {
        alertMsg = "Book Details added successfully!";
    }
    let msg = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show">
                            <strong>${type}! </strong>${alertMsg} 
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>`;
    setTimeout(() => {
        msg.innerHTML = '';
    }, 3000);
}

// Add submit event EventListener to add book form
let bookForm = document.getElementById("bookForm");
bookForm.addEventListener('submit', formSubmit);

function formSubmit(e) {
    console.log('you have added a book in the library successfully!')
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let fiction = document.getElementById('fiction');
    let educative = document.getElementById('educative');
    let biography = document.getElementById('biography');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (educative.checked) {
        type = educative.value;
    }
    else if (biography.checked) {
        type = biography.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success');
    }
    else {
        // show error to the user
        display.show('warning');
    }

    e.preventDefault();
}
*/

// ----------------------------------------- ES 6 Classes -------------------------------------------------------------------------

class Book{
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{
    add(book) {
        console.log("Adding the book in the table.");
        let tableBody = document.getElementById('tableBody');
        let html = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += html;
    }

    clear() {
        let bookForm = document.getElementById("bookForm");
        bookForm.reset();       // to reset the form after user submit the form.
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }    
    }

    show(type) {
        let alertMsg;
        if (type == "warning") {
            alertMsg = "Please, Fill all the details properly!"
        }
        else if (type == "success") {
            alertMsg = "Book Details added successfully!";
        }
        let msg = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show">
                                <strong>${type}! </strong>${alertMsg} 
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            </div>`;
        setTimeout(() => {
            msg.innerHTML = '';
        }, 3000);
    }
}

let bookForm = document.getElementById("bookForm");
bookForm.addEventListener('submit', formSubmit);

function formSubmit(e) {
    console.log('you have added a book in the library successfully!')
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let fiction = document.getElementById('fiction');
    let educative = document.getElementById('educative');
    let biography = document.getElementById('biography');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (educative.checked) {
        type = educative.value;
    }
    else if (biography.checked) {
        type = biography.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success');
    }
    else {
        // show error to the user
        display.show('warning');
    }

    e.preventDefault();
}