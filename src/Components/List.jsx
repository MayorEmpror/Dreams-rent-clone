import React from "react";
export default function List(props) {
    const items = props.items.map((e,k)=>{
   return  <li className="py-2 text-white/50" key={k}>{e}</li>
    
    })
   console.log(items)
    return (
      <ul className="mt-3">
        {items}
      </ul>
)
}