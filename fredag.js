console.log("Hello Matrix");

let x = 10;
const y = 5;
let z = x + y;
console.log(z);

let b = 1;
console.log(b++);
console.log(b);

let c = 1;
console.log(c--);
console.log(c);

let a = 2;
let d = a * a;
console.log(d);

let o = 3;
let p = o * o;
console.log(p);

/*function myMultiply()
/*{
let x= $('#num1').val();
let y= x*x;
alert(x+" times "+x+" equals "+y);
return false;
}
console.log(answer);
*/

let h = 20;
let g = 18;
if (h > g);
else g > h;
console.log(h > g);

/*let age = 18
const userAge = userAge ? userAge = "Myndig" : userAge = "Barn"
console.log(userAge)
*/

/*
let userAge = prompt("Er du gammel nok til å stemme?", "");

let borger = 20
let E = 19
let R = 6
if (borger === 'E' && userAge >= 18) {
  alert("Du kan stemme!");
} else { (borger === `R` && userAge <= 6)
  alert("Du er bebissss");
}*/

function isEven(num) {
  num%0 === 2 ? 
  console.log("odd") : console.log("even");
}
isEven(1);
/*
function erEven (x)
if ((x % 2) == 0) {
    console.log ("even")
 } else {
    console.log ("odd")
 }
 */
 const userMale = true 
 const userTitle = userMale ? "Mr" : "Mrs"
 
 console.log(userTitle)
 
 userTitle === "Mr" ? console.log("Heisan flotte herremann!") : userTitle === console.log("Hei fine frue!")
 
 let fName = "Terjesen"
 console.log
 
 userTitle === "Mr" ? console.log(`Heisan Mr. ${fName}!`) : console.log(`halla Mrs. ${fName}!`)
 
 function hilsningsFunksjon(navn, timePåDagen) {
  if (timePåDagen >= 0 && timePåDagen < 24) {
      if (timePåDagen >= 0 && timePåDagen < 6) {
          return `God natt ${navn}`;
      } else if (timePåDagen >= 6 && timePåDagen < 12) {
          return `God morgen ${navn}`;
      } else if (timePåDagen >= 12 && timePåDagen < 18) {
          return `God dag ${navn}`;
      } else {
          return `God kveld ${navn}`;
      }
  } else {
      return "Ugyldig tidspunkt";
  }
}

console.log(hilsningsFunksjon("Gunnar", 19));
console.log(hilsningsFunksjon("Anna", 8));
console.log(hilsningsFunksjon("Ole", 3));
console.log(hilsningsFunksjon("Ingrid", 25));

