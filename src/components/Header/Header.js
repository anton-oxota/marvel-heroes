import React from 'react'

import './Header.scss'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <Logo />
                    <div className="header__pages">
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--main-color)' : 'var(--black-color)'
                            })}
                            className='header__page-link'
                            to='/'>Characters</NavLink>

                        <div className="divider">/</div>

                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? 'var(--main-color)' : 'var(--black-color)'
                            })}
                            className='header__page-link'
                            to='/comics'>Comics</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header