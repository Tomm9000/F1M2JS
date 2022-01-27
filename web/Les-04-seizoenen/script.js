const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"Seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },
    {
        "titel":"Zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {
        "titel":"autumn",
        "image":"img/autumn.jpg",
        "backGround":"red"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    }
];

// let seizoen = {
//     "titel":"lente",
//     "image":"img/spring.jpg"
// };

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround
}
