// import logo from './logo.svg';
// import './App.css';
import SideBar from './components/SideBar.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js';

function App() {
  const appStyle = {
    display: 'flex',
    
  };
  return (
    <div className="App" style={appStyle}>
      
      <SideBar/>
      <div>
      <NavBar/>
      <MainContainer/>
      </div>
    </div>
  );
}

export default App;
