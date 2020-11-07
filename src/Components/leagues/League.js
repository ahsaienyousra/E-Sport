import React, { Fragment ,useEffect, useState} from 'react';
import {TOKEN_API} from '../../utils/defines'
import axios from 'axios'
import { SerieItem } from './SerieItem';

const League =(props) => {

    const [league,setLeague] = useState({})

    let id;
    useEffect(()=>{
        id = props.match.params.id;
        const callAPI = async ()=>{
            const res = await axios.get(`/api/leagues/${id}?token=${TOKEN_API}`);
            setLeague(res.data);
        }
        callAPI()
    },[])

    useEffect(()=>{
        if(props.setNoPagination){
            props.setNoPagination(true)
        }
    },[props.setNoPagination])

    


        const {name, image_url,videogame}= league;
        return (
            <div className="container-fluid text-center mb-5 mt-4 " style={{width: "50%"}}>
                
                <img className="img-fluid" style={{maxHeight:600}} 
                src={image_url || "https://intercoton.org/wp-content/themes/consultix/images/no-image-found-360x260.png"} alt='' />
                <h2 className="p-4">{name}</h2>
                {videogame && (
                            <h5>Game: {videogame.name}</h5>
                        )}
                <hr></hr>
                {league.series &&  league.series.map((serie,index)=>{
                    return(
                        <div className="mt-5">
                            <SerieItem key={index} fullName={serie.full_name} beginAt={serie.begin_at} 
                                        endAt={serie.end_at} winnerId={serie.winner_id} 
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

export default League
