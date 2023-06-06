import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
        let {title} = this.props;
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand mx-2" to="/general">
                    <img src="Newsicon.jpg"
                        alt="News Icon" width="30"
                        height="30" /></Link>
                    <Link className="navbar-brand" to="/general"><u>{title}</u></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-2">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/general">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
