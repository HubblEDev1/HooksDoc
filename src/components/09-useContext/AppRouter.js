import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/> {/*Exact allow us to define that the expression has to match with the reges */}                    
                    <Route exact path="/about" component={AboutScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    {/*Use default 
                    <Route exact path="/" component={HomeScreen}/>
                    */}
                    <Redirect to="/"/> {/*Redirect when not match with route */}
                </Switch>
            </div>
        </Router>
    )
}
