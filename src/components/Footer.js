import React, { Component } from 'react';
import logo from '../img/logo.png';

export default class Footer extends Component {
	render() {
		return (
			<footer className="app__footer">
                <div className="container">
                    <address>
                    	365 Freebies. 007/365
                    </address>
                    <a href="/"><img src={logo} alt="ux navy" /></a>
                    <span>@anakarenart</span>
                </div>
            </footer>
		) 	
	}
}  