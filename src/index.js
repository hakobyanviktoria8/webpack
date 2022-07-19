import addedImg from "./components/addedImg/add-img"
import Button from "./components/button/button"
import Header from "./components/header/header"
import welcome from "./welcome"

const useBtn = new Button()
const header = new Header()

header.render()
addedImg()
useBtn.render()
welcome("home")