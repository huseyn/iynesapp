import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ info }) => {
  return (
    <div class='message-header'>
      <div class='user-info'>
        <img src='profile.jpg' alt='' />
        <div class='user'>
          <div class='name'>{info.username}</div>
          <div class='time'>{info.date}</div>
        </div>
      </div>
      <div class='actions'>
        <ul>
          <li>
            <Link to='#'>
              <i class='fa fa-info-circle'></i>
            </Link>
          </li>
          <li>
            <Link to='#'>
              <i class='fa fa-ellipsis-v'></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Header;
