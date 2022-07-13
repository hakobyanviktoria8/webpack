import "./btnStyle.scss"

class Button {
    render(){
        const btn = document.createElement("button");
        btn.innerHTML = "Click me";
        btn.classList.add("btnStyle")
        const body = document.querySelector("body");
        body.appendChild(btn);
        btn.onclick = function () {
            const p = document.createElement("p")
            p.innerHTML = "Some text"
            body.appendChild(p)
        }
    }
}
export default Button