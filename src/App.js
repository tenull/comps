import Accordion from "./components/Accordion"
import Dropdown from "./components/Dropdown"
import { useState } from "react"


function App() {

    const[selection,setSelection] = useState(null)

    const handleSelect = (option) =>{
        setSelection(option)
    }

    const options = [
        {
            label: 'red', value: 'red'
        },
        {
            label: 'Green', value: 'green'
        }, {
            label: 'Blue', value: 'blue'
        },
    ]


    return <Dropdown value={selection} onChange={handleSelect} options={options} />

}

export default App