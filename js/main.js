let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener('click', responsive_control);

function responsive_control() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function myFunction(){
    if(video.paused){
        video.play();
        btn.innerHTML="Pause"
    } else {
        video.pause();
        btn.innerHTML="Play";
    }
}

function thumb(x) {
    x.classList.toggle("fa-thumbs-down");
  }