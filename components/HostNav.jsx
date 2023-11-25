import React from "react"
import {NavLink} from "react-router-dom"
const HostNav = () => {
    const activeStyling = {
      fontWeight: "bold",
       textDecoration: "underline",
      color:"#161616"
    }
    const applyclassNameToActiveItem = (objByNavLink) => {
      
      const {isActive} =  objByNavLink ;
     
      return isActive ? "active--style" : null
    }
    return <>
        
        <nav className="host-nav">
        
          <NavLink to="." end  className={applyclassNameToActiveItem} >Dashboard</NavLink>
          
          <NavLink to="income" className={applyclassNameToActiveItem}>Income</NavLink>
          <NavLink to="vans"   className={applyclassNameToActiveItem} >Vans</NavLink>
          <NavLink to="reviews" className={applyclassNameToActiveItem}>Reviews</NavLink>
         
        </nav>
    
    </>
}

export default HostNav