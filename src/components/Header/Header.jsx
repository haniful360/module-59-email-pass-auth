import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <Link to='/'>home</Link>
            <Link to='/abut'>about</Link>
            <Link to='/login'>login</Link>
            <Link to='/register'>register</Link>
        </div>
    );
};

export default Header;