import React from 'react';
import UserTerminal from "./terminal.jsx";

const MyTerminal = (): React$Element<React$FragmentType> => {
    return (
        <div className='ct-page-fill' id="terminal">
            <UserTerminal />
        </div>
    );
}
export default MyTerminal;