import logo from './logo.svg';
import './App.css';
// import Home from './Components/Home/home';
import HomeContainer from './Container/homecontainer';
import HeaderContainer from './Container/headercontainer';
import { appheader } from './cssfile';

function App() {
  return (
    <div>
      <text style={appheader}>style implemented</text>
      <HeaderContainer />
      <HomeContainer />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
