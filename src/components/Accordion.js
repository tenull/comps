import { useState } from "react"
import {GoChevronDown,GoChevronLeft} from "react-icons/go"

function Accordion({ items }) {

    const [expandedIndex,setExpandedIndex]=useState(false)

    const handleClick = (nextIndex) =>{
        if(expandedIndex === nextIndex){
            setExpandedIndex(false)
        } else{
            setExpandedIndex(nextIndex)
        }
        
       }
    const renderedItems = items.map((item,index) => {
       const isExpanded = index ===expandedIndex

      const icon = <span className="text-2xl">
        {isExpanded? <GoChevronDown/>:<GoChevronLeft/>}
      </span>
        
    //    const content = isExpanded && <div>{item.content}</div>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>
                    
                    {item.label}
                    {icon}
                    </div>
                <div>{isExpanded && <div className="border-b p-5">{item.content}</div>}</div>
            </div>
        )
    })
    
    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>
}

export default Accordion