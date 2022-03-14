import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../src/pages/Home'
import About from '../src/pages/about'
import Projects from '../src/pages/projetos'
import Activities from '../src/pages/activities'
import Contato from '../src/pages/contact'
import Details from '../src/pages/details'
import Header from "./pages/header";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Register from "./pages/register";


export default function Rotas(){
    return(
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/activities' exact element={<Activities />} />
                <Route path='/contato' exact element={<Contato />} />
                <Route path='/details' exact element={<Details />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/admin' exact element={<Admin />} />
                <Route path='/register' exact element={<Register />} />
                
            </Routes>
        </BrowserRouter>
    )
}