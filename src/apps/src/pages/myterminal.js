import React from 'react';
import UserTerminal from "./terminal.jsx";
{/* <link href="/css/terminal.css" type="text/css" rel="stylesheet"></link> */ }

const MyTerminal = (props): React$Element<React$FragmentType> => {
    return (
        <div className='ct-page-fill' id="terminal">
            <UserTerminal />
        </div>

    );
}
export default MyTerminal;