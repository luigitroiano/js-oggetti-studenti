// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  name: "Luigi",
  surname: "Troiano",
  age: "24",
}
// console.log(studente);
document.getElementById("paragrafo").innerHTML = "PUNTO 1:";
for (var key in studente) {
  console.log(key,studente[key]);
  document.getElementById("paragrafo").innerHTML += " " + studente[key];
}
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
StudentesseCheAvreiVolutoAvereInClasse  = [
  {
    name: "Emily",
    surname: "Ratajkowski",
    age: 29,
  },
  {
    name: "Miriam",
    surname: "Leone",
    age: 35,
  },
  {
    name: "Anne",
    surname: "Hathaway",
    age: 38,
  }
];
//console.log(StudentesseCheAvreiVolutoAvereInClasse);
document.getElementById("paragrafo2").innerHTML = "PUNTO 2:" + "<br>";
for (var i = 0; i < StudentesseCheAvreiVolutoAvereInClasse.length; i++) {
  console.log("Studente: " + StudentesseCheAvreiVolutoAvereInClasse[i].name, StudentesseCheAvreiVolutoAvereInClasse[i].surname);
  document.getElementById("paragrafo2").innerHTML += " " + StudentesseCheAvreiVolutoAvereInClasse[i].name + " " + StudentesseCheAvreiVolutoAvereInClasse[i].surname + "<br>";
  }

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newName = prompt("Inserisci il tuo Nome");
var newSurname = prompt("Inserisci il tuo Cognome");
var newAge = Number(prompt("Inserisci la tua età"));

var nuovoStudente = {
  name: newName,
  surname: newSurname,
  age: newAge,
}
document.getElementById("paragrafo3").innerHTML = "PUNTO 3:" + "<br>" + "Welcome " + nuovoStudente.name + " " + nuovoStudente.surname;;
// for (var key in nuovoStudente) {
//   console.log(key,nuovoStudente[key]);
//   document.getElementById("paragrafo3").innerHTML += " " + nuovoStudente[key];
// }
document.getElementById("paragrafo4").innerHTML = "This is your class: " + "<br>";

StudentesseCheAvreiVolutoAvereInClasse.push(nuovoStudente);

for (var i = 0; i < StudentesseCheAvreiVolutoAvereInClasse.length; i++) {
  document.getElementById("paragrafo4").innerHTML += " " + StudentesseCheAvreiVolutoAvereInClasse[i].name + " " + StudentesseCheAvreiVolutoAvereInClasse[i].surname + "<br>";
  }