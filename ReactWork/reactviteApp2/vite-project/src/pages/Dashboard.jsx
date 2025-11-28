import React, { useEffect, useState } from "react";

function Dashboard() {

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch("https://fakestoreapi.com/products");
      const jsonResponse = await serverResponse.json();
      setData(jsonResponse);
    }
    fetchData();
  }, []);

  function addToCart(item) {
    setCart(prev => [...prev, item]);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      
     
      <div style={{ marginBottom: "30px" }}>
        <h2> Cart ({cart.length})</h2>
        
        {cart.length === 0 ? (
          <h3>Cart is empty </h3>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#dff",
                  padding: "10px",
                  margin: "10px 0",
                  borderRadius: "8px",
                  fontWeight: "500"
                }}
              >
                {item.title} — ₹{item.price}
              </div>
            ))}

            <h2 style={{ color: "black" }}>Total: ₹ {total.toFixed(2)}</h2>
          </>
        )}
      </div>

  
      <h2> Products</h2>

      {data.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "2px solid gray",
                width: "300px",
                padding: "10px",
              }}
            >
              <img src={item.image} height={100} alt="product" />
              <h4>{item.title}</h4>
              <p>₹ {item.price}</p>
              <button 
                onClick={() => addToCart(item)}
                style={{ marginTop: "10px" }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;