import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import CenterForm from './components/CenterForm'
import Home from './components/Home'
import Profile from './components/Profile'

import './App.css'

const App = () => {
    return (
        <div>    
            <Router>
                <Main/>
            </Router>
        </div>
    )
}

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path ='/' component={CenterForm} />
                <Route exact path ='/home' component={Home} />
                <Route exact path ='/profile' component={Profile} />
            </Switch>
        </div>
    ) 
}

export default App;
