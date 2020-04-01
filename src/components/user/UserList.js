import React, { useState, useEffect } from 'react';
import { fetchUsersDetails } from '../../services/fetchUserInfo';
import { KeyboardDatePicker } from "@material-ui/pickers";
import User from './User';
import ShowModal from '../ShowModal';


const UserList = () => {
    const nowDate = new Date();
    const formatedDate = nowDate.toDateString().slice(4);
    const [userList, setuserList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedDate, handleDateChange] = useState(formatedDate);
    const [currentUserId, setCurrentUserId] = useState(null);
    let activity_logs = [];

    useEffect(() => {
        (async () => {
            const response = await fetchUsersDetails();
            setuserList(response.data);
        })();
    }, []);

    if (currentUserId) {
        activity_logs = userList.find(({ id }) => id === currentUserId)
        .activity_periods.filter(({ start_time }) => start_time.slice(0, 11) === selectedDate);
    }

    const activePeriod = (id) => {
        setCurrentUserId(id);
        setModalShow(true);
    };

    const modalBody = () => {
        return (
            <>
                <KeyboardDatePicker
                    autoOk
                    disableFuture
                    variant="inline"
                    inputVariant="outlined"
                    label="Select a date"
                    format="MMM dd yyyy"
                    value={selectedDate}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={date => handleDateChange(String(date).slice(4, 15))}
                />
                {activity_logs.length !== 0 ? activity_logs.map((e) => <div key={activity_logs.length++}>
                    <p>Start Time : {e.start_time}</p>
                    <p>End Time : {e.end_time}</p>
                </div>) : <div> No time log for the day.</div>}
            </>
        );
    };

    return (
        <div className="container">
            <div className="header">User List</div>
            <div className="w3-container">
                <ul className="w3-ul w3-card-4" >
                    {
                        userList.map((record) => {
                            return (
                                <User
                                    key={record.id}
                                    id={record.id}
                                    name={record.real_name}
                                    place={record.tz}
                                    activePeriod={activePeriod} />
                            );
                        })
                    }
                </ul>
            </div>
            <ShowModal
                header={<h4>Active hours</h4>}
                body={modalBody()}
                footer="Close"
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default UserList;