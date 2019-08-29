import React from "react";
import './Loading.css'
export default class Loaing extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    )
  }
}