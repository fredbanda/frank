import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">umkhondo</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">I was chosen by our African ancestors to heal and bring fortune to our people. Indian people follow their ancestors. White people follow theirs. Who do you follow muntu omnyama?</p>
        <button type="button" className="custom__button">Come With Me</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Dont Be Blinded</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The world has changed and is still change. Landela umkhondo phakathi. Listen to it and follow the dreams you dream in your sleep those are are messages for you from your ancestors</p>
        <button type="button" className="custom__button">Come With Me</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
