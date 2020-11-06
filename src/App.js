import React, { useState, useEffect } from "react";
import Navbar from "./Components/layout/Navbar";
import axios from "axios";
import "./App.css";
import Leagues from "./Components/leagues/Leagues";
import League from "./Components/leagues/League";
import Pagination from "@material-ui/lab/Pagination";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { LEAGUES_PER_PAGE, TEAMS_PER_PAGE, TOKEN_API } from "./utils/defines";
import { Teams } from "./Components/teams/Teams";
import { TeamItem } from "./Components/teams/TeamItem";
import { Team } from "./Components/teams/Team";
import { NotFound } from './Components/layout/NotFound'


const App = () => {
  const [leagues, setLeagues] = useState([]);

  const [loading, setLoading] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const [leaguePage, setLeaguePage] = useState(1);
  const [teamPage, setTeamPage] = useState(0);
  const [filteredPage, setFilteredPage] = useState(1);
  const [teams, setTeams] = useState([]);

  const [games, setGames] = useState([]);

  const [selectedGame, setSelectedGame] = useState({ name: "All Games", id: 0 });

  const [noPagination, setNoPagination] = useState(false);

  const [showAll, setShowAll] = useState(true);

  const [workingTeams, setWorkingTeams] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const res = await axios.get(`/api/videogames?token=${TOKEN_API}`);

      setGames([{ name: "All Games", id: 0 }, ...res.data]);
    };
    callAPI();
  }, []);

  useEffect(() => {

    const callAPI = async () => {
      // setLea({...state,loading:true});
      const res = await axios.get(`/api/leagues?page[size]=${LEAGUES_PER_PAGE}&page[number]=${leaguePage}&token=${TOKEN_API}`);

      let total = res.headers["x-total"];

      setPageNumber(Math.ceil(total / LEAGUES_PER_PAGE));
      setLeagues(res.data);
    };
    if (leaguePage && showAll) {
      callAPI();
      setSelectedGame({ name: "All Games", id: 0 });
    }
  }, [leaguePage, showAll]);

  useEffect(() => {
    const callAPI = async () => {
      const res = await axios.get(`/api/teams?page[size]=100&token=${TOKEN_API}`);
      let total = res.headers["x-total"];
      setPageNumber(Math.ceil(total / TEAMS_PER_PAGE));

      setTeams(res.data)
      setWorkingTeams(res.data.slice(TEAMS_PER_PAGE * (teamPage - 1), TEAMS_PER_PAGE * teamPage));
    };
    if (teamPage && showAll){

      callAPI(); 
      // setWorkingTeams(teams)
    } 
  }, [teamPage, showAll]);

  useEffect(() => {
    const callAPI = async () => {
      if (leaguePage) {
        const res = await axios.get(`/api/videogames/${selectedGame.id}/leagues?page[size]=${LEAGUES_PER_PAGE}&page[number]=${filteredPage}&token=${TOKEN_API}`);

        setLeagues(res.data);
        // setPageNumber(Math.ceil(res.data.length/LEAGUES_PER_PAGE))
        setPageNumber(Math.ceil(res.headers["x-total"] / LEAGUES_PER_PAGE));
        setShowAll(false);
      } else {


        let sliced = (teams
          .filter((team) => team.current_videogame.name === selectedGame.name)
          .slice(TEAMS_PER_PAGE * (filteredPage - 1), TEAMS_PER_PAGE * filteredPage));
        

        setWorkingTeams(sliced)

        setPageNumber(Math.ceil(teams.reduce((a,team)=>team.current_videogame.name===selectedGame.name?a+1:a,0)/TEAMS_PER_PAGE))
        setShowAll(false);
      }
    };
    if (selectedGame && selectedGame.id != 0) {

      callAPI();
      setShowAll(false);
    }
  }, [selectedGame, filteredPage]);

  useEffect(() => {
    setFilteredPage(1);
  }, [selectedGame]);

  useEffect(() => {

  }, [showAll]);

  useEffect(() => {

  }, [noPagination]);

  //filtrage
  // useEffect(()=>{
  //   if(selectedGame && selectedGame !== "All Games"){
  //     setLeagues(games.find(game=>game.name === selectedGame).leagues)

  //   }
  // },[selectedGame && showAll])

  const handleChange = (event, value) => {
    if (showAll) {
      if (leaguePage) {
        setLeaguePage(value);
      } else {
        setTeamPage(value);
      }
    } else {
      setFilteredPage(value);
    }
  };

  return (
    <div className="App">
      <Navbar games={games} setSelectedGame={setSelectedGame} setShowAll={setShowAll} selectedGame={selectedGame} />
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/leagues" />
            </Route>
            <Route exact path="/leagues" render={(props) => <Leagues loading={loading} leagues={leagues} setTeamPage={setTeamPage} />} />
            <Route exact path="/leagues/:id" render={(props) => <League {...props} setNoPagination={setNoPagination} />} />
            <Route exact path="/teams">
              <Teams teams={workingTeams} setTeamPage={setTeamPage} setLeaguePage={setLeaguePage} />
            </Route>
            <Route
              exact
              path="/teams/:id"
              render={(props) => {
                return <Team {...props} setNoPagination={setNoPagination} />;
              }}
            ></Route>
            <Route path="*" >
              <NotFound setNoPagination={setNoPagination} />
            </Route>
          </Switch>
        </div>
      </Router>
      {!noPagination && (
        <div className="container">
          <div className="row justify-content-center mt-5 mb-5">
            <Pagination onChange={handleChange} count={pageNumber} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
