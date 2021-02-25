import React from 'react'
import logoTec from '../images/logo_tecnm.png'
import logoSonora from '../images/logo_sonora.png'


const Header = ()=>{
    return(
        <div className="header">
            <img src = {logoTec} alt="logotec" />
            <img src = {logoSonora} alt="logosonora"/>
        </div>
    )
}

export default Header;