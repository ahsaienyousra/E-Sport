import React, { Fragment ,useEffect, useState} from 'react';
import {TOKEN_API} from '../../utils/defines'
import axios from 'axios'
import { SerieItem } from "./TeamItem"

export const Team =({setNoPagination,match}) => {

    const [team,setTeam] = useState({})

    let id;
    useEffect(()=>{
        id = match.params.id;
        const callAPI = async ()=>{
            const res = await axios.get(`https://api.pandascore.co/teams/${id}?token=${TOKEN_API}`);
            setTeam(res.data);
        }
        callAPI()
    },[])

    useEffect(()=>{
        if(setNoPagination !== undefined){
            setNoPagination(true)
        }
    },[setNoPagination])


        return (
            <div>
                {team && (
                    <div className="container mb-5">
                    <div className=" text-center">
                        <img className="img-fluid" style={{maxHeight:600}} 
                        src={team.image || "https://hearhear.org/wp-content/uploads/2019/09/no-image-icon.png"} alt='' />
                        <h3>{team.name}</h3>
                        {team.current_videogame && (
                            <h5>Game: {team.current_videogame.name}</h5>
                        )}
                        <hr></hr>     
                    </div>
                    <div className="text-center">
                     <h5>🎮</h5>
                        <h4>Players: </h4>
                        <span>
                            {team && team.players && team.players.map((player,index)=>{
                                return(
                                <span key={index} className="mr-3">{player.name}</span>  
                                )
                            })}
                        </span>
                    </div>
                </div>
                )}
            
            </div>
        )
        
    }
