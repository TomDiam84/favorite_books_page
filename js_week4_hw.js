const booksArray = ["in_search_of_lost_time", "don_quixote", "ulysses", "the_great_gatsby", "moby_dick", "hamlet", "war_and_peace", "the_odyssey", "one_hundred_years_of_solitude", "the_brothers_karamazov"];
console.log(booksArray);
//Making the function that generates a ul with li elements for each book ID in the array using a for loop:
function genArrList(arr) {
    let newUl = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = arr[i];
        newUl.appendChild(newLi);
    }
    document.body.appendChild(newUl);
}
//Call the function with booksArray as an argument
//genArrList(booksArray);

/*
Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.
*/
let booksInfoObj = {};
//I make a two-dimensional array in order to store the information for each book with the series [title, language, author]:
let booksInfoArray = [["In Search  of Lost Time", "French", "Marcel Proust"], ["Don Quixote", "Spanish", "Miguel de Cervantes"], ["Ulysses", "English", "James Joyce"], ["The Great Gatsby", "English", "Scott Fitzgerald"], ["Moby Dick", "English", "Hermann Melville"], ["Hamlet", "English", "William Shakespeare"], ["War and Peace", "Russian", "Leon Tolstoy"], ["The Odyssey", "Ancient Greek", "Homer"], ["One Hundred Years of Solitude", "Spanish", "Gabriel Garcia Marquez"], ["The Brothers Karamazov", "Russian", "Fyodor Dostoyevsky"]];

for (let i = 0; i < booksArray.length; i++) {
    booksInfoObj[booksArray[i]] = {};
}

let k = 0;
for (let property in booksInfoObj) {
    for (let j = 0; j < booksInfoArray[k].length; j++) {
        if (j == 0) {
            booksInfoObj[property]["title"] = booksInfoArray[k][j];
        }
        if (j == 1) {
            booksInfoObj[property]["language"] = booksInfoArray[k][j];
        }
        if (j == 2) {
            booksInfoObj[property]["author"] = booksInfoArray[k][j];
        }
    }
    k++;
}
console.log(booksInfoObj);

/*
Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.
*/

function genObjList(obj) {
    var newUl = document.createElement('ul');
    for (let property in obj) {
        let newLi = document.createElement('li');
        newLi.setAttribute("id", property)
        let h3Title = document.createElement('h3');
        h3Title.textContent = obj[property]["title"];
        newLi.appendChild(h3Title);
        let h5Lang = document.createElement('h5');
        h5Lang.textContent = "Language: " + obj[property]["language"];
        newLi.appendChild(h5Lang);
        let h5Auth = document.createElement('h5');
        h5Auth.textContent = "Author: " + obj[property]["author"];
        newLi.appendChild(h5Auth);
        newUl.appendChild(newLi);
    }
    document.body.appendChild(newUl);
}



//genObjList(booksInfoObj);

//Beautify your html page with css, add sources and alts to each of the images.
document.body.style.boxSizing = "border-box";
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.backgroundColor = "orange";
let head1 = document.createElement("h1");
let nodeHead1 = document.createTextNode("MY TOP TEN FAVORITE BOOKS");
head1.appendChild(nodeHead1);
document.body.appendChild(head1);
head1.style.textAlign = "center";
head1.style.fontFamily = "serif";
head1.style.color = "red";
head1.style.fontSize = "4em";
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

genObjList(booksInfoObj);

/*
Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an image at the corresponding li element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before)
*/

//First I make an array with the srcs of the images

srcArr = ["https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41u9Jedk-mL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51wTLf4JVwL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL.jpg", "https://images-na.ssl-images-amazon.com/images/I/41h1CVFjjdL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L.jpg", "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51tkcSAhSDL.jpg", "http://ecx.images-amazon.com/images/I/51c4Gb6Uo0L.jpg"]

//I define an initially empty object:
let imgObj = {};

for (let i = 0; i < booksArray.length; i++) {
    imgObj[booksArray[i]] = srcArr[i];
}
console.log(imgObj);

let keysImgObjArr = Object.keys(imgObj);
console.log(keysImgObjArr);

var Ul = document.getElementsByTagName("ul");
Ul[0].style.margin = "0px";

var listElem = document.getElementsByTagName("li");
for (let i = 0; i < listElem.length; i++) {
    listElem[i].style.listStyle = "none";
    listElem[i].style.fontSize = "2em";
    listElem[i].style.color = "yellow";
    listElem[i].style.margin = "30px 10px 30px 10px";
    listElem[i].style.padding = "2px";
    listElem[i].style.textAlign = "center";
    listElem[i].style.borderBottom = "2px solid orange";
}

function placeImg() {
    for (let property in imgObj) {
        let liElem = document.getElementById(property);
        let domImg = document.createElement("img");
        domImg.src = imgObj[property];
        liElem.insertBefore(domImg, liElem.childNodes[1]);
    }
} 

placeImg();
