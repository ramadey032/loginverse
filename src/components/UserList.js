import React, { useState, useEffect } from 'react';
import { fetchUsersDetails } from '../services/userInfo';


const UserList = () => {
    const [userList, setuserList] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetchUsersDetails();
            setuserList(response.data);
        })();
    }, []);

    const renderList = () => {
        return (
            <div className="w3-container">
                <ul className="w3-ul w3-card-4" >
                    {userList.map((record) => {
                        return (
                            <li className="w3-bar" key={record.id}>
                                <img src="avatar.jpg" alt="avatar"  class="w3-bar-item w3-circle w3-hide-small" style={{width:"85px"}}></img>
                                <div className="w3-bar-item">
                                    <span className="w3-large">{record.real_name}</span>
                                    <span>{record.tz}</span>
                                </div>
                            </li>
                        );
                    }
                    )}
                </ul>
            </div>);
    }

    return (
        <div class="ui horizontal list">
            <div class="item">
                <div class="content">
                    <div class="header">User List</div>
                    <div className="ui celled list">{renderList()}</div>
                </div>
            </div>

        </div>
    );
};

export default UserList;