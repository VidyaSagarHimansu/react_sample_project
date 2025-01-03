import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg'></img>
        <div className='links'>
            <span>Paytm for Consumer</span>
            <span>Paytm For Business</span>
            <span>Investor Relations</span>
            <span>Company</span>
            <span>Career</span>
        </div>        
        <button>Sign In<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="17" fill="#002970"/><circle cx="17" cy="14.7331" r="7.93333" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.07898 28.048C6.58399 23.4894 11.4312 20.3999 16.9999 20.3999C22.5687 20.3999 27.4159 23.4894 29.9209 28.048C26.8029 31.691 22.1711 33.9999 16.9999 33.9999C11.8288 33.9999 7.19693 31.691 4.07898 28.048Z" fill="white"/></svg></button>
    </div>
)
}

export default Header