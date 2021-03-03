import "./sitiosWeb.scss"
import {implementNavigationBar} from "../utils/navigation";
import {implementFooter} from "../utils/footer";
import {setMusicPlayer} from "../utils/music";
// import '../../../node_modules/bootstrap/dist/js/bootstrap.js'
// import '../../../node_modules/popper.js/dist/popper.min.js'
// import "popper.js/dist/popper.min.js"

setMusicPlayer();
const navigationBar = document.getElementById("navigationBar");
implementNavigationBar(navigationBar);

implementFooter();