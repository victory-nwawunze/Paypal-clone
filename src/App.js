
import './App.css';
import Navbar from './components/navbar/Navbar';
import Logo from "./images/paypal-logo-removebg-preview.png"

function App() {
  return (
    <div className="App">
 <Navbar logo={Logo} navText="Personal"  LoginBtn="Log in" signUpBtn="Sign up" />
    </div>
  );
}

export default App;
