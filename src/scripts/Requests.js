import { getRequests } from "./dataAccess.js";

export const reservationRequests = () => {
    
    const requests = getRequests()   //this variable holds the entire array
   
    // let arrayOfSortedReservations = requests.sort((a,b) => {
    //     return parseInt(a.reservationDate.split("-").join("")) - parseInt(b.reservationDate.split("-").join(""))
        
    
    //^^^array.sort method compares two elements contained in the array.In this case, we are comparing reservationDate key-value pair.
    // 

    const reservationRequestAsListElement = (request) => {
        return `<li>Party for ${request.childName} on ${request.reservationDate} </li>`
    }
    
    let html = `
        <ul>
            ${requests.map(reservationRequestAsListElement).join("")}
        </ul>`

    return html
}    
 