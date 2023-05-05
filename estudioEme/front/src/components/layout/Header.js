import React from 'react';
import '../../styles/components/layout/Header.css';
import Nav from './Nav';

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src="img/logosinbg.png" width="100" alt="EME" />   
                <Nav />   
            </div>
            
        </header>
    );
}

export default Header;