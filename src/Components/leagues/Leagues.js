import React, { useEffect } from 'react';
import LeagueItem from './LeagueItem' ;

const Leagues = ({leagues, loading,setTeamPage})=>{

        useEffect(()=>{
            setTeamPage(0)
        },[])
        return (
            <div style={leagueStyle}>
                {leagues && leagues.map(league =>(
                    <LeagueItem key={league.id} league={league} />
                ))}
            </div>
        );
}
const leagueStyle={
    display:'grid',
    gridTemplateColumns:'repeat(1,1fr)',
    gridGap:'2rem'
}

export default Leagues;
