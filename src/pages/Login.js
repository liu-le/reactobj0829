import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
 export default class Login extends React.Component{
  render(){
    return (
      <div className="content">
        <p className="fhbtn"><a href="javascript:window.history.goBack()"></a></p>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to={"/login"}>登录</Link>
            <span></span>
            <Link to={"/reg"}>注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <li className="lifirst">
            <input type="text" defaultValue=""/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text" defaultValue=""/>
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
          <input type="button" value="登 录" className="login-btn"/>
          <a href="" className="tishi">忘记密码？</a>
        </div>
      </div>
    )
  }
}