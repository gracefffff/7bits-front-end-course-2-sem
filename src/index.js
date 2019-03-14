import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import Base from './layouts/base/Base';
import Home from './pages/home/Home';

import './index.css';
import ToDo from "./pages/toDo/ToDo";

ReactDOM.render(
    <BrowserRouter>
        <Base>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/todo' component = {ToDo}/>

        </Base>
    </BrowserRouter>,

    document.getElementById('root')
);