
import join from "lodash/join";
import "./style.scss"
import reactIcon from './assets/react-icon.svg'
import { usefulFunction } from "./somefile.js";

usefulFunction()


const element = document.createElement("article")

element.textContent = join(["Hello","Webpack"]," ");

element.classList.add("blue");

document.body.appendChild(element)


const reactImg = document.getElementById('reactImg')
reactImg.src = reactIcon

const button = document.createElement("button");
button.textContent = "Click button";
button.addEventListener("click", () => {
    console.log("button clicked");
})
document.body.appendChild(button)