import { reservationRequests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const ButtonsTheClown = () => {
    return `
    <h1>Buttons and Lollipop the Clowns</h1>

        <section>
            <h2>Request a reservation</h2>
            ${ServiceForm()}
        </section>

        <section>
            <h2>Reservations requested</h2>
            ${reservationRequests()}
        </section>
    `
}