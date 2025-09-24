import React, { useEffect, useState } from "react";
import waffles from "./assets/image-waffle-desktop.jpg";
import imageCart from "./assets/icon-add-to-cart.svg";
import Creme from "./assets/image-creme-brulee-desktop.jpg";
import Mix from "./assets/image-macaron-desktop.jpg";
import Tira from "./assets/image-tiramisu-desktop.jpg";
import Blakava from "./assets/image-baklava-desktop.jpg";
import Lemon from "./assets/image-meringue-desktop.jpg";
import velvet from "./assets/image-cake-desktop.jpg";
import brownie from "./assets/image-brownie-desktop.jpg";
import pana from "./assets/image-panna-cotta-desktop.jpg";
import Cartchild from "./Cartchild";
import AddCart from "./AddCart";
import Modal from "./Modal";

const MainCart = () => {
  const [showCart, setShowCart] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart && JSON.parse(savedCart).length > 0;
  });
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [isModal, setIsModal] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...item, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    setShowCart(true);
  };

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleDeletItems = (id) => {
    setCartItems((prev) => prev.filter((items) => items.id !== id));
  };

  const toggleComfirmOrder = () => {
    setIsModal(!isModal);
  };
  const toggleNewOrder = () => {
    setIsModal(false);
    setCartItems([]);
  };

  const OriginalCart = [
    {
      id: 1,
      image: waffles,
      cartImage: imageCart,
      title: "Waffle",
      subtitle: "Waffle with Berries",
      amount: "$6.50",
      text: "Add to Cart",
    },
    {
      id: 2,
      image: Creme,
      cartImage: imageCart,
      title: "Creme Brulee",
      subtitle: "Waffle with Berries",
      amount: "$7.00",
      text: "Add to Cart",
    },
    {
      id: 3,
      image: Mix,
      cartImage: imageCart,
      title: "Macron",
      subtitle: "Waffle with Berries",
      amount: "$8.00",
      text: "Add to Cart",
    },
    {
      id: 4,
      image: Tira,
      cartImage: imageCart,
      title: "Tiramisu",
      subtitle: "Waffle with Berries",
      amount: "$5.50",
      text: "Add to Cart",
    },
    {
      id: 5,
      image: Blakava,
      cartImage: imageCart,
      title: " Blakava",
      subtitle: "Waffle with Berries",
      amount: "$4.00",
      text: "Add to Cart",
    },
    {
      id: 6,
      image: Lemon,
      cartImage: imageCart,
      title: "Pie",
      subtitle: "Waffle with Berries",
      amount: "$5.00",
      text: "Add to Cart",
    },
    {
      id: 7,
      image: velvet,
      cartImage: imageCart,
      title: "Cake",
      subtitle: "Waffle with Berries",
      amount: "$4.50",
      text: "Add to Cart",
    },
    {
      id: 8,
      image: brownie,
      cartImage: imageCart,
      title: "Brownie",
      subtitle: "Waffle with Berries",
      amount: "$5.50",
      text: "Add to Cart",
    },
    {
      id: 9,
      image: pana,
      cartImage: imageCart,
      title: "Panna Cotta",
      subtitle: "Waffle with Berries",
      amount: "$6.50",
      text: "Add to Cart",
    },
  ];
  return (
    <div>
      <div className="flex ">
        <div>
          <h3 className="text-2xl font-bold p-5">Desserts</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 max-w-7xl mx-auto gap-5">
            {OriginalCart.map((items) => (
              <Cartchild
                key={items.id}
                items={items}
                handleAddToCart={() => handleAddToCart(items)}
                cartItems={cartItems}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            ))}
          </div>
        </div>
        <div className="p-4">
          {showCart && (
            <AddCart
              cartItems={cartItems}
              toggleDeletItems={toggleDeletItems}
              toggleComfirmOrder={toggleComfirmOrder}
            />
          )}
        </div>
      </div>
      <div>
        {isModal && (
          <Modal
            isModal={isModal}
            setIsModal={setIsModal}
            cartItems={cartItems}
            toggleNewOrder={toggleNewOrder}
          />
        )}
      </div>
    </div>
  );
};

export default MainCart;
