var isMenuOpen = false;
var activeDropDownIndex = null;

//event listeners
var navMenu = document.querySelector(".faq--wrapper");
var navItems = document.querySelectorAll(".faq--question");

for (var i = 0; i < navItems.length; i++) {
    var navItem = navItems[i];
    //console.log(navItems.length, "maybe");
    (function (j) {
        navItem.addEventListener("click", function (e) {
            handleNavClick(j);
        });
    })(i);
}

function handleNavClick(i) {
    //console.log("hello");
    if (activeDropDownIndex == null) {
        openDropDownMenu(i);
        activeDropDownIndex = i;
    } else if (activeDropDownIndex == i) {
        //console.log(activeDropDownIndex, "before close");
        closeDropDownMenu();
        activeDropDownIndex = null;
    } else {
        //console.log(activeDropDownIndex, "should be switching");
        switchDropDownMenu(i);
        activeDropDownIndex = i;
    }
}

function closeDropDownMenu() {
    navItems[activeDropDownIndex].parentNode.classList.remove("open");
}
function openDropDownMenu(i) {
    navItems[i].parentNode.classList.add("open");
    navItems[i].parentNode.parentNode.classList.add("open");

    //console.log(activeDropDownIndex, "open_click");
}
function switchDropDownMenu(i) {
    navItems[activeDropDownIndex].parentNode.classList.remove("open");
    setTimeout(function () {
        navItems[i].parentNode.classList.add("open");
    }, 150);
}
