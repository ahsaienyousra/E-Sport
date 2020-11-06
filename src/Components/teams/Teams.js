import React, { useEffect } from 'react'
import { TeamItem } from './TeamItem'

export const Teams = ({teams,setTeamPage,setLeaguePage}) => {

    useEffect(()=>{
        console.log("hana");
        setTimeout(()=>{
            setTeamPage(1)
        },200)
        setLeaguePage(0)
    },[])

    useEffect(()=>{
        console.log(teams)
    },[teams])

    return (
        <div className="container">
            {teams && teams.map(team=>(
                <TeamItem name={team.name} image={team.image_url} id={team.id} />
            ))}
        </div>
    )
}
