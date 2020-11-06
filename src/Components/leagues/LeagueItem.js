import React from 'react';
import {Link} from 'react-router-dom';

const LeagueItem = ({league:{id,name,image_url,html_url}})=> {
        return (
            <div className="container-fluid">
            <div className="card" style={{ backgroundColor: "white"}}>
                <h3 className="card-header">{name}</h3>
                <div class="card-body">
                <img src={image_url} alt='' style={{width:'50%'}}/>
                </div>
                <div class="card-footer" style={{ backgroundColor: "white"}}>
                <Link to={`/leagues/${id}`} className="btn btn-dark btn-sm my-1">Details</Link>
                </div>
            </div>
            </div>
        );

};

export default LeagueItem;
