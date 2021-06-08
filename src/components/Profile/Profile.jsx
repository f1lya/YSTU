import React from 'react';
import styles from './Profile.module.scss'
import Information from "./Information/Information";
import Items from '../Items/Items';
import SkillsContainer from "./Skills/SkillsContainer";
import InformationContainer from "./Information/InformationContainer";

const Profile = (props) => {
    debugger;
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <p>Общая информация</p>
                <InformationContainer/>
            </div>

            <div className={styles.skills}>
                <p>Навыки</p>
                <SkillsContainer/>
            </div>

            <div className={styles.events}>
                <p>Завершённые мероприятия</p>
                <Items/>
            </div>

            <div className={styles.projects}>
                <p>Завершённые проекты</p>
                <Items/>
            </div>

        </div>
    )
}

export default Profile;