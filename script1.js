
function blink(){
    let val = document.querySelector("#header");
    if (val.style.visibility === 'hidden')
    {
        val.style.visibility = 'visible';
    }
    else
    {
        val.style.visibility = 'hidden';
    }
}
window.setInterval(blink,500);