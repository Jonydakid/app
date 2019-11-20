import React from 'react'
import '../App.css';
import logo from './logo.png';
export default function Construccion() {
    return (
        <div>
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
                    ¡Visitanos en facebook!
        </a>
            </header>
        </div>
    )
}
