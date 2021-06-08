import React from 'react';
import styles from './Header.module.scss'
import MainHeader from "./MainHeader/MainHeader";
import Navbar from "./Navbar/Navbar";
import {withRouter} from "react-router-dom";


export default withRouter(function Header(props) {
    let state = props.store.getState();
    let pathname = props.location.pathname;
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <MainHeader pathname={pathname}/>
                <Navbar state={state.header} pathname={pathname}/>
            </div>
        </div>
    )
});
