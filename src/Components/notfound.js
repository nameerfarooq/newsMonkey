import React, { Component } from 'react'
import notfound from './notfound.png'
export class Notfound extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="card-img-top imgCard " src={notfound} alt="not found" />
            </div>
        )
    }
}

export default Notfound
