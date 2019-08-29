import React from 'react';
import './Column.css'
import Cell from "../components/cell/Cell";
import { Link } from "react-router-dom";
export default class Column extends React.Component {
  state = {
    lis: []
  }
  componentDidMount() {
    Column.axios({
      url: "/mock/column",
      params: { _page: 1, _limit:10 }
    }).then(
      res =>
        this.setState({ list: res.data.data })
    )
  };
  render() {
    let { list } = this.state
    // console.log(list)
    return (
      <div className="Column">
        {
          list&&list.map(item => (
            <Link key={item.id} to={`/detail/${item.id}?dataName=column`}>
              <Cell noindex item={item} />
            </Link>

          ))
        }
      </div>
    )
  }
}