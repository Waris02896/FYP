import React, {Component} from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Signin from './Pages/Signin/signinpage.component';
import Signup from './Pages/Signup/signuppage.component';
import Processcard from './Pages/Process CardPage/processcardpage.component';
import Dropdown from './Pages/DropDown_Page/dropdownpage.component';

class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
            <Routes>
            <Route exact path='/signin' element={< Signin />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/processcard' element={< Processcard />}></Route>
            <Route exact path='/dropdown' element={< Dropdown/>}></Route>
            </Routes>
          </div>
        </Router>
      );
      
    }
}

export default App;


// 

