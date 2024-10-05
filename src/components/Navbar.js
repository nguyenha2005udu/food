import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><a href="#">TRANG CHỦ</a></li>
                <li><a href="#">THỰC ĐƠN</a></li>
                <li><a href="#">LIÊN HỆ</a></li>
            </ul>
            <div className="navbar-icons">
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Tìm kiếm..." />
                    <i className='bx bx-search-alt-2'></i>
                </div>
                <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png" alt="User Icon" />
                <img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="Cart Icon" />
            </div>
        </nav>
    );
};

export default Navbar;