export default function ButtonAdjustQty({ onDecreaseCartQty, onSetCart, item, cartItem }) {
  return (
    <button className="add-to-qty--btn button-padding-adjust">
      <p id="decrease-qty-btn" className="change-qty--btn" onClick={() => onDecreaseCartQty(item)}>
        <div className="svg-border">
          <svg
            className="svg-qty-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2">
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </div>
      </p>
      {cartItem[0]?.qty}
      <p id="increase-qty-btn" className="change-qty--btn" onClick={() => onSetCart(item)}>
        <div className="svg-border">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
            <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
          </svg>
        </div>
      </p>
    </button>
  );
}
