import ButtonAdjustQty from "./ButtonAdjustQty";
import ButtonAddToCart from "./ButtonAddToCart";

export default function Item({ item, onSetCart, cart, onDecreaseCartQty, onSetOrderTotal, USDollar }) {
  const cartItem = cart.filter((currItm) => currItm.id === item.id);

  return (
    <div className="item">
      <img className="item--img" src={require(`${item.image.mobile}`)} alt={item.name} />
      {cart.find((cartItem) => cartItem.id === item.id) ? (
        <ButtonAdjustQty onDecreaseCartQty={onDecreaseCartQty} item={item} cartItem={cartItem} onSetCart={onSetCart} />
      ) : (
        <ButtonAddToCart onSetCart={onSetCart} item={item} />
      )}
      <span className="item--category">{item.category}</span>
      <h3 className="item--name">{item.name}</h3>
      <span className="item--price">{USDollar.format(Number(item.price))}</span>
    </div>
  );
}
