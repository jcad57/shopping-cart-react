import Item from "./Item";

export default function Inventory({ inventory, cart, onSetCart, onSetOrderTotal, onDecreaseCartQty, USDollar }) {
  return (
    <>
      <h2 className="inventory-heading">Desserts</h2>
      <div className="inventory-container">
        {inventory.map((item) => (
          <Item
            USDollar={USDollar}
            item={item}
            key={item.name}
            onSetCart={onSetCart}
            cart={cart}
            onSetOrderTotal={onSetOrderTotal}
            onDecreaseCartQty={onDecreaseCartQty}
          />
        ))}
      </div>
    </>
  );
}
