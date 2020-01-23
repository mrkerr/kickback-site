import React from 'react';
import Header from "./components_js/Header"
import HomeTop from "./components_js/HomeTop"
import HomeBottom from "./components_js/HomeBottom"
import Footer from "./components_js/Footer"
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="App">
        <Header/>
        <HomeTop/>
        <HomeBottom/>
        <Footer/>
    </div>
    )};
}

export default App;
