import getData from '@services/getData';
import github from '@assets/images/github.png';
import instagram from '@assets/images/instagram.png';
import twitter from '@assets/images/twitter.png';
import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="About">
      <div className="card">
        <div className="card_details">
          <div className="card_photo center circle">
            <img src={user.picture.large} alt={user.name.first} />

            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>

          <p className="card_title">Hi, My name is</p>
          <p className="card_value">
            {user.name.first} {user.name.last}
          </p>
        </div>

        <div className="card_userdata">
          <ul>
            <li>{user.email}</li>
            <li>{user.location.country}</li>
          </ul>
        </div>

        <div className="card_social">
          <a href="https://twitter.com/gndx">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://github.com/gndx">
            <img src={github} alt="github" />
          </a>
          <a href="https://instagram.com/gndx">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;