import React, { useEffect } from 'react'

export const NotFound = ({setNoPagination}) => {
    useEffect(()=>{
        if(setNoPagination){
            setNoPagination(true)
            console.log("hahna akhay tabi3aa");
        }
    },[setNoPagination])
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h2>Page Not Found</h2>
            </div>
        </div>
    )
}
