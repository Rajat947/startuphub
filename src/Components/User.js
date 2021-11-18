import React from 'react'
import './User.css'

export default function User(props) {
    let user = props.ele;
    return (
        <div className="col-12 col-sm-6 col-md-4 Feed-user">
                <div className="Feed-user-content">
                    <div className="Feed-user-image"></div>
                    <div className="Feed-user-name">
                        <p className="user-main-name">{user.name}</p>
                        <p>{user.location}</p>
                    </div>
                    <div>{user.summary}</div>
                </div>
        </div>
    )
}
