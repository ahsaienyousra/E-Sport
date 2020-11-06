import React, { useEffect } from 'react';
import LeagueItem from './LeagueItem' ;

const Leagues = ({leagues, loading,setTeamPage})=>{

        useEffect(()=>{
            setTeamPage(0)
        },[])
        return (
            <div>
                <h1>Leagues</h1>
                {leagues && leagues.map(league =>(
                    <LeagueItem key={league.id} league={league} />
                ))}
            </div>
        );
}


export default Leagues;
