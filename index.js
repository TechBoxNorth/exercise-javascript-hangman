
// --------- hangman path variables ------------------
const noose = document.querySelector('#noose');
const head = document.querySelector('#head');
const body = document.querySelector('#body');
const arms = document.querySelector('#arms');
const legs = document.querySelector('#legs');
const scaffold = document.querySelector('#scaffold');
const ground = document.querySelector('#ground');

noose.setAttribute('opacity', 1);
head.setAttribute('opacity', 1);
body.setAttribute('opacity', 1);
arms.setAttribute('opacity', 1);
legs.setAttribute('opacity', 1);
scaffold.setAttribute('opacity', 1);
ground.setAttribute('opacity', 1);
// --------------------------------------------------

const wrongLetters = document.querySelector('.wrong-letters');
const letterBoxes = document.querySelector('.letter-boxes');

let answers = [
    "apple",
    "apricot",
    "artichoke",
    "asparagus",
    "aubergine",
    "eggplant",
    "avocado",
    "banana",
    "beet",
    "beetroot",
    "pepper",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "broccoli",
    "squash",
    "cabbage",
    "cantaloupe",
    "carrot",
    "cauliflower",
    "celery",
    "cherry",
    "chickpeas",
    "coconut",
    "corn",
    "cranberry",
    "cucumber",
    "dates",
    "durian",
    "feijoa",
    "fig",
    "garlic",
    "ginger",
    "gooseberry",
    "grape",
    "grapefruit",
    "honeydew",
    "kale",
    "kiwi",
    "leek",
    "lemon",
    "lentils",
    "lettuce",
    "lime",
    "lychee",
    "loquat",
    "mandarin",
    "mango",
    "mushrooms",
    "nectarine",
    "okra",
    "olive",
    "onion",
    "orange",
    "papaya",
    "passionfruit",
    "peach",
    "pear",
    "peas",
    "pineapple",
    "plum",
    "pomegranate",
    "potato",
    "pumpkin",
    "quince",
    "radish",
    "raspberry",
    "rhubarb",
    "silverbeet",
    "spinach",
    "onion",
    "squash",
    "starfruit",
    "strawberry",
    "sweet potato",
    "tamarillo",
    "tangerine",
    "tomato",
    "turnip",
    "watermelon",
    "zucchini"];
let answer = '';
let guesses = 0;
let guess = "";

function newGame(){
    rand = Math.round(Math.random() * (answers.length - 1));
    answer = answers[rand].toUpperCase();
    for(let i = 0; i < answer.length; i++){
        let newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.innerHTML = `<p></p>`;
        letterBoxes.appendChild(newBox);

    }
    console.log(answer);
}

document.addEventListener('keypress', (e) => {
    let letter = '';
    const code = e.code;
    if(code.toUpperCase() === `KEY${e.key.toUpperCase()}`){
        letter = e.key.toUpperCase();
    } else {
        
        switch(e.key){
            case 'å':
            case 'Å':
                letter = 'Å';
                break;
            case 'ä':
            case 'Ä':
                letter = 'Ä';
                break;
            case 'ö':
            case 'Ö':
                letter = 'Ö';
                break;
            default:
                alert('Använd bara bokstäver!');
        }
        
    }
    console.log(letter);
    checkLetter(letter);
    
});

function checkLetter(guess){
    if(answer.indexOf(guess) > -1){
        console.log(`The letter "${guess}" exists in the solution.`);
    } else {
        console.log(`The letter "${guess}" is not part of the solution.`);
        let newDiv = document.createElement('div');
        newDiv.classList.add('letter');
        newDiv.innerHTML = guess;
        wrongLetters.appendChild(newDiv);
    }
}

function addCorrectLetter(){

}

function addWrongLetter(){

}

function winLose(){

}

newGame();



