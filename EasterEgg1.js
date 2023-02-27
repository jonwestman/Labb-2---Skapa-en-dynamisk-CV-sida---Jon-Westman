// easter egg that switches the background when the mouse is clicked on a certain item

function changeColor(color) {
    document.body.style.background = color;
    //document.body.style.backgroundImage = "url('smiley.gif') blue repeat-x center";
}

function easterEgg_Run(){
    changeColor('red');

}

function easterEggFix_Run(){
    changeColor('white');
}