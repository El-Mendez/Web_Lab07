
import "./identificame.scss"
import {implementNavigationBar} from "../utils/navigation";
import {implementFooter} from "../utils/footer";
import {setMusicPlayer} from "../utils/music";
import {implementCarousel} from "../utils/carousel";
import 'bootstrap/dist/js/bootstrap.js'

// Imagenes para el carrusel
import gato from "../../assets/img/Gato con Lentes.jpg";
import zum from "../../assets/img/Zum.png";
import gato_mejorado from "../../assets/img/gato_lentes.png";
import picasso from "../../assets/img/Drawing.png";

setMusicPlayer();
const navigationBar = document.getElementById("navigationBar");
implementNavigationBar(navigationBar);
implementFooter();

const carousel = document.getElementById("imageCarousel");
implementCarousel(carousel, [
    {
        src: zum,
        active: true,
        alt: "zum stonks",
        header: "zum",
        text: "zum",
    },
    {
        src: picasso,
        active: false,
        alt: "imagen de un gato con lentes",
        dark: true,
        header: "Picasso",
        text: "Completamente original",
    },
    {
        src: gato,
        active: false,
        alt: "imagen de un gato con lentes",
        header: "Mi gato",
        text: "Pa el Discord",
    },
    {
        src: gato_mejorado,
        active: false,
        alt: "imagen de un gato con lentes",
        text: "Me puse a hacer Photoshop",
    },
])