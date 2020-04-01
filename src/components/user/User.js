import React from 'react';


const User = (props) => {
    return (
        <li className="w3-bar" style={{ backgroundColor: "#fff" }} key={props.id}>
            <img src="avatar.jpg" alt="avatar" className="w3-bar-item w3-circle w3-hide-small" style={{ width: "85px" }}></img>
            <div className="w3-bar-item">
                <div style={{ color: "blue" }} onClick={() => props.activePeriod(props.id)}>
                    <div className="w3-large">{props.name}</div>
                </div>
                <div>{props.place}</div>
            </div>
        </li>
    );
};

export default User;