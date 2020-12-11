
var back_logo = document.querySelector(".main--landing");
var menu_big = document.querySelector(".menu--menu-item");

const checkpoint = 300;

function item_fading() {
    back_logo.classList.add("hidding");
}

function item_faded() {
    back_logo.classList.add("hidden");
}
console.log("one");
back_logo.classList.remove("hidding");
setTimeout(function () {
    item_fading();
}, 1500);

console.log("Two");

///gallery transform
var gallery_contents = document.querySelectorAll(".gallery--content-item");
var featured = document.getElementById("main--gallery-highlighted");

for (i = 0; i < gallery_contents.length; i++) {
    var gallery_content = gallery_contents[i];
    gallery_content.addEventListener("mouseover", function (e) {
        highlight_event(e.currentTarget);
    })
}


function highlight_event(eventTarget) {
    featured.innerHTML = eventTarget.innerHTML;

}
