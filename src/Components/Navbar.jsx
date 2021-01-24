import React from 'react'
import {Link} from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">PhoneBook</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/contacts" className="nav-link">Contacts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contacts/add" className="nav-link">Add Contact</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contacts/update" className="nav-link">Update Contact</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contacts" className="nav-link">Delete Contact</Link>
          </li>
        </ul>
        </div>
      </nav>

    )
}

