function menubar() {
    var menu_mobile = document.querySelector('.nav_lista');

    if (menu_mobile.style.display === "block") {
        menu_mobile.style.display = "none";
    } else {
        menu_mobile.style.display = "block";
    }
}