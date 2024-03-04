import React from "react";

function Navbar() {
  return (
    <header className=" container mr-auto ml-auto">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">
            <i className="fa-regular fa-circle-check"></i>
            Promofocus
          </a>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-error flex text-center text-white  mr-2"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <i className="fa-solid fa-signal"></i>
            <span>report</span>
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <button className="btn btn-error flex text-center text-white">
            <i className="fa-solid fa-gear"></i>
            <span>settings</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
