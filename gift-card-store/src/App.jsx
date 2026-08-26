import { useState } from "react";
import "./App.css";
import GiftCard from "./GiftCard";

const giftCards = [
  { id: 1, name: "Amazon Gift Card", price: 500 },
  { id: 2, name: "Flipkart Gift Card", price: 1000 },
  { id: 3, name: "Myntra Gift Card", price: 1500 },
  { id: 4, name: "Netflix Gift Card", price: 2000 },
  { id: 5, name: "Steam Gift Card", price: 2500 },
  { id: 6, name: "PlayStation Gift Card", price: 3000 },
];

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  function buyNow() {
    setOrderCount(orderCount + 1);
  }

  return (
    <div className="app">

      <nav>
        <h1>Gift Card Store</h1>

        <div className="nav-right">
          <span>Cart: {cartCount}</span>
          <span>Orders: {orderCount}</span>
        </div>
      </nav>

      <h2 className="title">Choose Your Gift Card</h2>

      <div className="cards">

        {giftCards.map((card) => (
          <GiftCard
            key={card.id}
            card={card}
            addToCart={addToCart}
            buyNow={buyNow}
          />
        ))}

      </div>

    </div>
  );
}

export default App;