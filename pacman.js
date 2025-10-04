let pos = 0;
let pageWidth = window.innerWidth;
let direction = 0;
let focus = 0;

const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];

function Run() {
    let img = document.getElementById('PacMan');
    let imgWidth = img.width;

    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    
    img.src = pacArray[direction][focus];
    
    if (direction === 0) {
        pos += 20;
        img.style.left = pos + 'px';
    } else {
        pos -= 20;
        img.style.left = pos + 'px';
    }
}
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    if (direction === 0 && pos + imgWidth >= pageWidth) {
        return 1;
    } else if (direction === 1 && pos <= 0) {
        return 0; 
    }
    return direction;
}
setInterval(Run, 200);
