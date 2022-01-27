const myImage = document.getElementById('myImage');
const myTitle = document.getElementById('myTitle')

let paintings = ["img/painting0.jpg", "img/painting1.jpg", "img/painting2.jpg", "img/painting3.jpg", "img/painting4.jpg", "img/painting5.jpg"];

let titles = ["De schilderijen van van Gogh", "De rode wijgaard", "De sterrennacht", "Sterrennacht boven de rh�ne", "Zonnebloemen", "Boerderij in de provence"];

function changeImage(index){
    myTitle.innerHTML = titles[index]
    myImage.src = paintings[index];
}