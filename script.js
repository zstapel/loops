function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomInt(1, 100)
  console.log(rndInt)

  for (var i = 0; i < rndInt; i++) {
    var mainEl = document.getElementById("main");
    mainEl.innerHTML += 
    `
    <p><span>h</span><span>e</span><span>l</span><span>l</span><span>o</span></p>
    `;
 }

 var spacing = [
  '10px',
  '15px',
  '20px',
  '25px',
  '30px',
  '35px',
  '40px',
  '45px',
  '50px',
  '55px',
  '60px',
 ]

var rows = document.querySelectorAll("p");
rows.length = rndInt;

for (i = 0; i < rows.length; i++) {
  spacing = Math.floor(Math.random() * (max - min + 1) + min);
  rows[i].style.letterSpacing = spacing;
}

var letters = document.querySelectorAll("span");

var colors = [ 
  '#D6B69D',
  '#FB3E27',
  '#3B8965',
  '#7AAABB',
]

var fonts = [
  'Alfa Slab One',
  'Bahianita',
  'Barrio',
  'Blinker',
  'Bungee',
  'Chandler42',
  'Changa One',
  'Denk One',
  'Dokdo',
  'East Sea Dokdo',
  'Freckle Face',
  'Frijole',
  'Jockey One',
  'Kirang Haerang',
  'Modak',
  'Poplar Std',
  'Ruslan Display',
]

for (i; i < letters.length; i++) {
  color = Math.floor(Math.random() * (max - min + 1) + min) * colors.length;
  letters[i].style.backgroundColor = colors[color];
  font = Math.floor(Math.random() * (max - min + 1) + min) * fonts.length;
  letters[i].style.fontFamily = fonts[font];
}

// function randomCha(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// const rndCha = randomCha(1,10)
// console.log(rndCha)

// var small





 

// var times = rndInt;
//     for (let times = 0; times < rndInt; times++) {
//         document.getElementById("word").innerHTML = "hello";
//   }
// let str = "hello ";
// document.getElementById("word").innerHTML = str.repeat(rndInt);
// console.log(`hello': ${word.repeat(rndInt)}`);
// function randomNumber(min, max){
//     const r = Math.random()*(max-min) + min
//     return Math.floor(r)
// }

// for (var i = 0; i < 10; i++) {
//     var newDiv = document.createElement("div");
//     newDiv.innerHTML = (randomNumber(0, 10));
//     document.body.appendChild(newDiv);
//     // console.log(randomNumber(0, 10));
//   }