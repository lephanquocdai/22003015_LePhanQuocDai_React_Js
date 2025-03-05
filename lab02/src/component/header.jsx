import { useState } from 'react';
import './style.css';
import logo from "../assets/data/lab01/Group 9.png";
import avatar from "../assets/data/lab02/Avatar 35.png"

function Header() {
    var array =["What to cook","Recipes","Ingredients","Occasions","About us"]
    var fn =(item)=>{
        return <li>{item}</li>
    };
    var render = array.map(fn);
    return (
        <>
        <div id="menu">
            <ul>
               {render}
            </ul>
        </div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="recipe-box">
                    <button>Your Recipe Box</button>
                    <img src={avatar} alt="User Profile" className="profile-pic" />
                </div>
            </header>
        </>
    );
}

export default Header;