import React from 'react';
const Shop =({item, onSelectItem })=>{
return(
<>
      <label>
        <input 
          type="checkbox" 
          checked={item.selected} 
          onChange={() => onSelectItem(item.id)} 
        />
        <h2>RFO</h2>
      </label>
      </>
)}
export default Shop;