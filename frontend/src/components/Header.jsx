import React,{useState,useEffect} from 'react'
import logoTec from '../images/logo_tecnm.png'
import logoSonora from '../images/logo_sonora.png'


const Header = ()=>{
    return(
        <div className="header">
            <img src = {logoTec} />
            <img src = {logoSonora} />
        </div>
    )
}

export default Header;