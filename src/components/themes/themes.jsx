import "../../App.css";
import Title from "../Title";

const Themes = () => {
  return (
    <div className="flex items-center justify-between pt-9 relative">
      <Title />
      <div className="flex h-full items-center justify-center ">
        <h4 className="title__theme translate-y-4 tracking-wider">THEME</h4>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 translate-x-2">
            <label htmlFor="theme1" className="w-6 text-base text-[#ffe53d] ">
              1
            </label>
            <label htmlFor="theme2" className="w-6 text-base text-[#ffe53d] ">
              2
            </label>
            <label htmlFor="theme3" className="w-6 text-base text-[#ffe53d] ">
              3
            </label>
          </div>
          <div className="radio-container flex items-center rounded-full bg-[#230d3de9] p-1 gap-3 ">
            <input className="input h-[15px]" type="radio" id="theme1" />
            <input className="input h-[15px]" type="radio" id="theme2" />
            <input className="input h-[15px]" type="radio" id="theme3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
