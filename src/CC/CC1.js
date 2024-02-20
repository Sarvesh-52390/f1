import React, { Component } from 'react'
import "../CC/CC.css"
import img1 from "../CC/images/Mangoes.jpg"
import img2 from "../CC/images/000377497.webp"
export default class Comp extends Component {
  constructor(){
    super();
    this.state={
            coun:0,count:0
    }
}
incrementop = () =>{
this.setState({coun:this.state.coun+1})
};
decrementop = () =>{
this.setState({count:this.state.count+1})
};
render() {
return (
  <div>
    <form>
        <center>
    <h1>Bob ate <span>{this.state.coun} </span>mangoes <span>{this.state.count}</span> bananas</h1><br></br><br></br><br></br>
    <div className='img1'>   <img src={img1} atl="hdh" width="300px" height="400px"/>
    </div>
    <div className='img2'>
        <img src={img2} alt='jfh' width="300px" height="400px"/>
    </div>
 <div className='man'>
  <button type="button" onClick={this.incrementop} >Eat Mango</button></div>
  <div className='ban'>
  <button type="button"onClick={this.decrementop}>Eat Banana</button></div>
  </center>
  </form>
  </div>
)
}
}