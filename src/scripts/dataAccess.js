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

export const getRequests = () => {
    applicationState.requests.map(request => ({...request}))
}