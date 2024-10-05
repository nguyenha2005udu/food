import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Thực đơn</a></li>
                <li><a href="#">Liên hệ</a></li>
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