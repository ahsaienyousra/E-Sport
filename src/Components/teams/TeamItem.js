import React from 'react'
import {Link} from  'react-router-dom'

export const TeamItem = ({image,name,id}) => {
    return (
        <div className="row justify-content-center mt-4">
            <div className="card text-center" style={{padding:'5em'}}>
                <img className="img-fluid" 
                src={image ||"https://hearhear.org/wp-content/uploads/2019/09/no-image-icon.png" } 
                alt='' style={{heightMax:600}}/>
                <h3>{name}</h3>
                <div>
                    <Link to={`/teams/${id}`} className="btn btn-dark btn-sm my-1">Details</Link>
                </div>
            </div>
        </div>
    )
}
