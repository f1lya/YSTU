import React from "react";
import styles from './Information.module.scss'
import InfoItem from "./InfoItem/InfoItem";
import * as axios from "axios";



const Information = (props) => {
    axios.get('http://127.0.0.1:8000/api/profile/education/').then(response => {
        console.log(response)
    })
    let infoItem =
        props.profilePage.information.map(p => <InfoItem key={p.id} icon={p.src} item={p.item}/>);
    return (
        <div className={styles.wrapper}>
            {infoItem}
        </div>
    )

}

export default Information;