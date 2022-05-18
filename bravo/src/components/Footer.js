import React from "react";

const Footer = () => {
    return (
        <footer>
            <nav className='down-nav'>
                <ul>
                    <li>
                        <a href='#'>
                            <i className='fa fa-home'></i>
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='fa fa-bell'></i>
                            <p>Notifications</p>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i className='fa fa-user'></i>
                            <p>Profile</p>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='fa fa-arrow-right-from-bracket'></i>
                            <p>Sign-out</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
