import "@fontsource/saira-stencil-one";
import './App.css';
import Navbar from './Details/Navbar';
import Main from './Details/Main-content';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-wrapper">
        <Main />
      </div>
      <footer className='footer buttom-0'>
        <div class="bg-dark">
          <div class="container pt-2 pb-1 w-75">
            <div class="d-flex justify-content-between">
              <h2 className='primary-text'>Dinesh Kumar</h2>
              <p className='primary-text pt-2'>© 2026 <span className='secondary-text'>Dinesh Kumar.</span> All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
