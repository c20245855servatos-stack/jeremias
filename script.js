console.log("Hello, World!");
console.log ("From the script.js file");

const myName = "Jeremias";
let age= 20;
let number = "09519742640";
let address = "Purok agtongtong, Brgy. Tortosa, Manapala";
let siksseben = 67;






console.log (`Name : ${myName}`);
console.log (`Age : ${age}`);
console.log (`Number : ${number}`);
console.log (`Address : ${address}`);
console.log (`${siksseben}`);

function greet(greetings,names = []) {
if (Array.isArray(names)) 
   names=names.join(", ");
    
  return `${greetings} sa enyu ${names}`;
}
console.log(greet("Mayong aga", ["Jeremias","John", "kim","jhonny", "leopard"]));

const heading = document.querySelector ("h1");
heading.textContent = "Jeremias Servatos Sr. ";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function() {
    heading.style.color = "blue";
    console.log("Heading clicked!");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

const toggleButton = document.querySelector(`#switch`);
const body = document.querySelector(`body`);
let isoff = false;

toggleButton.addEventListener("click", function() {
    isoff = !isoff;
  if (isoff) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
