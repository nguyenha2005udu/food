import React, { useState } from "react";
import MenuItem from "./components/MenuItem";
import OrderSummary from "./components/OrderSummary";
import './App.css';

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Bánh mì xúc xích', title: '1 xúc xích', price: 15000, quantity: 1, selected: false, image: 'bmxx.png' },
    { id: 2, name: 'Trà chanh', title: '1 trà chanh', price: 15100, quantity: 1, selected: false, image: 'bmxx.png' },
    { id: 3, name: 'Xúc xích rán', title: '1 xúc xích', price: 10000, quantity: 1, selected: false, image: 'bmxx.png' }
  ]);

  const handleQuantityChange = (id, delta) => {
    setMenuItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
      )
    );
  };

  const handleSelectAll = (isSelected) => {
    setMenuItems(prevItems => prevItems.map(item => ({ ...item, selected: isSelected })));
  };

  const handleSelectItem = (id) => {
    setMenuItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleDeleteProduct = (id) => {
    setMenuItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Giỏ Hàng</h1>
      {menuItems.map(item => (
        <MenuItem 
          key={item.id} 
          item={item} 
          onQuantityChange={handleQuantityChange} 
          onSelectItem={handleSelectItem}
        />
      ))}
      <OrderSummary 
        items={menuItems} 
        onSelectAll={handleSelectAll} 
        onDeleteProduct={handleDeleteProduct} 
      />
    </div>
  );
};

export default App;
