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
    
});

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
    "Brussels sprouts",
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
    "green beans",
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
let answer = answers[13].toUpperCase();
let guesses = [];
let guess = "";
