import "./gustos.scss"
import {implementNavigationBar} from "../utils/navigation";
import {implementFooter} from "../utils/footer";
import {setMusicPlayer} from "../utils/music";
// TODO hacer que los spoiler tags funcionen

// TODO averiguar cómo se importan esas babosadas

setMusicPlayer();
const navigationBar = document.getElementById("navigationBar");
implementNavigationBar(navigationBar);
implementFooter();