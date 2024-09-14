export default function CartItem({ item, handleRemoveItem, USDollar }) {
  return (
    <div className="cart-item">
      <div className="cart-item-description">
        <h4 className="cart-item-name">{item.name}</h4>
        <p>
          <span className="cart-item-quantity">{item.qty}</span>
          <span className="cart-item-quantity-price">@ {USDollar.format(Number(item.price))}</span>
          <span className="cart-item-total-price">{USDollar.format(Number(item.price * item.qty))}</span>
        </p>
      </div>
      <div className="remove-itm-btn" onClick={() => handleRemoveItem(item)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </div>
    </div>
  );
}
