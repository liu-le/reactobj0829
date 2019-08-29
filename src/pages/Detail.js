import React from 'react';
import './Detail.css'
import zan from '../assets/img/zan.png'
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'
import querystring from 'query-string';
export default class Detail extends React.Component {
  state = {
    c:'http://img.sccnn.com/bimg/326/203.jpg',
    data: {
    }
  }
  componentDidMount() {
    // console.log("detail", this.props.match.params)
    let id = this.props.match.params.id - 0;
    let dataName = querystring.parse(this.props.location.search).dataName;
    Detail.axios({
      url: `/mock/${dataName}/${id}`
    }).then(
      res => this.setState({ data: res.data.data })
    )
  };
  render() {
    let { time, title, detail } = this.state.data;
    // console.log(time)
    return (
      <div className="Detail">
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={() => { this.props.history.go(-1) }}></li>
          </ul>
        </div>
        {
          detail && (
            <div className="content">
              <div className="header clear"><h2><img src={this.state.c} alt="" style={{width:40,height:40,marginTop:3,borderRadius:'50%'}}/></h2><p>{detail.auth}</p></div>
              <div className="cont">
                <h3>{title}</h3>
                <div className="time"><p>{Detail.date(time)}/{Detail.fillzero(8)}<span><img src={zan} alt="" /></span></p>
                </div>
                <div className="text-box" dangerouslySetInnerHTML={{__html:detail.content}}></div>
              </div>
            </div>
          )
        }
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="">
              <i><img src={xing} alt="" /></i>
            </a></li>
            <li className="fx"><a href="">
              <i><img src={fx} alt="" /></i>
            </a></li>
          </ul>
        </div>
      </div>
    )
  }
}