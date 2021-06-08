import React from "react";
import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import Skills from "./Skills";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        skills: state.profilePage.skills
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSkill: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Skills);

export default SkillsContainer;

