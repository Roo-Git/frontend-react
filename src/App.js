import './App.css';

// IMPORT REACT-ROUDER-DOM
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// IMPORT VIEW.CONTAINERS
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register'
import Profile from './containers/Profile/Profile'
import Loading from './containers/Loading/Loading'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Switch>

          <Route path='/' exact component={Loading}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/profile' exact component={Profile}/>

        </Switch>
      
      </BrowserRouter>
    </div>
  );
}


export default App;
