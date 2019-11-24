import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import profileImg from '../img/profile.jpg';

export default class UserProfile extends Component {
	render() {
		return (
			<div className="app__profile">
                <div className="app__profile__content">
                    <strong className="app__profile__title">{this.props.title}</strong>
                    <img src={this.props.img} alt="" />
                </div>
                <ul className="app__profile__list">
                    <li>
                        <span>{this.props.followers}</span>
                        <p>Followers</p>
                    </li>
                    <li>
                        <span>{this.props.following}</span>
                        <p>Following</p>
                    </li>
                </ul>
            </div>
		) 	
	}
}

UserProfile.propTypes = {
  title: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  img: PropTypes.string
};