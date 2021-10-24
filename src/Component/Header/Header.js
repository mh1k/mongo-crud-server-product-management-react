import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="mt-5">
            <Link  className="me-5 text-decoration-none" to="/" >Home</Link>
            <Link  className="me-5 text-decoration-none" to="/products" >Products</Link>
            <Link  className="me-5 text-decoration-none" to="/add_products" >Added Products</Link>
        </div>
    );
};

export default Header;