import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {

state= {
  progress: 0
}
componentDidMount(){
  document.body.style.backgroundColor = "#292F6D";
}

setProgress = (progress)=> {
this.setState({progress:progress})
}
  render() {
    return (
      <Router>
        <Navbar title="NewsLetter- Daily news bits" />
        <LoadingBar
          color='#00ffe2'
          height={3}
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/general" element={
            <News setProgress={this.setProgress} key="general" country="in" category="general" />} />
          <Route exact path="/science" element={
            <News setProgress={this.setProgress} key="science" country="in" category="science" />} />
          <Route exact path="/sports" element={
            <News setProgress={this.setProgress} key="sports" country="in" category="sports" />} />
          <Route exact path="/entertainment" element={
            <News setProgress={this.setProgress} key="entertainmen" country="in" category="entertainment" />} />
          <Route exact path="/technology" element={
            <News setProgress={this.setProgress} key="technology" country="in" category="technology" />} />
        </Routes>
      </Router>

    )
  }
}

