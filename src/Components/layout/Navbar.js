import { getSuggestedQuery } from "@testing-library/react";
import React, { Component, useEffect } from "react";


const Navbar = ({ games, setSelectedGame, setShowAll,selectedGame }) => {

  const handleClick = (e)=>{

    let data = e.target.value.split(",")

    if(data[0] != 0){
      setSelectedGame({name:data[1],id:data[0]})
    }
    else{

      setShowAll(true)
    }
  }

  useEffect(()=>{

  },[games])

  const handleShowAll = () =>{
    setShowAll(true)
  }

  return (
    <nav className="navbar  white" style={{ backgroundColor: "#3f51b5", color: "white" }}>
      <h1 className="navbar-brand">A-Sport Démo UBO</h1>
      <ul className="nav justify-content-end text-light">
        <li className="nav-item dropdown mr-5">
          <select onChange={handleClick} style={{backgroundColor:"transparent",color:'white'}} class="custom-select">
            {games && games.map((game)=>{
              let selected = selectedGame.name === game.name?true:false
              return (<option style={{color:"black"}} selected={selected}  value={game.id+","+game.name}>{game.name}</option>)
            })}
          </select>
                    
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/teams">
            TEAMS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/leagues">
            LEAGUES
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
