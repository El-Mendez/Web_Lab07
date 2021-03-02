import song from "../../assets/audio/purple_vision.mp3";

 export function setMusicPlayer() {
    const music = document.createElement("audio");
    music.setAttribute("autoplay", "");
    music.setAttribute("controls", "");

    const source = document.createElement("source");
    source.src = song;
    document.body.appendChild(music);
    music.appendChild(source);

    if (typeof (Storage) !== "undefined"){
        music.currentTime = localStorage.playTime;
    }
    music.volume = 0.2;

    window.onbeforeunload = function (){
        localStorage.playTime = music.currentTime;
    }
}