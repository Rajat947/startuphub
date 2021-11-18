import './App.css';
import {Routes, Route } from "react-router-dom";
import Landing from './Components/Landing';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import Profile from "./Components/Profile";
import Chat from './Components/Chat';
import Investor from './Components/investor';
import Startup from './Components/Startup';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Landing></Landing>} />
            <Route path="/signup" element={<Register></Register>} />
            <Route path="/signin" element={<SignIn></SignIn>} />
            <Route path="/home/feed" element={<Home></Home>} />
            <Route path="/home/profile" element={<Profile></Profile>} />
            <Route path="/home/chat" element={<Chat></Chat>} />
            <Route path="/signup/investor" element={<Investor></Investor>}></Route>
            <Route path="/signup/startup" element={<Startup></Startup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
