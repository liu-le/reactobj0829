import React from 'react';
import "./App.css";
import Header from './Header'
import Home from '../pages/Home'
import Footer from './Footer'
import PubSub from 'pubsub-js'

import { Route, Switch, Redirect } from "react-router-dom"

import Follow from '../pages/Follow'
import Loading from '../components/loading/Loading'
import Column from '../pages/Column'
import User from '../pages/User'
import Reg from '../pages/Reg'
import Login from '../pages/Login'
import Detail from '../pages/Detail'
import Error from '../pages/Error'

export default class App extends React.Component {
  state = {
    bNav: true,
    bFoot: true,
    bLoading: false,

  }
  constructor() {
    super()
    this.token = PubSub.subscribe('VIEW_BLOADING', (msg, data) => {
      console.log('VIEW_BLOADING',msg,data)
      this.setState({ bLoading: data })
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)//取消订阅
  }
  componentWillReceiveProps(nextProps) {
    let path = nextProps.location.pathname;
    console.log('app', path)
  }
  componentDidMount() {
    let path = this.props.location.pathname;
    console.log('app', path)
  }

  checkPath = (path) => {
    if (/home|fllow|column/.test(path)) {
      this.setState({ bNav: true, bFoot: true })
    }
    if (/login|reg|detail/.test(path)) {
      this.setState({ bNav: true, bFoot: true })
    }
    if (/user/.test(path)) {
      this.setState({ bNav: true, bFoot: true })
    }
  }


  render() {
    let { bFoot, bLoading, bNav } = this.state;
    return (
      <div className='App'>

        {bLoading && <Loading />}

        {bNav && <Header></Header>}
        <Switch>
          < Route path="/home" component={Home} />
          {/* < Route path="/loading" component={Loading} /> */}
          < Route path="/follow" component={Follow} />
          < Route path="/Column" component={Column} />
          < Route path="/user" component={User} />
          < Route path="/login" component={Login} />
          < Route path="/reg" component={Reg} />
          < Route path="/Detail/:id" component={Detail} />

          <Redirect exact from="/" to="home" />
          < Route component={Error} />
        </Switch>
        {bFoot ? <Footer></Footer> : null}
      </div>
    )
  }
}


