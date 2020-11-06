import React from 'react';
import {Link} from 'react-router-dom';

const LeagueItem = ({league:{id,name,image_url,html_url}})=> {
        return (
            <div className="card" style={{padding:'5em'}}>
                <h3 className="card-header">{name}</h3>
                <div class="card-body">
                <img src={image_url} alt='' style={{width:'100%'}}/>
                <div>
                    <Link to={`/leagues/${id}`} className="btn btn-dark btn-sm my-1">Details</Link>
                </div>
                </div>
            </div>
        );

};

export default LeagueItem;
