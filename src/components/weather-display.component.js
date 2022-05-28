import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "./component.css";

export default function WeatherDisplay() {
  const [city, setCity] = useState("Adana");
  const [Weaether, setWeather] = useState({});

  const onCityChanged = (cityName) => {
    switch (cityName) {
      case "adana":
        setCity("adana");
        break;

      case "ankara":
        setCity("ankara");
        break;

      case "istanbul":
        setCity("istanbul");
        break;

      case "isparta":
        setCity("isparta");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=2dd82dab8dbb4144bd460744222605&q=${city}`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }, [city]);

  return (
    <div className="container">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Şehir Listesi
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              onCityChanged("adana");
            }}
          >
            Adana
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              onCityChanged("ankara");
            }}
          >
            Ankara
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              onCityChanged("istanbul");
            }}
          >
            İstnbul
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              onCityChanged("isparta");
            }}
          >
            Isparta
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Card className="cardd">
        <Card.Img
          style={{ width: "60px", height: "60px" }}
          src={Weaether?.current?.condition?.icon}
        />
        <Card.Body>
          <Card.Title>{Weaether?.location?.name}</Card.Title>
          <Card.Text>{`${Weaether?.current?.temp_c}°C `}</Card.Text>
          <Card.Text>{`${Weaether?.location?.localtime}`}</Card.Text>
          <Card.Text>{`humidity: ${Weaether?.current?.humidity}`}</Card.Text>
          <Card.Text>{`${Weaether?.current?.wind_kph} km/h`}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
