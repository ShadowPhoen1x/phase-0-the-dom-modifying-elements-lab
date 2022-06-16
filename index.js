// Write your code here!
const element = document.querySelector("#main");

element.parentElement.removeChild(element);

const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");

newHeader.innerHTML = "Taine is the champion"