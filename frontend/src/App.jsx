import { Box } from "@mui/material";
import React from "react";
import { Dashboard, HomePage, Login, Prediction, Signup } from "./pages";
import {Header} from './component'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Box style={{position:'relative',top:'-14.5rem'}} >
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/ dashboard' element={<Dashboard/>} />
          <Route path='/predict' element={<Prediction/>} />
        </Routes>
      </Router>
    </Box>
  )
};

export default App;
