import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


import test1 from './pages/test1';
import test2 from './pages/test2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={test1}/>
        <Route exact path='/test2' component={test2}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
