import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { RecoilRoot } from "recoil";
import './App.css';
import MainNav from './UI/MainNav';
import Subway from './components/Subway';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-md mx-auto h-screen">
      <BrowserRouter> 
      <RecoilRoot>
        <MainNav />
        <div className='grow overflow-y-auto'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/subway" element={<Subway/>}/>
        </Routes>
        Main
        </div>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;