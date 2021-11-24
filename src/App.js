import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Map from './Container/Map';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Map/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
