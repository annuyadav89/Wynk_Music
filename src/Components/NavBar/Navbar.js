import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Search from '../SearchBar/Search'
import Subscription from '../Subscription/Subscription'
import './Navbar.css'
import { IoMenu } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
    return (
        <div className='navBar'>
            <nav className='nav-items'>
                <div>
                <a href='/'>
                    <Logo />
                </a>

                </div>
               

                <div className='right-nav'>

                    <Search />

                    <Subscription />

                    <hr id='hr-line' />
                      
                    <Link to="/login">
                        <div className='login-container'>
                        <span id='user-icon'><AiOutlineUser /></span>
                        <span id='login-txt'>Login</span>
                        </div>
                        </Link>
                        
                    
                    <span id='menu-icon'> <IoMenu /></span>
                   

                </div>



            </nav>
        </div>
    )
}
