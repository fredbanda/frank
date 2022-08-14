import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase money and Fame not people" />
      <h1 className="app__header-h1">Get Your Break Now</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>You deserve quality life just like your friends. Come to me now and let me unlock the power from your ancestors and be like others </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
