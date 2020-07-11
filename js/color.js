let arraycolore = ["blue", "green", "yellow", "orange", "red"];
let i = 0;
const back = document.querySelector('button')

back.addEventListener('click', changeColor);

function changeColor()
{
    if (i === 4) {
        i = 0;
    } else {
        i += 1;
    }
    console.log(i);
    document.body.style.backgroundColor = arraycolore[i];
}