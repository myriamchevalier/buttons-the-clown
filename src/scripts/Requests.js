import { getRequests } from "./dataAccess.js";

export const reservationRequests = () => {
    
    const requests = getRequests()   //this variable holds the entire array

    const reservationRequestAsListElement = (request) => {
        return `<li>Party for ${request.childName} on ${request.reservationDate} </li>`
    }
    
    let html = `
        <ul>
            ${requests.map(reservationRequestAsListElement).join("")}
        </ul>`

    return html
}    