import { assets } from "../assets/assets";

const Weather = () => {
  return (
    <div className="p-10 flex flex-col items-center rounded-2xl place-self-center bg-gradient-to-tr from-[#2f4680] to-[#500ae4]">
      <div className="flex items-center gap-3">
        <input type="text" placeholder="search" className="h-12 rounded-3xl text-[18px] border-none outline-none pl-6 bg-[#ebfffc] text-[#626262]" />
        <img src={assets.search_icon} alt="" className="w-12.5 p-4 rounded-3xl bg-[#ebfffc] cursor-pointer" />
      </div>
      <img src={assets.clear_icon} alt="" className="w-[150px] mt-[30px] mb-[30px]" />
      <p className="text-7xl/tight text-white">16°C</p>
      <p className="text-white text-4xl">Location</p>
      <div className="w-full mt-10 text-white flex justify-between">
        <div className="flex items-center gap-3 text-2xl">
            <img src={assets.humidity_icon} alt="" className="w-7  "/>
            <div className="flex flex-col items-start">
                <p>91 %</p>
                <span className="block text-[16px]">Humidity</span>
            </div>
        </div>
        <div className="flex items-start gap-3 text-2xl">
            <img src={assets.wind_icon} alt="" className="w-7 mt-2.5 "/>
            <div className="flex flex-col items-start">
                <p>3.6 Km/h</p>
                <span className="block text-[16px]">Wind Speed</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
