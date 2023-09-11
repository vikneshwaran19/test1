import logo from './logo.svg';
import './App.css';
import Styling from './styling';
import IncrementFunction from './inrementButton';
import ReducerPractice from './ReducerPractice';
import { Route, Routes } from 'react-router-dom';
import HomePage from './RouterPractice/home';
import { ContactPage } from './RouterPractice/contact';
import AboutPage from './RouterPractice/about';
import ErrorPage from './RouterPractice/Error';
import Navigation from './Navigation';
import NavigationBar from './RouterPractice2/NavigationBar';

const App = () => {
  return (
    <div className="App">
{/* <Navigation /> */}
<NavigationBar />
  </div>
    );
}

export default App;
