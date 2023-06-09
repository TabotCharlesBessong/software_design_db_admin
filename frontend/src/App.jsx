import { Box } from "@mui/material";
import React from "react";
import { Crops, Dashboard, Diseases, HomePage, Login, Prediction, Signup, Treatment } from "./pages";
import {Header} from './component'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Box  >
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/ dashboard' element={<Dashboard/>} />
          <Route path='/predict' element={<Prediction/>} />
          <Route path='/crops' element={<Crops/>} />
          <Route path='/diseases' element={<Diseases/>} />
          <Route path='/treatments' element={<Treatment/>} />
        </Routes>
      </Router>
    </Box>
  )
};

export default App;
