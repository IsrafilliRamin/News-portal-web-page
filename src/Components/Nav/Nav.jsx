/* import React, { useState } from 'react' */
import {  NavLink } from 'react-router-dom'
import './fayl.css'




const Nav = () => {
 
  
  return (
    <>
      <nav>
        <ul>{}
          <NavLink activeclassname='active' className='link' to="/" ><li id='0' >All</li></NavLink>
          <NavLink activeclassname='active'className='link' to="business"> <li id='1'>Business</li>  </NavLink>
          <NavLink activeclassname='active' className='link' to="sports"><li id='2'>Sports</li></NavLink>
          <NavLink activeclassname='active' className='link' to="world"><li id='3'>World</li></NavLink>
          <NavLink activeclassname='active' className='link' to="technology"><li id='4'>Technology</li></NavLink>
          <NavLink activeclassname='active' className='link' to="entertainment"><li id='5'>Entertainment</li></NavLink>
          <NavLink activeclassname='active' className='link' to="science"><li id='6'>Sciense</li></NavLink>

        </ul>
      </nav>



    </>
  )
}

export default Nav