import data from "./data.json";
import Inventory from "./Invetory";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function App() {
  let id = 1;
  const inventory = data.map((item) => ({ ...item, id: id++, qty: 0 }));
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const [showOrderConfirm, setShowOrderConfirm] = useState(false);

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Manage current cart qty
  useEffect(
    function () {
      let currentQty = 0;
      cart.map((item) => (currentQty += item.qty));
      setCartQty(currentQty);
    },
    [cart]
  );

  function checkForZeroQty() {
    setCart((prevCart) => prevCart.filter((item) => item.qty !== 0));
  }

  function handleRemoveItem(item) {
    setCart((prevCart) => prevCart.filter((prevItem) => prevItem.id !== item.id));
    setOrderTotal((prevTotal) => prevTotal - item.price * item.qty);
  }

  function onSetCart(item) {
    // Determine if item is already in cart
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      // Increase QTY
      setCart((prevCart) =>
        prevCart.map((itm) => {
          return itm.id === item.id ? { ...itm, qty: itm.qty + 1 } : itm;
        })
      );
    } else {
      // Add item to cart
      setCart((prevCart) => [...prevCart, { ...item, qty: 1 }]);
    }
    // Update the order total
    setOrderTotal((prevTotal) => prevTotal + item.price);
  }

  function onDecreaseCartQty(item) {
    // Determine if item is already in cart
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      setOrderTotal((prevTotal) => prevTotal - item.price);
      // Decrease QTY
      setCart((prevCart) =>
        prevCart.map((itm) => {
          return itm.id === item.id ? { ...itm, qty: itm.qty - 1 } : itm;
        })
      );
    }
    // If QTY hits zero, remove item from cart
    checkForZeroQty();
  }

  function startNewOrder() {
    setShowOrderConfirm(!showOrderConfirm);
    setCart([]);
    setCartQty(0);
    setOrderTotal(0);
  }

  return (
    <>
      <div className="app-container">
        <section id="inventory">
          <Inventory
            inventory={inventory}
            onSetCart={onSetCart}
            cart={cart}
            onSetOrderTotal={setOrderTotal}
            onDecreaseCartQty={onDecreaseCartQty}
            USDollar={USDollar}
          />
        </section>

        <div className="cart-container">
          <section id="cart">
            <Cart
              USDollar={USDollar}
              cart={cart}
              cartQty={cartQty}
              orderTotal={orderTotal}
              handleRemoveItem={handleRemoveItem}
              setShowOrderConfirm={setShowOrderConfirm}
              showOrderConfirm={showOrderConfirm}
            />
          </section>
        </div>

        {showOrderConfirm && (
          // <div className="modal-backdrop">
          <div className="confirmation-modal-container">
            <section id="confirmation-modal">
              <ConfirmationModal
                USDollar={USDollar}
                cart={cart}
                onSetCart={onSetCart}
                setShowOrderConfirm={setShowOrderConfirm}
                showOrderConfirm={showOrderConfirm}
                startNewOrder={startNewOrder}
                orderTotal={orderTotal}
              />
            </section>
          </div>
        )}
      </div>
    </>
  );
}
