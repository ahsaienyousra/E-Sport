import React from 'react'
import {Link} from  'react-router-dom'

export const TeamItem = ({image,name,id}) => {
    return (
        <div className="container-fluid" style={{width: "50%"}}>
            <div className="card mb-5">
            <h3 className="card-header" style={{ backgroundColor: "white"}}>{name}</h3>
            <div className="card-body">
                <img className="img-fluid" 
                src={image ||"https://intercoton.org/wp-content/themes/consultix/images/no-image-found-360x260.png" } 
                alt='' style={{heightMax:600}}/>
            </div>
                <div className="card-footer" style={{backgroundColor: "white"}}>
                    <Link to={`/teams/${id}`} className="btn btn-primary btn-lg my-1">Details</Link>
                </div>
            </div>
        </div>
    )
}
