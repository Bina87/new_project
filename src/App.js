import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Form from './components/Form';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App"> 
     <Navbar/>
     <First/>
     <Form/>

    </div>
  );
}

export default App;
