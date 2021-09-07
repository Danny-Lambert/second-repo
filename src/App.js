import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Employees from "./Employees/employees"



class App extends Component {
  componentDidMount() {
    document.title = "R2R Group Betting";
  }
    render(){
      return(
        // <Router>
        // <main>
        //     <Switch>
                          
        //         <Route path="/employees" render={() => (
                  <Employees />,
                  document.getElementById('home-page')
                  
                // )} />
/*                 
                <Route path="/" render={() => (
                  <PageNotFound />
                )} /> */
                
    //         </Switch>
    //         </main>
    //     </Router>
    
       )
     }

    }


export default App;