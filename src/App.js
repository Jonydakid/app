import React from 'react'
import logo from './logo.png';
import Menu from './components/Menu';
import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import Navbar from './components/Navbar';


const useStyles = makeStyles(theme=>({

  root: {
    marginLeft:'0',
    marginRight:'0',
    borderRadius: 3,
    border: 'auto',
    color: 'white',
    textAlign:'center',
    backgroundColor:'#282c34',
    
  },
  label: {
    textTransform: 'capitalize',
  },
}));

export default function App() {
  const stile = useStyles();
  
  return (
    <div className={stile.root}>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pagina en construcción
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/lamakina.deltiempo.54"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Visitanos en nuestro facebook por mientras!
        </a>
      </header>
      <Navbar/>
      <Menu/>
    </div>
  );
}
