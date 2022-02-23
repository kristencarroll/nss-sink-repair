import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests } from "./dataAccess.js"

//Fetch the data from the API and store in application state
//before converting the structures to HTML representations

const mainContainer = document.querySelector("#container")

//Get help with syntax here.

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}
render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

