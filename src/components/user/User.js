import './User.css';
import React from 'react';


const User = (props) => {
    return (
        <li className="w3-bar" style={{ backgroundColor: "#fff" }} key={props.id} onClick={() => props.activePeriod(props.id)}>
            <img src="/assets/avatar.jpg" alt="avatar" className="w3-bar-item w3-circle w3-hide-small" style={{ width: "85px" }}></img>
            <div className="w3-bar-item">
                <div className="w3-large" style={{ color: "blue" }}>
                    {props.name}
                </div>
                <div className="w3-medium">{props.place}</div>
            </div>
        </li>
    );
};

export default User;