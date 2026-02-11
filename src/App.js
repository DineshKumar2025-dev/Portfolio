
import './App.css';
import Navbar from './Details/Navbar';
import Main from './Details/Main-content';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <body>
        <Main />
      </body>
    </div>
  );
}

export default App;
