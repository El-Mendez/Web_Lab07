import "./main.scss"
import {implementNavigationBar} from "../utils/navigation";
import {implementFooter} from "../utils/footer";

const navigationBar = document.getElementById("navigationBar");
implementNavigationBar(navigationBar);

const elegantFooter = document.getElementById("elegant-footer");
implementFooter(elegantFooter);