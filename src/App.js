import './App.css';
import logoMetro from './source/logoMetro.webp'
import {Form} from "./components/form/Form";


function App() {
    return (
        <div className="App">
            <div className="header-container">
                <div className="me-auto p-2 logo-metro">
                    <img id='logo-metro' src={logoMetro} alt="logo del metro"/>
                    <p className="fs-4">Sistema de transporte colectivo</p>
                </div>
                <div className="p-2">Home</div>
                <div className="p-2">Lineas del metro</div>
            </div>
            <div className='main'>
                <Form/>
            </div>
            <div className="footer">
                <div className="d-flex">
                    <div className="p-2 flex-grow-1">Copyright
                        © Elizabeth González Cruz
                    </div>
                    <div className="p-2 align-items-start">Redes Sociales
                        <div className="d-flex align-items-center">
                            <a href="https://www.instagram.com/metrocdmx/" target='_blank'>  <i className="bi bi-instagram"></i></a>
                            <a href="https://twitter.com/MetroCDMX" target='_blank'><i className="bi bi-twitter"></i></a>
                            <a href="https://apps.apple.com/mx/app/metro-cdmx/id1575157353" target='_blank'> <i
                                className="bi bi-apple">
                            </i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
