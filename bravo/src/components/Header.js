import React from "react";

const Header = () => {
    return (
        <header>
            <h2 className='com-logo'>
                BRA<span class='go'>VO</span>
            </h2>

            <nav>
                <ul className='left-nav'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Services</a>
                    </li>
                </ul>

                <ul className='right-nav'>
                    <li className='secondary'>
                        <a href='#'>Go Premium</a>
                    </li>
                    <li>
                        <a href='#'>Login</a>
                    </li>
                </ul>
            </nav>

            <div className='hamburger'>
                <i className='fa fa-bars'></i>
            </div>

            <div className='close'>
                <p>Close</p>
            </div>
        </header>
    );
};

export default Header;
