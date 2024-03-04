import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="">
      <div className="bg-red-500 h-[800px]">
        <Navbar />
        <div className="card w-[600px] h-96 glass mr-auto ml-auto mt-12">
          <div className="card-body ">
            <div className="flex justify-between">
              <button className="btn btn-error">
                <h2 className="text-white font-bold text-lg">Pomodaro</h2>
              </button>
              <button className="btn btn-error">
                <h2 className="text-white font-bold text-lg">Short break</h2>
              </button>
              <button className="btn btn-error">
                <h2 className="text-white font-bold text-lg">Long break</h2>
              </button>
            </div>
            <h2 className=" text-center text-white text-9xl font-bold">
              25:00
            </h2>
            <div className="card-actions justify-center">
              <button className="btn  btn-ghost text-4xl mt-3 w-[150px] h-[60px] bg-white text-red-500 hover:text-white">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
