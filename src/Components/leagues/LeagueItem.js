import React from 'react';
import {Link} from 'react-router-dom';

const LeagueItem = ({league:{id,name,image_url,html_url}})=> {
        return (
            <div className="card text-center" style={{padding:'5em'}}>
                <img src={image_url} alt='' style={{width:'80px'}}/>
                <h3>{name}</h3>
                <div>
                    <Link to={`/leagues/${id}`} className="btn btn-dark btn-sm my-1">Details</Link>
                </div>
            </div>
        );

};

export default LeagueItem;
