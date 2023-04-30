import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='holder' >
                <img src="img/logosinbg.png" width="100" alt="EME" />
            </div>
        </header>
    );
}

export default Header;