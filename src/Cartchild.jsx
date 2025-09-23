import React from "react";

const Cartchild = ({
  items,
  handleAddToCart,
  cartItems,
  handleIncrement,
  handleDecrement,
}) => {
  const inCart = cartItems.find((item) => item.id === items.id);
  return (
    <div className=" ">
      <div className="relative hover:bg-red-400 transition duration-300 ">
        <img src={items.image} alt="" className="rounded-xl w-full h-auto  " />

        <div className="absolute -bottom-5 left-1/2  transform -translate-x-1/2">
          {!inCart ? (
            <span
              onClick={handleAddToCart}
              className="flex hover:border-red-400 cursor-pointer bg-white px-2 py-4 border-gray-400 items-center justify-center shadow border rounded-full text-sm gap-2 w-[8rem] h-[2.5rem]   "
            >
              <div className={`flex gap-3`}>
                <img className="font-bold" src={items.cartImage} alt="" />
                <p className="hover:text-red-400">{items.text}</p>
              </div>
            </span>
          ) : (
            <div className="hover:border-red-400 cursor-pointer  flex gap-4 hover:bg-red-500 bg-red-500 px-2 py-4 border-gray-400 items-center justify-center shadow border rounded-full w-[8rem] h-[2.5rem]  ">
              <button
                onClick={() => handleDecrement(items.id)}
                className="text-white font-bold hover:bg-red-400 border w-4 h-4 rounded-full flex items-center justify-center cursor-pointer bg-red"
              >
                -
              </button>
              <span className="font-bold text-white">
                {inCart?.quantity || 0}
              </span>
              <button
                onClick={() => handleIncrement(items.id)}
                className="text-white font-bold hover:bg-red-400 border w-4 h-4 rounded-full flex items-center justify-center cursor-pointer bg-red"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-gray-500 mt-5 ">{items.title}</p>
        <p className="font-bold">{items.subtitle}</p>
        <p className="text-red-400 font-bold">{items.amount}</p>
      </div>
    </div>
  );
};

export default Cartchild;
