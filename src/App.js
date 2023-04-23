import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Sleekbuys from './components/Sleekbuys';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='sleekbuys' element={<Sleekbuys/>}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
