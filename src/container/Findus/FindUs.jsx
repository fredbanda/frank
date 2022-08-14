import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact Me Today" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>I can come to you</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">I go around the whole world to help people. I can come to you</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Working everyday</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
