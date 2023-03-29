import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./shared/navigation/Navbar";
import General from "./pages/General Information";
import './App.css';

const App = () => {
    return (

        <Router>
            <Navbar/>
            <Switch>
                <main>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/General+Information" exact>
                        <General/>
                    </Route>
                </main>
            </Switch>
        </Router>
    );
}

export default App;
