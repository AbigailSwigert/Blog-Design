import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <nav id="top-nav">
            <section id="nav-container">
                <h1>Blog Title</h1>
                <section id="nav-links">
                    <Link to='/' className="nav-link"><p>Home Page</p></Link>
                    <Link to='/post-template' className="nav-link"><p>Post Template</p></Link>
                </section>
            </section>
        </nav>
    );
}

export default NavBar;