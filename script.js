// Programação do botão mobile da web
function menubar() {
    var menu_mobile = document.querySelector('.nav_lista');

    if (menu_mobile.style.display === "block") {
        menu_mobile.style.display = "none";
    } else {
        menu_mobile.style.display = "block";
    }
}

// Programação do botão de alterar o som do vídeo
function mutevideo() {
    var home_video = document.querySelector('.video_inicial');
    var menu_som = document.getElementById('muteIcon');

    if (home_video.muted) {
        home_video.muted = false;
        menu_som.setAttribute("name", "volume-high-outline");
    } else {
        home_video.muted = true;
        menu_som.setAttribute("name", "volume-mute-outline");
    }
}