const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById('knopNoord');
const knopOost = document.getElementById('knopOost');
const knopWest = document.getElementById('knopWest');
const knopZuid = document.getElementById('knopZuid');

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "west": document.getElementById('knopWest'),
    "zuid": document.getElementById('knopZuid'),

}

let current_index = 0;

let lokaties =[ // Array
    { //0 = Object
        "titel":"locatie 0",
        "image":"img/0.jpg",
        "directions":{
            "zuid": 1
        }
    },
    { //1 = Object
        "titel":"locatie 1",
        "image":"img/1.jpg",
        "directions":{
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    {
        "titel":"locatie 2",
        "image":"img/2.jpg",
        "directions":{
            "oost": 1,
            "zuid": 3
        }
    },

    {
        "titel":"locatie 3",
        "image":"img/3.jpg",
        "directions":{
            "oost": 1,
            "zuid": 3
        }
    },
    {
        "titel":"locatie 4",
        "image":"img/4.jpg",
        "directions":{
            "oost": 4,
        }
    },

    {
        "titel":"locatie 5",
        "image":"img/5.jpg",
        "directions":{
            "oost": 6,
            "noord": 10,
            "west": 1
        }
    },
    {
        "titel":"locatie 6",
        "image":"img/6.jpg",
        "directions":{
            "west": 5,
            "zuid": 11,
            "oost": 7
        }
    },

    {
        "titel":"locatie 7",
        "image":"img/7.jpg",
        "directions":{
            "noord": 9,
            "zuid": 8
        }
    },
    {
        "titel":"locatie 8",
        "image":"img/8.jpg",
    },
    {
        "titel":"locatie 9",
        "image":"img/9.jpg",
    },
    {
        "titel":"locatie 10",
        "image":"img/10.jpg",
    },
    {
        "titel":"locatie 11",
        "image":"img/11.jpg",
    }
    
];

// myTitle.innerHTML = "dit is door het script toegevoegd"
// myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // Haal de mogelijke directions op voor de current_index
    let possible = lokaties[current_index].directions;

    // Zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);

    // Zet de keys van de buttons in een aparte variabele
    let button_keys = Object.keys(directionButtons);

    // Zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
        
    }

    //zet nu de mogelijke knoppen aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible"
    }

}

function getInput(){
    show(myInput.value);
    // console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}


show(0);