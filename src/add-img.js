import dog from "./../images/images.jpg"

function addedImg(){
    console.log("Run addedImg");
    const img = document.createElement('img');
    img.alt = "Dog";
    img.src = dog;
    img.width = 400;
    const body = document.querySelector('body')
    body.appendChild(img);
}

export default addedImg