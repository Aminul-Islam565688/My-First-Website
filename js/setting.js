var newElement = document.createElement("p");

var newText = document.createTextNode("This is a testing text");

var append = newElement.appendChild(newText);

document.querySelector(".test").appendChild(newElement);

var insert = document.querySelector(".test");

insert.insertBefore(newElement,insert.childNodes[0]);

console.log(newElement);

console.log(newText);

console.log(append);
