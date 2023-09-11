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
import postal from './Assets/India-Post.webp'

const Navigation = () => {
  return (
    <div className="m-6">

<nav className="flex space-x-3 bg-red-600 p-3 rounded-lg text-amber-300 font-bold text-xl items-center">
        <img src={postal} className="h-6 rounded-full" alt="IndiaPostLogo" style={{width : "150px", height:"150px"}} />
        <div className="flex-grow" />{" "}
 {/* <Styling /> */}

{/* <IncrementFunction /> */}

{/* <ReducerPractice /> */}

<Routes >
<Route path="/" element={<HomePage />} />
<Route path="/about" element = {<AboutPage />} />
<Route path="/contact" element ={<ContactPage />} />
<Route path="*" element ={<ErrorPage />} />

</Routes>
  </nav>
    </div>
    );
}

export default Navigation;
