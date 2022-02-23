
const applicationState = {
   //store the external data in this application state when you 
   //FETCH it.
    //create a requests property in this object, and its initial
    //value is an empty array.

    requests: [ ]

}

//Following variable and function use fetch to grab existing requests
const API = "http://localhost:8088"

export const fetchRequests = () => {
    //what is this syntax?
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

//Declare mainContainer for use below
const mainContainer = document.querySelector("#container")

//Define and export a function that returns a copy of 
//the requests state.
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

