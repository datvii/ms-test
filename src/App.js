import React from 'react';
import './App.css';
import profileImg from './img/profile.jpg';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <UserProfile title="UX Navy Profile" followers={4356} following={532} img={profileImg} />
            <UserProfile title="UI/UX Cody Profile" followers={2452} following={389} img={profileImg} />
            <Footer /> 
        </div>
    );
}

export default App;
