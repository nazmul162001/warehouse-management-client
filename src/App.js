import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
