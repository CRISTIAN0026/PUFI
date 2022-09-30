import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id'/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
//
export default App;
