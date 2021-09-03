import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectData } from './features/fetchSlice';
import { fetchJSON } from './features/fetchSlice';

function App() {
  const dispatch = useDispatch();
  const jsondata = useSelector(selectData)
  const [fetchState, setFetchState] = React.useState(false);

  return (
    <div className="App">
      <button onClick={()=> {dispatch(fetchJSON()); setFetchState(true)}}>Fetch API</button>
      <span>{fetchState? <p data-test="fetching-state">Fetching</p>: null}</span>
      <p>{jsondata}</p>
    </div>
  );
}

export default App;
