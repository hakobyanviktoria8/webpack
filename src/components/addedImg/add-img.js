import dog from "./../../../images/images.jpg"
import altText from "./imgAltText.txt"
import "./img.scss"

function addedImg(){
    console.log("Run addedImg");
    const img = document.createElement('img');
    img.alt = altText;
    img.src = dog;
    img.classList.add("imgDog")
    img.style.display="block"
    img.width = 400;
    const body = document.querySelector('body')
    body.appendChild(img);
}

export default addedImg