import { sendRequest } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='birthdayChildName']").value
        const userNumberOfAttendees = document.querySelector("input[name='numberOfChildren']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value
        const userReservationLength = document.querySelector("input[name='reservationLength]").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userName,
            childName: userChildName,
            numberOfChildren: userNumberOfAttendees,
            address: userAddress,
            reservationDate: userReservationDate,
            reservationLengthInHours: userReservationLength
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
        
    }
})


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Name of parent</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="birthdayChildName">Name of birthday child</label>
            <input type="text" name="birthdayChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfChildren">How many children will attend?</label>
            <input type="number" name="numberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date Requested</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">How many hours?</label>
            <input type="number" name="reservationLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}