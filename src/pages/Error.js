import React from 'react';
import './Error.css'
export default class Error extends React.Component{
  render(){
    return (
      <div className="Error">
        <h3>Error123</h3>
        <h3>Error123</h3>
        <h3>Error123</h3>
        <h3>Error123</h3>
        <h3>Error123</h3>
        <h3>Error123</h3>
        <h3>Error123</h3>
        <button href="##" onClick={()=>{this.props.history.goBack()}}>返回</button>
      </div>
    )
  }
}