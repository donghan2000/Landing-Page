import './styles.css'
import './fonts/Montserrat/Montserrat-Medium.ttf';
import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./Components/App";

if (typeof browser === "undefined") {
    var browser = chrome;
}


function Overlay() {
    return <>
        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
            <div style={{ width: '100%', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
                <h1 style={{ margin: 0, padding: '0px 50px', fontSize: '5em', fontWeight: 500, letterSpacing: '-0.05em' }}>DONG HAN </h1>
            </div>
        </div>
    </>
}

createRoot(document.getElementById('root')).render(<>
    <App />
    <Overlay />
</>)

