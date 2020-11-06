
var cur_time = new Date();
var back_logo = document.querySelector(".main--landing");
const checkpoint = 300;

/*
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = .25;
        back_logo.classList.add("hidden");
    }
    back_logo.style.opacity = opacity;
    //console.log(back_logo.style.opacity);
    //console.log(currentScroll);
});
*/
var item_opacity = 100;
var inter = window.getComputedStyle(back_logo).getPropertyValue("opacity");

function item_fade() {
    console.log("0");
    console.log(inter);
    for (var i = 1; item_opacity > i; i++) {
        console.log(inter);
        if (inter > .25) {
            inter = inter - .01;
            back_logo.setAttribute("opacity", inter);
            console.log.back_logo.
        }
        else {
            back_logo.classList.add("hidden");
        }
    }
}
back_logo.classList.remove("hidden");
item_fade();