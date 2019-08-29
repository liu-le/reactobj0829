import React from 'react';
import './Cell.css';
import propTypes from 'prop-types';
import querystring from 'query-string';
import { Link } from "react-router-dom" 

export default class Cell extends React.Component {
  clickHandler = () => {
    if (this.props.linkApi) {// 条件为true--1
      // this.props.history.push("/detail/" + this.props.item.id)
      // console.log(this.props);
      this.props.history.push({pathname:`/detail/${this.props.item.id}`,search:querystring.stringify({dataName:this.props.dataName})})
    }
  }
  render() {
    // console.log(this.props);
    let {item,dataName} =this.props
    return (
      <div className='Cell'>
        {
          this.props.link ?
            // <Link to={'/detail/${item.id}?dataName=${dataName}'}>
            <Link to={{pathname:"/detail/"+item.id,search:querystring.stringify({dataName})}}>
              {
                this.props.noindex ?
                  <h2>{item.title}</h2> :
                  <h2>{item.id}.{item.title}</h2>
              }
              <p>{item.des}</p>
            </Link> :
            <div onClick={this.clickHandler}>
              {
                this.props.noindex ?
                <h2>{item.title}</h2> :
                <h2>{item.id}.{item.title}</h2>
              }
              <p>{item.des}</p>
            </div>
        }

      </div>
    )
  }
}
Cell.defaultProps = {
  noindex: false,
  linkApi: false,
  link: false,

};
Cell.propTypes = {
  noindex:propTypes.bool,
  link: propTypes.bool,
  linkApi: propTypes.bool,
  item:propTypes.object.isRequired,
  dataName:propTypes.string
};
