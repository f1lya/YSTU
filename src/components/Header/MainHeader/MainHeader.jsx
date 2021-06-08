import React from 'react';
import styles from './MainHeader.module.scss'
import {NavLink} from 'react-router-dom';
import logo from '../icon/logo.svg'
import user from '../icon/user.svg'
import settings from '../icon/settings.svg'
import notification from '../icon/notification.svg'
import exit from '../icon/exit.svg'

const MainHeader = ({ pathname}) => {
    let login = pathname === '/login' ? styles.login : styles.profile;
    let hello = pathname === '/login' ? styles.hello : styles.login;
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src={logo} alt="YSTU"/>
            <div className={login}>
                <NavLink to="/user" target="_blank"><img className={styles.user} src={user} alt=""/></NavLink>
                <span className={styles.profileName}>Перфильев В.С.</span>
                <NavLink to="/setting"><img className={styles.settings} src={settings} alt=""/></NavLink>
                <NavLink to="/notification"><img className={styles.notification} src={notification} alt=""/></NavLink>
                <NavLink to="/login"><img className={styles.exit} src={exit} alt=""/></NavLink>
            </div>
            <p className={hello}>Добро пожаловать!</p>
        </div>
    )
}

export default MainHeader;