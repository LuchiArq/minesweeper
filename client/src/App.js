import {BrowserRouter as Router, Route} from 'react-router-dom';
import React,{useEffect} from 'react';
import Table from './components/Table/Table.jsx'
import  Home from './components/Home/Home.jsx'
import  Profile from './components/Profile/Profile.jsx'
import {useDispatch} from 'react-redux';
import {AllDataUser} from './redux/actions/userActions';
import {SaveStateLocalStorage,LoadStateLocalStorage} from './helpers/localStorage'



function App() {

  let token = LoadStateLocalStorage('dataUser') && LoadStateLocalStorage('dataUser').token
   const dispatch = useDispatch()
  useEffect(()=>{
    token && dispatch(AllDataUser(token))
  },[])

  console.log("Datos en el localStorage ",token)
  return ( 
    <Router>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/game" component={Table} />
        <Route exact path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
