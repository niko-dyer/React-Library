import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../Home.css'

const NavBar = () => (
    <Menu className='navbar'>
        <Link to='/'>
            <Menu.Item>
                Home
            </Menu.Item>
        </Link>
        <Link to='/about'>
            <Menu.Item>
                About
            </Menu.Item>
        </Link>
        <Link to='/game'>
            <Menu.Item>
                RPS
            </Menu.Item>
        </Link>
        <Link to='/flash'>
            <Menu.Item>
                Flashcards
            </Menu.Item>
        </Link>
    </Menu>
)

export default NavBar