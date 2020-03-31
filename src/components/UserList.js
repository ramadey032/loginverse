import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { fetchUsersDetails } from '../services/fetchUserInfo';
import UserActivePeriods from './UserActivePeriods';


const UserList = () => {
    const [userList, setuserList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetchUsersDetails();
            setuserList(response.data);
        })();
    }, []);

    const activePeriod = (id) => {
        setCurrentUserId(id);
        setModalShow(true);
    };

    const renderList = () => {
        return (
            <div className="w3-container">
                <ul className="w3-ul w3-card-4" >
                    {userList.map((record) => {
                        return (
                            <li className="w3-bar" style={{  backgroundColor: "#fff" }} key={record.id}>
                                <img src="avatar.jpg" alt="avatar" className="w3-bar-item w3-circle w3-hide-small" style={{ width: "85px" }}></img>
                                <div className="w3-bar-item">
                                    <Button variant="primary" onClick={() => activePeriod(record.id)}>
                                        <div className="w3-large">{record.real_name}</div>
                                    </Button>
                                    <div>{record.tz}</div>
                                </div>
                            </li>
                        );
                    }
                    )}
                </ul>
            </div>);
    }

    return (
        <div className="ui horizontal list container">
            <div className="item">
                <div className="content">
                    <div className="header">User List</div>
                    <div className="ui celled list">{renderList()}</div>
                    <UserActivePeriods
                        show={modalShow}
                        id={currentUserId}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserList;