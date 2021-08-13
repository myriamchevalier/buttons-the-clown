import { fetchRequests } from "./dataAccess.js"
import { ButtonsTheClown } from "./ButtonsTheClown.js"


const mainContainer = document.querySelector("#container")


const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsTheClown()
        }
        )
    }

mainContainer.addEventListener(
        "stateChanged",
        customEvent => {
            render()
        }
    )
    
render()
