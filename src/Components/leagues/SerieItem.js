import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const SerieItem = ({fullName,beginAt,endAt,winnerId}) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {fullName}
                </div>
                <div className="card-body">
                    <h5 className="card-title">From: {moment(beginAt).format("DD/MM/YYYY hh:mm:ss")}
                     {endAt && "  To: "+moment(endAt).format("DD/MM/YYYY hh:mm:ss")}</h5>
                    {winnerId && (
                        <Link to={`/teams/${winnerId}`}  class="btn btn-warning">Go somewhere</Link>
                    )}
                    
                </div>
            </div>
        </div>
    )
}
