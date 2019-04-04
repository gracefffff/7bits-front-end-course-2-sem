import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import Base from './layouts/base/Base';
import Done from './pages/done/Done';

import './index.css';
import ToDo from "./pages/toDo/ToDo";


ReactDOM.render(
    <BrowserRouter>
        <Base>
            <Route exact path = '/' component = {ToDo}/>
            <Route path = '/done' component = {Done}/>

        </Base>
    </BrowserRouter>,

    document.getElementById('root')
);