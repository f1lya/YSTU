import React from "react";
import styles from './Login.module.scss'
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <form action="">
                <span className={styles.header}>Вход</span>
                <div className={styles.select}>
                    <input className={styles.active} type="submit" value='Студент'/>
                    <input type="submit" value='Работодатель'/>
                </div>
                <input className={styles.input} type="text"/>
                <input className={styles.input} type="password"/>
                <NavLink to='/'>
                    <input className={styles.login} type="submit" value='Войти'/>
                </NavLink>
                <div className={styles.info}>
                    <span>Используйте данные</span>
                    <a>личного кабинета ЯГТУ</a>
                </div>
            </form>
        </div>
    )
}

export default Login;