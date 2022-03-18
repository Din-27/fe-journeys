import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/LoginAuth';
import Landing from './pages/page user/Landing';
import Bookmark from './pages/page user/Bookmark';
import Profile from './pages/page user/Profile';
import Detail from './pages/page user/DetailUser';
import DetailLogin from './pages/page user/DetailLogin';
import Add from './pages/page user/Add';
import { UserContext } from './context/UserContext';
import PrivateRoute from './component/Private/PrivateRoute';
import { useContext, useEffect, useState } from 'react';
import { API, setAuthToken } from './config/api';


function App() {


  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Landing />} />
            <Route exact path="/bookmark" element={<Bookmark />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/detail-U/:id" element={<DetailLogin />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/add-journey" element={<Add />} />
        </Routes>
    </Router>
  );
}

export default App;
