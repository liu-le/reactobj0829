import React from 'react';
import './Home.css'
import { Carousel } from 'antd-mobile';
import Cell from "../components/cell/Cell"
// import ReactSwipe from 'react-swipe';
export default class Home extends React.Component {
  state = {
    list: [],
    banners: [],
    imgHeight: 200,
    c: 'http://img.mp.sohu.com/upload/20170807/4916fff89d4c4d5eb351b3729af3f8dc_th.png'
  };
  componentDidMount() {
    Home.axios({
      url: "/mock/home",
      params: { _page: 1, _limit: 10 }
    }).then(res => this.setState({ list: res.data.data }));

    Home.axios({
      url: "/mock/banner",
      params: { _page: 1, _limit: 3 }
    }).then(res => {
      this.setState({ banners: res.data.data })
      // console.log(res.data.data)
    }
    )
  };
  clickHandler = (id, dataName, ev) => {
    console.log('clickHandler', id, dataName, ev)
    this.props.history.push({
      pathname: '/detail/' + id,
      search: '?dataName=' + dataName
    })

  }
  render() {
    let { list, banners } = this.state;
    return (
      <div className="Home">
        <Carousel
          autoplay={true}
          infinite
        >
          {banners.map(item => (
            <a
              key={item.id}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              onClick={()=>{this.clickHandler( item.id, 'banner')}}
              // onClick={this.clickHandler.bind(null, item.id, 'banner')}
            >
              <img
                src={this.state.c}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: '150' });
                }}
              />
              <div className="home-swiper__item__title">
                <div>{item.title}</div>
                <div>{item.sub_title}</div>
              </div>
            </a>
          ))}
        </Carousel>
        {
          list.map(item => (
            <Cell key={item.id} link item={item} dataName="home" />
          ))
        }
      </div>
    )
  }
}