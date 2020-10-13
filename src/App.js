import React, { Fragment, useEffect } from 'react';
// Components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import FloatBtn from './components/layout/FloatBtn';
// Components Modals
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
// Redux Imports
import { Provider } from 'react-redux';
import store from './store';
// Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
// Font-Awesome
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className={'container'}>
          <FloatBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
