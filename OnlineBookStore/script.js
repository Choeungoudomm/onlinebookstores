const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const books =
    document.querySelectorAll(".book-card");

    books.forEach(book => {

        const title =
        book.querySelector("h3")
        .textContent
        .toLowerCase();

        if(title.includes(value)){
            book.style.display = "block";
        }else{
            book.style.display = "none";
        }

    });

});

function addWishlist(bookName){

    const wishlist =
    document.getElementById("wishlistItems");

    const item =
    document.createElement("li");

    item.textContent = bookName;

    wishlist.appendChild(item);

    let books =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    books.push(bookName);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(books)
    );

    alert(bookName + " added to wishlist!");
}

window.onload = function(){

    let books =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    const wishlist =
    document.getElementById("wishlistItems");

    books.forEach(book => {

        const item =
        document.createElement("li");

        item.textContent = book;

        wishlist.appendChild(item);

    });

}

function filterBooks(category){

    const books =
    document.querySelectorAll(".book-card");

    books.forEach(book => {

        if(category === "All"){
            book.style.display = "block";
        }
        else if(book.dataset.category === category){
            book.style.display = "block";
        }
        else{
            book.style.display = "none";
        }

    });

}