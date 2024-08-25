import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
function Navbar({setShowLogin}) {

    const [menu,setMenu] = useState("home") ;

    const {getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className='navbar '>
        <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
        <ul className='navbar-menu '>
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#about-us' onClick={()=>setMenu("about-us")} className={menu==="mobile-app"?"active":""}>About Us</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"" : "dot"}></div>
            </div>
            <button className='' onClick={()=>setShowLogin(true)}>sign in</button>
            
        </div>
    </div>
  )
}

export default Navbar