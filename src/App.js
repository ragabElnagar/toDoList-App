import React,{Component} from "react";
import Todoitem from "./component/todoitem/todoitem";
import Todoadd from "./component/todoadd/todoadd"
class App extends Component {
  state={
    items:[
      {id:1,age:23,name:"ragab"},
      {id:2,age:25,name:"ahmed"},
      {id:3,age:24,name:"owno"}
      
    ]
  }
  deleteitem=(id)=>{
    let items=this.state.items;
    let i=items.findIndex(item=>item.id===id)
    items.splice(i,1);
    this.setState({items:items})
  }

  additem=(e)=>{
     e.id=Math.random();
  let items=this.state.items;
    items.push(e);
    this.setState({items:items})
  }
  render(){
  return (
    <div className="App container">
      <h1 className="text">ToDO List</h1>
      <Todoitem items={this.state.items} deleteitem={this.deleteitem}/>
      <Todoadd additem={this.additem}/>
    </div>
  );
}
}
export default App;
