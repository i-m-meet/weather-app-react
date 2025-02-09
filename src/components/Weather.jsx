import { useEffect } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useRef } from "react";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": assets.clear_icon,
    "01n": assets.clear_icon,
    "02d": assets.cloud_icon,
    "02n": assets.cloud_icon,
    "03d": assets.cloud_icon,
    "03n": assets.cloud_icon,
    "04d": assets.drizzle_icon,
    "04n": assets.drizzle_icon,
    "09d": assets.rain_icon,
    "09n": assets.rain_icon,
    "10d": assets.rain_icon,
    "10n": assets.rain_icon,
    "13d": assets.snow_icon,
    "13n": assets.snow_icon,
  };
  const search = async (city) => {
    if (!city) {
      alert("no city name is passed");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || assets.clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        temprature: Math.floor(data.main.temp),
        windSpeed: data.wind.speed,
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("error in fetching weather data");
    }
  };

  useEffect(() => {
    search("Toronto");
  }, []);

  return (
    <div className="p-10 flex flex-col items-center rounded-2xl place-self-center bg-gradient-to-tr from-[#2f4680] to-[#500ae4]">
      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="search"
          className="h-12 rounded-3xl text-[18px] border-none outline-none pl-6 bg-[#ebfffc] text-[#626262]"
        />
        <img
          src={assets.search_icon}
          alt=""
          className="w-12.5 p-4 rounded-3xl bg-[#ebfffc] cursor-pointer"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img
            src={weatherData.icon}
            alt=""
            className="w-[150px] mt-[30px] mb-[30px]"
          />
          <p className="text-7xl/tight text-white">
            {weatherData.temprature}°C
          </p>
          <p className="text-white text-4xl">{weatherData.location}</p>
          <div className="w-full mt-10 text-white flex justify-between">
            <div className="flex items-center gap-3 text-2xl">
              <img src={assets.humidity_icon} alt="" className="w-7  " />
              <div className="flex flex-col items-start">
                <p>{weatherData.humidity} %</p>
                <span className="block text-[16px]">Humidity</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-2xl">
              <img src={assets.wind_icon} alt="" className="w-7 mt-2.5 " />
              <div className="flex flex-col items-start">
                <p>{weatherData.windSpeed} Km/h</p>
                <span className="block text-[16px]">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Weather;
