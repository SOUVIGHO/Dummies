import React from 'react'
import Style from './Header.module.css'

const Header =() =>{
    return(
        <div className={Style.header}>
            <h1>My todos</h1>
            <div className={Style.settings}>setup task</div>
        </div>
    );
}

export default Header;