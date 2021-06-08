import React from 'react';
import NavbarItem from "./NavbarItem/NavbarItem";
import styles from "../MainHeader/MainHeader.module.scss";

const Navbar = (props) => {
    let navbarItem = props.state.navbarItem.map( i => <NavbarItem key={i.id} src={i.src} item={i.item} link={i.link}/>)
    let login = props.pathname === '/login' ? styles.login : styles.wrapper;

    return (
        <div className={login}>
            { navbarItem }
        </div>
    )
}

export default Navbar;