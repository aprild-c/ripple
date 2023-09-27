import "./navBar.css"
import React from "react";
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (
        <div className="navBar">
            <ul className="linksList">
                <Link className="link" to='/vision'><li className="tab">Vision</li></Link>
                <Link className="link" to='/book_space'><li className="tab">Book Space</li></Link>
                <Link className="link" to='/services'><li className="tab">Services</li></Link>
            </ul>

        </div>
    )

}