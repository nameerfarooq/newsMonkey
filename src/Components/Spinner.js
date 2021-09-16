import React from 'react'

const Spinner =()=> {
    return (
        <div className="text-center">
            <div className="spinner-border text-primary" role="status"></div>
            <h4 className="sr-only">Loading...</h4>
        </div>
    )
}
export default Spinner
