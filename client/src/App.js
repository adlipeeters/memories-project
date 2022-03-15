import React from "react";
import { Container } from '@mui/material';
import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";



const App = () => {

    return (
        <BrowserRouter>
            <Container>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Auth" element={<Auth />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;