import React from 'react'
import Nav from '../Nav/Nav'
import './fayls.css'
import $ from 'jquery';
function blinkText() {
  $(".h1-header").fadeOut(1000);
  $(".h1-header").fadeIn(1000);
}
setInterval(blinkText, 1000);

const Header = () => {
  
  
  return (
    <>
    
    <div className="header">
        <h3 className='h1-header'>News</h3>
        <Nav/>
    </div>
    
    
    
    </>
  )
}

export default Header