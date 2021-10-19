import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Departments from './Components/Departments/Departments';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import LogIn from './Components/LogIn/LogIn';
import Registration from './Components/Registration/Registration';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/departments'>
              <Departments></Departments>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/logIn'>
              <LogIn></LogIn>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
