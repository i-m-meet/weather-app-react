import { assets } from "../assets/assets";

const Weather = () => {
  return (
    <div className="p-10 flex flex-col items-center rounded-2xl place-self-center bg-gradient-to-tr from-[#2f4680] to-[#500ae4]">
      <div className="flex items-center gap-3">
        <input type="text" placeholder="search" className="h-12 rounded-3xl text-[18px] border-none outline-none pl-6 bg-[#ebfffc] text-[#626262]" />
        <img src={assets.search_icon} alt="" className="w-12.5 p-4 rounded-3xl bg-[#ebfffc] cursor-pointer" />
      </div>
    </div>
  );
};

export default Weather;
