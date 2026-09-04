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
heading.textContent = "Jeremias servatos Sr. ";
console.log(heading.textContent);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading)


