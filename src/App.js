import './App.css';

// IMPORT REACT-ROUDER-DOM
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// IMPORT VIEW.CONTAINERS
import Home from './view.containers/Home/Home';
import Login from './view.containers/Login/Login';
import Register from './view.containers/Register/Register'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/login' exact component={Login}/>
          


        </Switch>
      
      </BrowserRouter>
    </div>
  );
}


export default App;
