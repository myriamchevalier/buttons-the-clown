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
