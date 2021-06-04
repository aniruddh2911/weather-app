import React from 'react';
// import { Counter } from './features/counter/Counter';
import { Provider } from "react-redux";
import store from './redux/store'
import image from './task2-image.svg'
import WeatherContainer from "./components/WeatherContainer"
import SearchCity from "./components/SearchCity"
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <img src={image} className="back-icon" alt="icon" style={{ top: "5vh", left: "3vw" }} />
      <SearchCity />
      <WeatherContainer />
      <img src={image} className="back-icon" alt="icon" style={{ bottom: "5vh", right: "3vw" }} />
    </div>
  </Provider>
  );
}

export default App;
