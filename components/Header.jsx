import React from "react"
import {NavLink} from "react-router-dom"
const Header = () => {
    const applyStyleToActiveItem = (objByNavLink) => {
      
        const {isActive} =  objByNavLink ;
        return isActive ? "active--style" : ""
      }
      //  
    return <>
        <header>
        <NavLink  className="site-logo" to="/" >#VanLife</NavLink>
        <nav>
        
          <NavLink to="host" className={applyStyleToActiveItem}>Hosts</NavLink>
          
          <NavLink to="about" className={applyStyleToActiveItem}>About</NavLink>
          <NavLink to="vans" className={applyStyleToActiveItem}>Vans</NavLink>
         
        </nav>
      </header>
    </>
}

export default Header