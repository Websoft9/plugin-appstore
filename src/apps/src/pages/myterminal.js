import React from 'react';
// import { useLocation } from "react-router-dom";
import "../assets/scss/custom/terminal/terminal.scoped.css";
import UserTerminal from "./terminal";

// const MyTerminal = (props): React$Element<React$FragmentType> => {
//     const location = useLocation();
//     const id = new URLSearchParams(location.search).get("id");

//     return (
//         <div className='ct-page-fill' id="terminal">
//             <UserTerminal runCmd={`docker exec -it ${id} bash || sh\n`} />
//         </div>
//     );
// }

const MyTerminal = (props): React$Element<React$FragmentType> => {
    return (
        <div className='ct-page-fill' id="terminal">
            <UserTerminal runCmd={`docker exec -it ${props.data.customer_name} bash || sh\n`} />
        </div>
    );
}
export default MyTerminal;