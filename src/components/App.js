import React from 'react';
import './App.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Header from './header/Header';
import UserList from './user/UserList';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <Header/>
        <UserList />
      </div>
    </MuiPickersUtilsProvider>

  );
}

export default App;
