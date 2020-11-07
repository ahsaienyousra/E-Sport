import React, { useEffect } from 'react'
import { TeamItem } from './TeamItem'

export const Teams = ({teams,setTeamPage,setLeaguePage}) => {

    useEffect(()=>{
        setTimeout(()=>{
            setTeamPage(1)
        },300)
        setLeaguePage(0)
    },[])

    useEffect(()=>{

    },[teams])

    return (
        <div className="text-center">
            <h1 className="p-4">Teams</h1>
            {teams && teams.map(team=>(
                <TeamItem name={team.name} image={team.image_url} id={team.id} />
            ))}
        </div>
    )
}
