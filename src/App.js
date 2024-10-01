import './App.css';
import React, { useState } from 'react';
import CategoryButton from './components/CategoryButton/CategoryButton';
import ProductList from './components/ProductList';

function App() {
  const [activeCategory, setActiveCategory] = useState('ĐỒ ĂN'); // @hant State để lưu danh mục hiện tại
  const products = [
    // @hant Thực đơn đồ ăn
    { id: 1, title: "Bánh mì thập cẩm", priceRange: "15.000 VND - 25.000 VND", image: "bmithapcam.jpg", category: "ĐỒ ĂN" },
    { id: 2, title: "Bánh bao", priceRange: "5.000 VND - 25.000 VND", image: "banhbao.jpg", category: "ĐỒ ĂN" },
    { id: 3, title: "Xôi xéo", priceRange: "10.000 VND - 20.000 VND", image: "xoixeo.jpg", category: "ĐỒ ĂN" },
    { id: 4, title: "Phở bò", priceRange: "25.000 VND - 50.000 VND", image: "pho.jpg", category: "ĐỒ ĂN" },
    { id: 5, title: "Mì xúc xích", priceRange: "15.000 VND - 25.000 VND", image: "mixucxich.jpg", category: "ĐỒ ĂN" },
    { id: 6, title: "Mì trứng", priceRange: "15.000 VND - 25.000 VND", image: "mitrung.jpg", category: "ĐỒ ĂN" },
    { id: 7, title: "Xôi lạc vừng", priceRange: "10.000 VND - 20.000 VND", image: "xoilacvung.jpg", category: "ĐỒ ĂN" },
    { id: 8, title: "Bánh bao chay", priceRange: "5.000 VND - 10.000 VND", image: "banhbaochay.jpg", category: "ĐỒ ĂN" },
    { id: 9, title: "Bánh mì trứng", priceRange: "15.000 VND - 20.000 VND", image: "banhmitrung.jpg", category: "ĐỒ ĂN" },
    { id: 10, title: "Bánh bao xá xíu", priceRange: "25.000 VND", image: "banhbaoxaxiu.jpg", category: "ĐỒ ĂN" },
    { id: 11, title: "Bánh mì xúc xích", priceRange: "15.000 VND - 25.000 VND", image: "banhmixucxich.jpg", category: "ĐỒ ĂN" },
    { id: 12, title: "Cơm hộp", priceRange: "20.000 VND - 35.000 VND", image: "comhop.jpg", category: "ĐỒ ĂN" },
    // @hant Thực đơn đồ uống
    { id: 13, title: "Cà phê đen", priceRange: "15.000 VND", image: "capheden.jpg", category: "ĐỒ UỐNG" },
    { id: 14, title: "Cà phê sữa", priceRange: "20.000 VND", image: "caphesua.jpg", category: "ĐỒ UỐNG" },
    { id: 15, title: "Sinh tố xoài", priceRange: "20.000 VND", image: "sinhtoxoai.jpg", category: "ĐỒ UỐNG" },
    { id: 16, title: "Trà đào", priceRange: "25.000 VND", image: "tradao.jpg", category: "ĐỒ UỐNG" },
    { id: 17, title: "Trà hoa quả", priceRange: "25.000 VND", image: "nuoctraicay.jpg", category: "ĐỒ UỐNG" },
    { id: 18, title: "Trà chanh", priceRange: "15.000", image: "trachanh.jpg", category: "ĐỒ UỐNG" },
    { id: 19, title: "Sữa nóng", priceRange: "10.000 VND", image: "sua.jpg", category: "ĐỒ UỐNG" },
    { id: 20, title: "Ca cao", priceRange: "15.000 VND", image: "cacao.jpg", category: "ĐỒ UỐNG" },
    { id: 21, title: "Trà gừng", priceRange: "10.000", image: "tragung.jpg", category: "ĐỒ UỐNG" },
    { id: 22, title: "Trà lipton", priceRange: "20.000 VND", image: "tralipton.jpg", category: "ĐỒ UỐNG" },
    // @hant Thực đơn khác
    { id: 23, title: "Xúc xích rán", priceRange: "10.000 VND", image: "xucxich.jpg", category: "KHÁC" },
    { id: 24, title: "Lạp xưởng", priceRange: "15.000 VND", image: "lapxuong.jpg", category: "KHÁC" },
    { id: 25, title: "Khô gà lá chanh", priceRange: "20.000 VND - 50.000 VND", image: "khoga.jpg", category: "KHÁC" },
    { id: 26, title: "Khô bò", priceRange: "25.000 VND - 50.000 VND", image: "khobo.jpg", category: "KHÁC" },
    { id: 27, title: "Bánh tráng", priceRange: "10.000 VND - 20.000 VND", image: "banhtrang.jpg", category: "KHÁC" },
  ];
  // @hant Lọc sản phẩm theo danh mục
  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <div>
      {/* Danh sách các nút chọn danh mục */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <CategoryButton
          label="ĐỒ ĂN"
          active={activeCategory === 'ĐỒ ĂN'}
          onClick={() => setActiveCategory('ĐỒ ĂN')}
        />
        <CategoryButton
          label="ĐỒ UỐNG"
          active={activeCategory === 'ĐỒ UỐNG'}
          onClick={() => setActiveCategory('ĐỒ UỐNG')}
        />
        <CategoryButton
          label="KHÁC"
          active={activeCategory === 'KHÁC'}
          onClick={() => setActiveCategory('KHÁC')}
        />
      </div>

      {/* Hiển thị danh sách sản phẩm theo danh mục */}
      <div>
        <h1>{activeCategory}</h1>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
