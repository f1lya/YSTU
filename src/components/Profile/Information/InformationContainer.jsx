import React from "react";
import {connect} from "react-redux";
import Information from "./Information";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = () => {
    return {}
}


const InformationContainer = connect(mapStateToProps, mapDispatchToProps)(Information);

export default InformationContainer;