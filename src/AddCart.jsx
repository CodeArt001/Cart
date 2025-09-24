import React from "react";

const AddCart = ({ cartItems, toggleDeletItems, toggleComfirmOrder }) => {
  const total = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.amount.replace("$", "")) * item.quantity,
    0
  );
  return (
    <div>
      <div className="shadow lg:w-[17rem] lg:h-[23rem] bg-white overflow-y-auto max-w-sm">
        <p className="p-3 text-red-500 ">Your Cart ({cartItems.length})</p>
        {cartItems.map((item) => {
          const price = parseFloat(item.amount.replace("$", ""));
          const itemTotal = price * item.quantity;
          return (
            <div key={item.id} className="p-3 ">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">{item.subtitle}</p>
                  <div
                    onClick={() => toggleDeletItems(item.id)}
                    className="border w-5 h-5 rounded-full p-0 text-gray-700 font-bold cursor-pointer leading-none flex items-center justify-center text-sm  text-center "
                  >
                    <span>&times;</span>
                  </div>
                </div>
                <p className="">
                  <span className="text-red-500 gap-5"> {item.quantity}x</span>{" "}
                  @$
                  {price.toFixed(2)}
                </p>
              </div>
              <p className="font-semibold">${itemTotal.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 font-bold text-right text-lg">
        Total: ${total.toFixed(2)}
      </div>
      <span className="flex flex-col items-center justify-center p-3">
        <button className="border rounded-md text-center font-bold text-[0.7rem] py-4 px-9 bg-gray-100 border-gray-100">
          This is a carbon natural delivery
        </button>
        <button
          onClick={toggleComfirmOrder}
          className="mt-4 lg:w-full bg-red-500 text-white lg:py-2 rounded-full  py-4 px-2 font-bold text-sm"
        >
          Confirm order
        </button>
      </span>
    </div>
  );
};

export default AddCart;
