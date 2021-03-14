import React,{Component} from "react";
import "./todoitem.css"
const Todoitem=(props)=>{
    let {items,deleteitem}=props;
    let length=items.length;
    let theitems=length ? (items.map((e)=>{
        return(<div key={e.id}>
            <span className="name">{e.name}</span>
            <span className="age">{e.age}</span>
            <span className="action icon" onClick={()=>deleteitem(e.id)} >&times;</span>
        </div>)
    })
    )
    :(
        <p>no items to show</p>
    )
    return(<div className="listitems">
        <div>
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
        </div>
        {theitems}
    </div>)
}
export default Todoitem