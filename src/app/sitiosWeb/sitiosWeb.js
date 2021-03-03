import "./sitiosWeb.scss"
import {implementNavigationBar} from "../utils/navigation";
import {implementFooter} from "../utils/footer";
import {setMusicPlayer} from "../utils/music";

setMusicPlayer();
const navigationBar = document.getElementById("navigationBar");
implementNavigationBar(navigationBar);

implementFooter();