function GiftCard({ card, addToCart, buyNow }) {
  return (
    <div className="card">

      <h2>{card.name}</h2>

      <p className="price">₹{card.price}</p>

      <div className="buttons">

        <button
          className="buy"
          onClick={buyNow}
        >
          Buy Now
        </button>

        <button
          className="cart"
          onClick={addToCart}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default GiftCard;