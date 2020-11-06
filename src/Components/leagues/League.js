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
        if(props.setPage){
            props.setNoPagination(true)
        }
    },[props.setPage])


        const {name, image_url}= league;
        return (
            <div className="container mb-5">
                {name}
                <img className="img-fluid" style={{maxHeight:600}} 
                src={image_url || "https://hearhear.org/wp-content/uploads/2019/09/no-image-icon.png"} alt='' />
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
