import React from 'react'
import './navbar.css'
import logo from "../../assets/logo.svg"
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";
// BEM block elemet modifier
// const menuBar = ()=> (
//     <>
//         <p><a href='#home'>Home</a></p>
//          <p><a href='#gpt3'>What is GPT3?</a></p>
//          <p><a href='#possibility'>Open AI</a></p>
//          <p><a href='#features'>Case Studies</a></p>
//          <p><a href='#library'>Library</a></p>
//     </>
// )
// const Navbar = () => {
    
//     const [togglemenu, setToggleMenu] = useState(false)
//   return (
//     <div className='gpt3__navbar'>
//      <div className='gpt3__navbar-links'>
//       <div className='gpt3__navbar-links_logo'>
//        <img src={logo} alt='logo'/>
//       </div>
//       <div className='gpt3__navbar-links-container'>
//         <menuBar/>
//       </div>
//      </div>
//      <div className='gpt3__navbar-sign'>
//            <p>Sign In</p>
//            <button type='button'>Sign Up</button>
//      </div>
//      <div className='gpt3__navbar-menu'>
//         {togglemenu
//         ?
//           <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu (false)}/>
//         : <CiMenuBurger color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
//         }
//         {
//             togglemenu && (
//                 <div className='gpt3__navbar-menu_container scale-up-center'> </div>
//             )
//         }
//      </div>
//      <div className='gpt3__navbar-menu_container-links'>
//         <menuBar/>
//         <div className='gpt3__navbar-menu_container-links-sign'>
//            <p>Sign In</p>
//            <button type='button'>Sign Up</button>
//      </div>
//      </div>
//     </div>
//   )
// }
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt='logo'/>
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine  color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <CiMenuBurger color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  };
  

export default Navbar