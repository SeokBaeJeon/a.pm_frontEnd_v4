import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Logo_Apm.css';

function Header(){
  return <header>
    <Link to="/Main_page">
      <h1 className="Logo_Container"> A p m</h1>
    </Link>
    </header>
}

export default Header;