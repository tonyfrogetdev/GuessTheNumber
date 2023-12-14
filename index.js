import { prompt } from "./prompt.js";

// Fonction pour calculer un nombre aléatoire
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
// On stocke le nombre aléatoire de 0 à 100 dans la variable targetNumber
let targetNumber = getRandomNumber(100);
let nombreTours = 1;
console.log(targetNumber);

const playGuessingGame = () => {
  const guessNumber = prompt("Rentrez un nombre entre 0 et 100: ");
  // Boucle While créer pour compter nombre de tours
  while (guessNumber != targetNumber) {
    nombreTours++;
    // On vérifie ici si le prompt est bien un nombre
    if (isNaN(guessNumber) || guessNumber.length === 0) {
      console.log("Ce n'est pas un nombre, rentrer un nombre entre 0 et 100");
      return playGuessingGame();
    }
    console.log(guessNumber);
    if (guessNumber > targetNumber) {
      console.log("le nombre est trop grand");

      return playGuessingGame();
    } else if (guessNumber < targetNumber) {
      console.log("Le nombre est trop petit");
      return playGuessingGame();
    }
  }
  console.log("Vous avez trouver le nombre mystère, bravo !");
  console.log("Vous avez fait " + nombreTours + " essais");
};

playGuessingGame();
