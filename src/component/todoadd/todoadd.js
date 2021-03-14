import React,{Component} from "react";
import "./todoadd.css"
class Todoadd extends Component{
    state={
        name:"",
        age:""
    }
    handel=(e)=>{
        this.setState({
        [e.target.id]:e.target.value
        })
    }
    handelsub=(e)=>{
        e.preventDefault();
        if(e.target.name.value===""){
            return false
        }
        else{
            this.props.additem(this.state);
            this.setState({
                name:"",
                age:""
            })
        }
    }
    render(){
        return(<div>
            <form onSubmit={this.handelsub}>
            <input type="text" placeholder="inbut name ..." id="name" onChange={this.handel} value={this.state.name}/>
            <input type="number" placeholder="inbut age ..." id="age" onChange={this.handel} value={this.state.age}/>
            <input type="submit" value="add"/>
            </form>
        </div>)
    }
}

export default Todoadd