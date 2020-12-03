// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  name: "Luigi",
  surname: "Troiano",
  age: "24",
}
// console.log(studente);
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
for (var i = 0; i < StudentesseCheAvreiVolutoAvereInClasse.length; i++) {
  console.log("Studente: " + StudentesseCheAvreiVolutoAvereInClasse[i].name, StudentesseCheAvreiVolutoAvereInClasse[i].surname);
  }

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.