import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

import Workshops from "./components/Workshops";
import React, { useEffect, useState } from "react";
import Clock from "./components/Clock";


// import Workshops from './components/Workshops'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Throwback from "./components/Throwback";


function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("April 16,2022 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if(distance < 0){
        // stop timer

        clearInterval(interval.current);
      }
      else{
         // update timer
         setTimerDays(days);
         setTimerHours(hours);
         setTimerMinutes(minutes);
         setTimerSeconds(seconds);
      }
      
    });
  };

  useEffect(() => {
    startTimer();
  })





  return (
    <>
      <Router>
     
        <Switch>
          <Route path="/about">
          <Navbar />
            <About />
            <Footer />
          </Route>

          <Route path="/workshops">
          <Navbar />
            <Workshops />
            <Footer />
          </Route>
          
          <Route path="/">
          <Navbar />
            <Home />
            {/* <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} /> */}
            <Throwback />
            <Footer />
          </Route>
         
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
