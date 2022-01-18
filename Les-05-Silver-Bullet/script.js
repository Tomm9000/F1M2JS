const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")

let lokaties =[
    {
        "titel":"locatie 0",
        "image":"img/0.jpg"
    },

    {
        "titel":"locatie 1",
        "image":"img/1.jpg"
    },
    {
        "titel":"locatie 2",
        "image":"img/2.jpg"
    },

    {
        "titel":"locatie 3",
        "image":"img/3.jpg"
    },
    {
        "titel":"locatie 4",
        "image":"img/4.jpg"
    },

    {
        "titel":"locatie 5",
        "image":"img/5.jpg"
    },
    {
        "titel":"locatie 6",
        "image":"img/6.jpg"
    },

    {
        "titel":"locatie 7",
        "image":"img/7.jpg"
    },
    {
        "titel":"locatie 8",
        "image":"img/8.jpg"
    },
    {
        "titel":"locatie 9",
        "image":"img/9.jpg"
    },

    {
        "titel":"locatie 10",
        "image":"img/10.jpg"
    },
    {
        "titel":"locatie 11",
        "image":"img/11.jpg"
    }
    
];

// myTitle.innerHTML = "dit is door het script toegevoegd"
// myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value);
    // console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}