import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import MainNav from './UI/MainNav';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-md mx-auto h-screen">
      <BrowserRouter> 
        <MainNav />
        <div className='grow overflow-y-auto'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        Main
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;