import song from "../../assets/audio/purple_vision.mp3";

 export function setMusicPlayer() {
    const music = document.createElement("audio");
    music.setAttribute("autoplay", "");
    // music.setAttribute("controls", "");
    music.setAttribute("loop", "");

    const source = document.createElement("source");
    source.src = song;
    document.body.appendChild(music);
    music.appendChild(source);

    if (typeof (Storage) !== "undefined"){
       try {
        music.currentTime = localStorage.playTime;
       } catch (e) {}
    }
    music.volume = 0.4;

    window.onbeforeunload = function (){
        localStorage.playTime = music.currentTime;
    }
}