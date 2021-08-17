import { fetchRequests } from "./dataAccess.js"
import { ButtonsTheClown } from "./ButtonsTheClown.js"


const mainContainer = document.querySelector("#container")


const renderHTML = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
        )
    }

mainContainer.addEventListener(
        "stateChanged",
        customEvent => {
            renderHTML()
            console.log("State changed, re-render all HTML")
        }
    )
    
renderHTML()
