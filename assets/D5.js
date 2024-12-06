/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console. 
*/

console.log("ESERCIZIO 1")

const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i=0; i< pets.length; i++){
  console.log("Elemento array: " + pets[i]);

}
  

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2")


pets.sort();
console.log("Ordinare alfabeticamente: " + pets);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("ESERCIZIO 3")

pets.reverse();
console.log("Ordinare alfabeticamente in ordine invertito: " + pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4")

pets.push(pets.shift());
console.log("Spostare il primo elemento in ultima posizione: " + pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("ESERCIZIO 5")


const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]



  for (let i =0; i < cars.length; i++ ){
    cars[i].licensePlate = 'ABC'; 

}

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("ESERCIZIO 6")

const newCar = {
  brand: 'Toyota',
  model: 'Corolla',
  color: 'white',
  trims: ['comfort', 'luxury'],
  licensePlate:  'ABC',
};

cars.push(newCar);  
console.log(cars);




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/


console.log("ESERCIZIO 7")

const justTrims = []

for (let i=0; i < cars.length; i++){
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("ESERCIZIO 8")

for (let i =0; i < cars.length; i++ ){
  if (cars[i].color.charAt(0).toLowerCase() === "b") { 
    console.log("Frizz")
    
  } else {
    console.log ("Buzz")
  }

}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("ESERCIZIO 9")

for (let i =0; i < numericArray.length; i++ ){

  while (numericArray[i] < 33) {
    console.log(numericArray[i]); 
  i++; 
  }
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

console.log("ESERCIZIO 10")

const newsArray = [];

for (let i =0; i < charactersArray.length; i++ ){

  switch (charactersArray[i]) {
    case "a":
      newsArray.push(1)
      break;
    case "b":
      newsArray.push(2)
      break;
    case "c":
      newsArray.push(3)
      break;
    case "d":
      newsArray.push(4)
      break;
    case "e":
      newsArray.push(5)
      break;
    case "f":
      newsArray.push(6)
      break;
    case "g":
      newsArray.push(7)
      break;
    case "h":
      newsArray.push(8)
      break;
    case "i":
      newsArray.push(9)
      break;
    case "l":
      newsArray.push(10)
      break;
    case "m":
      newsArray.push(11)
      break;
    case "n":
      newsArray.push(12)
      break;
    case "o":
      newsArray.push(13)
      break;
    case "p":
      newsArray.push(14)
      break;
    case "q":
      newsArray.push(15)
      break;
    case "r":
      newsArray.push(16)
      break;
    case "s":
      newsArray.push(17)
      break;
    case "t":
      newsArray.push(18)
      break;
    case "u":
      newsArray.push(19)
      break;
    case "v":
      newsArray.push(20)
      break;
    case "z":
      newsArray.push(21)
      break;     
  
    default:
      console.log("Carattere non trovato");
      break;
  }


}
console.log(newsArray); 
