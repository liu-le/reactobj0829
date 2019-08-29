import React from 'react';
import './Follow.css'
import Cell from "../components/cell/Cell";
export default class Follow extends React.Component {
  state = {
    list: []
  };
  componentDidMount() {
    Follow.axios({
      url: "/mock/follow",
      params: { _page: 1, _limit: 8 }
    }).then(
      res => {
        this.setState({ list: res.data.data })
        // console.log(res.data.data)
      }
    )
  };
  render() {
    let { list } = this.state
   
    return (
      <div className="Follow">
        {
          list.map((item) => (
            <Cell key={item.id} linkApi item={item} history={this.props.history} dataName="follow" />
          ))
        }
      </div>
    )
  };
}   