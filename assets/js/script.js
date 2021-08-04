/*  //Transformer un string en nombre entier : 
let age = "23";

console.log(Number(age));

//Transformer un nombre entier en string : 

let a = 23;

console.log(a.toString());

//Transformer un string en array :

let sentence = "hello world"; 
console.log(sentence.split(" ")) //["hello", "there"]

// Transformer un array en string :

let word = ["o", "u", "i"] 
console.log(word.join("")) //oui
*/

//--------------------------------------------------//

/* let user = {  // array avec la key (age, name, gender) et la value (18/un nombre entier (int)/, "Emily" et "f"/2 strings/)
    age : 18,
    name : "Emily",
    gender : "f"
} 
if (user.age >= 18) {
    console.log(`Vous êtes majeur car vous avez ${user.age} ans`) // ECMAScript 6
} else { 
    console.log("Vous êtes mineur car vous avez" + user.age + "ans") 
}*/

//--------------------------------------------------//

/* // Si il n'y a qu'une seule instruction : on peut enlever les {} :

 if (user.age >= 18) console.log(`Vous êtes majeur car vous avez ${user.age} ans`) // ECMAScript 6
 else console.log("Vous êtes mineur car vous avez" + user.age + "ans") 

// fonctionne aussi avec les else if et plusieurs conditions
*/

//--------------------------------------------------//

/* //Quand on a qu'une instruction, on peut l'écrire sous forme de ternaire : 
user.age <= 18 ? console.log(`Vous êtes majeur car vous avez ${user.age} ans`) : console.log("Vous êtes mineur car vous avez" + user.age + "ans");
*/

//--------------------------------------------------//

/* //new Date = on instencie un objet de la classe Date -> c'est un objet
let date = new Date();
let day = date.getDay(); //on obtient la date du jour
switch (day) {
    case 6:
        console.log("samedi")
        break;
    case 7:
        console.log("dimanche")
        break;
    default:
        console.log("week-end")
}*/

//--------------------------------------------------//

/*class User 
{
    constructor (name, life, strength) //permet de créer et initialiser une classe
    {
        this.name = name
        this.life = life
        this.strength = strength
    }
    hit() {
        return this.strength - 5 
    }
}

// -> dès qu'on crée un nouvel objet de la classe User, ses paramètres sont (name, life, strength) :

let john = new User('John', 20, 12); 
console.log(john); //console.log de l'objet créé
console.log(john.hit()); //console.log de la fonction qui y est associée

let users = ["john", "jack", "Daniel"]

for (let item of users) {
    console.log(item)
}
*/

//--------------------------------------------------//

/* //créer uneb boucle array afin de parcourir un objet itérable 
// Permet d'éxecuter une ou plusieurs instructions pour la valeur de chaque propriété.
let sayHello = "hello there" 
for(let letter of sayHello) {
    console.log(letter)
} //parcourt chaque lettre de sayHello et la display dans la console
*/

//--------------------------------------------------//

/*function add(x, y) { //x et y sont les arguments de la fonction
    return x + y
}
alert(add(6, 7)) //attribue la valeur 6 à x et la valeur 7 à y
*/

//--------------------------------------------------//

/* //fonction fléchée :
let add = (a, b) => a + b;
// au lieu d'avoir : 
function add(a, b) {
    return a + b;
}

let item = [1, 2, 3, 4, 5];
item.forEach(item => console.log(item * 2)); // function(item) {console.log(item * 2)}
let result = item.map(item => item * 2);
console.log(result.reduce((a, b) => a + b));*/

//--------------------------------------------------//

/* //Création d'un élément html : 

let title = document.createElement('h1')
let body = document.body;
body.appendChild(title)
*/

//--------------------------------------------------//

/*
// -------  DOM : DOCUMENT OBJECT MODEL ------------

// id = unique 
//class = peut y en avoir plusieurs (ils permettent d'indentifier la balise) {ex : bootstrap}

let text1 = document.getElementsByClassName('text1'); // .getElementById pour les id

console.log(text1);

text1[0].innerHTML = 'Je suis le texte créé en js'; //0 pour accéder à l'élément

let txt = document.querySelector('.txt');
txt.style.display = 'none';

let button = document.getElementsByClassName('button');

button[0].innerHTML = 'Je suis le texte créé en js' //innerHTML permet de modifier l'HTML
button[0].addEventListener("click", () => {
    txt.style.display = 'block' //permet de changer le display => de none (caché), ça pase à block
})
*/
