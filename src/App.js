import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Route,Routes } from 'react-router-dom';
import { DeletedNotes } from './Pages/DeletedNotes';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/deletedNotes" element={<DeletedNotes/>}/>
      </Routes>
    </div>
  );
}

export default App;
