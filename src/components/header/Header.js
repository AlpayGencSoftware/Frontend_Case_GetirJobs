import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/logo.svg"
import styles from "./Header.module.scss";

const Header=()=> {
  return (
    <div className={styles.header}>
       <div className='logo'>
            <Link to="/">
              <img src={logo} alt="Market Logo"/>
            </Link>
       </div>
       <div className='cart'>
           cart
       </div>
    </div>
  )
}

export default Header;