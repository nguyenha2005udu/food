import React, { useState } from "react";
import MenuItem from "./components/MenuItem";
import OrderSummary from "./components/OrderSummary";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";


const App = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Bánh mì xúc xích",
      title: "1 xúc xích",
      price: 15000,
      quantity: 1,
      selected: false,
      image: "bmxx.png",
    },
    {
      id: 2,
      name: "Trà chanh",
      title: "1 trà chanh",
      price: 15100,
      quantity: 1,
      selected: false,
      image: "bmxx.png",
    },
    {
      id: 3,
      name: "Xúc xích rán",
      title: "1 xúc xích",
      price: 10000,
      quantity: 1,
      selected: false,
      image: "bmxx.png",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleSelectAll = (isSelected) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => ({ ...item, selected: isSelected }))
    );
  };

  const handleSelectItem = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleDeleteProduct = (id) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <Header />
  
      {/* Navbar */}
      <Navbar />
  
      <div className="container">
        <div className="search-icon-list">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
            alt="Cart Icon"
          />
          <h1>Giỏ Hàng</h1>
        </div>
        <div className='container_product'>
          <Shop item={menuItems}></Shop>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onSelectItem={handleSelectItem}
            onDeleteProduct={handleDeleteProduct}
          />
        ))}
        <OrderSummary
          items={menuItems}
          onSelectAll={handleSelectAll}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
      </div>
      
  
      {/* Footer */}
      
        <Footer />
      
    </div>
  );
}
export default App;