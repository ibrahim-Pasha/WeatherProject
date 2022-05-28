import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDisplay from "./components/weather-display.component";

export default function App() {
  return (
    <div className="App">
      <WeatherDisplay></WeatherDisplay>
    </div>
  );
}
