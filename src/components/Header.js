import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h1>ToDo</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/todos"}>Todos</Link>
            </nav>
        </>
    );
}

export default Header;
