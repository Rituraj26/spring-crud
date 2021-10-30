import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="container-fw header-bg">
                <div className="container">
                    <div className="grid">
                        <div className="header-left">
                            <p>Get the latest book</p>
                            <h1>Featured Books</h1>
                        </div>
                        <div className="header-right">
                            <img
                                src="https://source.unsplash.com/xY55bL5mZAM/1600x900"
                                alt="header image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
