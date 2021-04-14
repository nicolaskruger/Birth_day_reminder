import React from 'react';
import logo from './logo.svg';
import './App.css';
import Birthday from './components/Birthday';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Birthday />
      </Provider>
    </div>
  );
}

export default App;
