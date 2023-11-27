import "../../App.css";
import Title from "../Title";

const Themes = () => {
  return (
    <div className="flex items-center justify-between pt-9 relative">
      <Title />
      <div className="flex h-full items-center justify-center ">
        <h4 className="title__theme translate-y-4 tracking-wider">THEME</h4>
        <div className="flex flex-col items-center">
          <div className="flex  gap-3 translate-x-2">
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
          <div className="flex items-center rounded-full bg-[#230d3de9] p-2 gap-4 ">
            <input className="input" type="radio" id="theme1" />
            <input className="input" type="radio" id="theme2" />
            <input className="input" type="radio" id="theme3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
