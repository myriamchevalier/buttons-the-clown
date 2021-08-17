const applicationState = {         
    requests: [],
    clowns: [],
    
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch(`${API}/requests?_sort=reservationDate`) // Adding a ? after requests let you use methods on the data you're fetching. In this case _sort by reservationDate.
        .then (res => res.json())
        .then(
            (reservationRequests) => { 
                applicationState.requests = reservationRequests
            }
        )
}


export const sendRequest = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}