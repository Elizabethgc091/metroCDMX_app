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
                  <div className="p-2 flex-grow-1">Elizabeth González</div>
                  <div className="p-2">Flex item</div>
                  <div className="p-2">Third flex item</div>
              </div>
          </div>
  );
}

export default App;
