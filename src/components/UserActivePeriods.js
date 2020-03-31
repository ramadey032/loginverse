import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { KeyboardDatePicker } from "@material-ui/pickers";
import { fetchUserDetail } from '../services/fetchUserInfo';

const UserActivePeriods = (props) => {
    const nowDate = new Date();
    const myDate = nowDate.toDateString().slice(4);

    const [activityPeriods, setActivityPeriods] = useState([]);
    const [selectedDate, handleDateChange] = useState(myDate);

    const active_array = activityPeriods.activity_periods;
    let result = [];

    useEffect(() => {
        if (props.id) {
            (async (id) => {
                const response = await fetchUserDetail(id);
                setActivityPeriods(response.data);
            })(props.id);
        }
    }, [props.id]);

    if (active_array) {
        result = active_array.filter(({ start_time }) => start_time.slice(0, 11) === selectedDate);
    }

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h4>Active hours</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    {result.length !== 0 ? result.map((e) => <div key={result.length++}>
                        <p>Start Time : {e.start_time}</p>
                        <p>End Time : {e.end_time}</p>
                    </div>) : <div> No time log for the day.</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UserActivePeriods;