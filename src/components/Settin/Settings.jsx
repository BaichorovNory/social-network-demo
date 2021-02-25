import React from 'react';
import { Redirect } from 'react-router-dom';

const Settings = (props) => {
    if (props.isAuth === false) return <Redirect to='/login' />
    return (
        <div>
            Settings
        </div>
    );
}
export default Settings;