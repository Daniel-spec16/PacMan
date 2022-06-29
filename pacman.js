
var pos = 0;
let pageWidth = window.innerWidth;

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];


var direction = 0;


let focus = 0;


function Run() {
  var img = document.getElementById('PacMan');
  var imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  console.log(img.src);
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}



function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  
  
  
  if((imgWidth+pos)>=pageWidth && (direction==0)){
    direction = 1;
  }
  if((pos)<0){
    direction = 0;
  }
  return direction;
}

setInterval(Run, 200);

module.exports = checkPageBounds;