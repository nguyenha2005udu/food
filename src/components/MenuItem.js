import React from 'react';

const MenuItem = ({ item, onQuantityChange, onSelectItem }) => {
  return (
    <div className='container_product'>
      <label>
        <input 
          type="checkbox" 
          checked={item.selected} 
          onChange={() => onSelectItem(item.id)} 
        />
        <h2>RFO</h2>
      </label>
      <div className='products'>
        <label>
          <input 
            type="checkbox" 
            checked={item.selected} 
            onChange={() => onSelectItem(item.id)} 
          />
        </label>
        <a href="#"><img className='product_img' src={item.image} alt={item.name} /></a>
        <div className='product_item'>
          <h2>{item.name}</h2>
          <p className='content_detailed_size'>{item.title}</p>
          <div className='button_group'>
            <button className='minus' onClick={() => onQuantityChange(item.id, -1)}>-</button>
            <span className='number'> {item.quantity} </span>
            <button className='plus' onClick={() => onQuantityChange(item.id, 1)}>+</button>
          </div>
          <p className='product_price'>{item.price} VNĐ</p>
        </div>
        <div className="content_detailed02">
          <h3>Thành Tiền</h3>
          <div className="price">{(item.price * item.quantity).toLocaleString()} VNĐ</div>
        </div>
        <div className="content_detailed03">
          <h3>Thao Tác</h3>
          <button className="delete-btn" onClick={() => onSelectItem(item.id)}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
