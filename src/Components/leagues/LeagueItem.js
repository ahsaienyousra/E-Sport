import React from 'react';
import {Link} from 'react-router-dom';

const LeagueItem = ({league:{id,name,image_url}})=> {
        return (
            <div className="container-fluid" style="width: 50%;">
            <div className="card mb-5">
                <h3 className="card-header" style={{ backgroundColor: "white"}}>{name}</h3>
                <div className="card-body">
                <img src={image_url ||"https://hearhear.org/wp-content/uploads/2019/09/no-image-icon.png"} alt='' style={{width:'50%'}}/>
                </div>
                <div className="card-footer" style={{backgroundColor: "white"}}>
                <Link to={`/leagues/${id}`} className="btn btn-lg btn-dark btn-sm my-1">Details</Link>
                </div>
            </div>
            </div>
        );

};

export default LeagueItem;
