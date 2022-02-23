import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    
    //Convert each service request object into HTML
    //each must be a list element
    //has 1 parameter which is the object in the requests array
    const convertRequestToListElement = (request) => {
    //interpolate the description in the list element 
       return `
       <li>
           ${request.description}
           <button class="request__delete"
                   id="request--${request.id}">
               Delete
           </button>
       </li>
   `
    }

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
    
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
