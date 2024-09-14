export default function CartItemModal({ item, USDollar }) {
  return (
    <>
      <div className="confirmation--cart-item">
        <img className="confirmation--item-thumb" src={require(`${item.image.thumbnail}`)} alt={item.name} />
        <div className="cart-item-information">
          <div className="cart-item--align">
            <span className="cart-item--heading">{item.name}</span>
            <p>
              <span className="cart-item--qty">{item.qty}x</span>{" "}
              <span className="cart-item--price">@ {USDollar.format(Number(item.price))}</span>
            </p>
          </div>
          <div>
            <p className="cart-item--total">{USDollar.format(Number(item.price * item.qty))}</p>
          </div>
        </div>
      </div>
    </>
  );
}
