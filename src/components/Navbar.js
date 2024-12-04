import React, {useRef} from 'react'
import { FaSearch, FaHeart, FaUser, FaBook, FaHome, FaList, FaTag, FaStore, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
const navRef = useRef();
const showNavbar =() => {
    navRef.current.classList.toggle('login-form');
}
  return (
    <div>
        <header>
            <div className='header'>
                <div className='header_one'>
                    <a href='' className='logo'><FaBook />Bookly</a>
                    <form className='search-form'>
                        <input type='search' id='search-box' placeholder='search here...' />
                        <label htmlFor=''><FaSearch /></label>
                    </form>
                    <div className='icons'>
                        <div id='search-btn'><FaSearch /></div>
                        <a href=''><FaHeart /></a>
                        <a href=''><FaCartShopping /></a>
                        <div id='login-btn' className='user-btn' onClick={showNavbar}><FaUser /></div>
                    </div>
                </div>
                <div className='header_two'>
                    <div  className='navbar'>
                        <a href=''>Home</a>
                        <a href=''>Featured</a>
                        <a href=''>New Arivals</a>
                        <a href=''>Reveiws</a>
                        <a href=''>Blogs</a>
                    </div>
                </div>
            </div>
        </header>
            <div className='botton-navbar'>
                <a href=''><FaHome /></a>
                <a href=''><FaList /></a>
                <a href=''><FaTag /></a>
                <a href=''><FaStore /></a>
            </div>
            <div className='login-form-container' ref={navRef}>
                <div className='close-login-btn' onClick={showNavbar}><FaTimes /></div>
                <form action=''>
                    <h3>sign in</h3>
                    <span>email</span>
                    <input type='email' className='box' placeholder='enter your email' />
                    <span>password</span>
                    <input type='password' className='box' placeholder='enter your password'/>

                    <div className='check-box'>
                        <input type='checkbox' id='remember-me' />
                        <label htmlFor=''> remember me</label>
                    </div>
                    <input type='submit' value='sign in' className='btn'/>
                    <p>forget password <a href=''>click here</a></p>
                    <p>don't have an account? <a href=''>create one</a></p>
                </form>
            </div>
    </div>
  )
}

export default Navbar