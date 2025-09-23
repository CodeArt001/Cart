import React from "react";

const Modal = ({ setIsModal, isModal, cartItems, toggleNewOrder }) => {
  const total = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.amount.replace("$", "")) * item.quantity,
    0
  );
  return (
    <div
      onClick={() => setIsModal(!isModal)}
      className="bg-gray-700/80 absolute top-0 w-[100%] h-[100vh] flex items-center justify-center"
    >
      <div className="w-[25rem] bg-white h-[30rem] rounded-2xl shadow-xl p-5 overflow-y-auto">
        <p className="p-2  border rounded-full w-8 h-8 leading-none justify-center flex items-center border-purple-900">
          ✔️
        </p>
        <p className="text-2xl font-bold p-3">Order Comfirmed</p>
        <p className="text-gray-400 p-2">we hope you enjoy your food</p>

        {/* cartItems */}
        <div className="bg-gray-100 flex-1 space-y-4 p-3  ">
          {cartItems.map((item) => {
            const price = parseFloat(item.amount.replace("$", ""));
            return (
              <div key={item.id} className="   shadow">
                {/* itemscomfirmed */}
                <div className="flex p-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-10 h-10 shadow p-1"
                  />
                  <div className="flex flex-col items-center justify-between ">
                    <p>{item.subtitle}</p>
                    <span className="text-gray-500 flex gap-3">
                      <p className="text-red-600">{item.quantity}X</p> @ $
                      {price.toFixed(2)}
                    </span>
                  </div>
                  <p className="ml-auto">${price.toFixed(2)}</p>
                </div>

                {/* totalorder */}
              </div>
            );
          })}
          <div className="p-2 ">
            <div className="">
              <p className="font-semibold flex justify-between items-center  ">
                Order total :<span className=" ">${total.toFixed(2)}</span>
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={toggleNewOrder}
                className="border bg-red-700 rounded-full text-white border-red-700 py-2 px-7 text-sm flex items-center"
              >
                Start New Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
