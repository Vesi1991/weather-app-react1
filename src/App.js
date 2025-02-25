import "./App.css";
import React from "react";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Vesela Offer and is{" "}
          <a
            href="https://github.com/Vesi1991/weather-app-react1"
            terget="_blank"
          >
            open- sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
