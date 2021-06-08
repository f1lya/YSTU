import React from "react";
import Skill from "./Skill/Skill";
import styles from './Skills.module.scss'

const Skills = (props) => {

    let addSkill = () => {
        props.addSkill();
    }

    let skillsItem =
        props.skills.map(p => <Skill key={p.id} icon={p.icon} name={p.name}/>);

    return (
        <div className={styles.wrapper}>
            <div>
                {skillsItem}
            </div>

            <button onClick={ addSkill } >+</button>
        </div>
    )
}

export default Skills;

