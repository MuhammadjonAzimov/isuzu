var menuList = document.getElementById("menuList");

menuList.style.height = "0px";

function togglemenu() {

    if (menuList.style.height == "0px") {
        menuList.style.height = "210px";
    }
    else {
        menuList.style.height = "0px";
    }
}