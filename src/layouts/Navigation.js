import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const list = [
    {name: 'Wiadomości', path: "/", exact: true},
    {name: 'Sport', path: "/sport"},
    {name: 'Biznes', path: "/biznes"},
    {name: 'Technologia', path: "/technologia"},
]



 const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav>
            <h1><span>polskie</span>NEWSY</h1>
            <ul>
               {menu}
            </ul>
        </nav>
    )
}

export default Navigation;