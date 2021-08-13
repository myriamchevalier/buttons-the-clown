const applicationState = {         
    requests: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
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
    applicationState.requests.map(request => ({...request}))
}