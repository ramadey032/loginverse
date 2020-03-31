import React from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';
import UserList from './UserList';

function App() {
  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}

        {/* <UserActiveDetails
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
        <UserList/>
      </>
    </div>
  );
}

export default App;
