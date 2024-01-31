
// --------- hangman path variables ------------------
const stages = []
const winLoseText = document.querySelector('.win-lose');
const scaffold = document.querySelector('#scaffold');
stages.push(scaffold);
const ground = document.querySelector('#ground');
stages.push(ground);
const noose = document.querySelector('#noose');
stages.push(noose);
const head = document.querySelector('#head');
stages.push(head);
const body = document.querySelector('#body');
stages.push(body);
const arms = document.querySelector('#arms');
stages.push(arms);
const legs = document.querySelector('#legs');

stages.push(legs);
noose.setAttribute('opacity', 0);
head.setAttribute('opacity', 0);
body.setAttribute('opacity', 0);
arms.setAttribute('opacity', 0);
legs.setAttribute('opacity', 0);
scaffold.setAttribute('opacity', 0);
ground.setAttribute('opacity', 0);
// --------------------------------------------------

const wrongLetters = document.querySelector('.wrong-letters');
const letterBoxes = document.querySelector('.letter-boxes');

let winLose = false;

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
let guesses = '';
let errors = 0;
let checks = 0;
let guess = "";
winLoseText.innerText = '';

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
    if(!winLose){
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
        checkLetter(letter);
        checkForWin();
    } else {
        location.reload();
    }
});



function checkLetter(guess){
    if(guesses.includes(guess)){
        alert(`Du har redan gissat på bokstaven "${guess}"`);
        return;
    } else {
        guesses += guess;
    }
    if(answer.indexOf(guess) > -1){
        addCorrectLetter(guess);
    } else if(!answer.includes(guess)){
        addWrongLetter(guess);
    }
}

function addCorrectLetter(guess){
    for(let i = 0; i < answer.length; i++){
        if(guess === answer[i]){
            letterBoxes.children[i].firstChild.innerText = guess;
            checks += 1;
        }
    }
}

function addWrongLetter(guess){
    let newDiv = document.createElement('div');
    newDiv.classList.add('letter');
    newDiv.innerHTML = guess;
    wrongLetters.appendChild(newDiv);
    errors += 1;
    if(errors <= stages.length){
        stages[errors - 1].setAttribute('opacity', 1);
        if(errors === stages.length){
            lose();
        }
    }
    
}

function checkForWin(){
    if(checks === answer.length){
        win();
    }
}

function win(){
    winLose = true;
    console.log('You win!');
    winLoseText.innerText = 'YOU WIN!'
}

function lose(){
    winLose = true;
    console.log('You lose!');
    winLoseText.innerText = 'YOU LOSE!';
}

newGame();



