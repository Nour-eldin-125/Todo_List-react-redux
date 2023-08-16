import './App.css';
import Tasks  from './components/Tasks';
import AddTask  from './components/AddTask';
import React from 'react';
import store from './store'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <AddTask/>
        <Tasks/>
      </Provider>
    </div>
  );
}

export default App;
