import React from "react";
export const WorkList = ({ children }) => {
    return (
        <div>
        <ul className="collection">
            <li className="collection-item avatar">
            {children}
            </li>
        </ul>
    </div >
    )
} 
