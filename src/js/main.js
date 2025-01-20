import { initScrollReveal } from "./scrollReveal.js";
import  "./filterSkills.js"
import { typeWrite } from "./typeWrite.js";
import { menu } from "./menu.js";
import "./tabs.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));