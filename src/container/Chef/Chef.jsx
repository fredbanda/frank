import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="From an African believer" />
      <h1 className="headtext__cormorant">You Dont believe in Sangomas right</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Of course a lot did try to run away from it but it didnt end well. Amadlozi will humble you till you are down.</p>
        </div>
        <p className="p__opensans"> I was asked to leave a good paying engineering job which am qualified for but everytime my eyes would be blocked and no eye wear would help until I accepted to do what my forefathers wanted me to do. </p>
      </div>

      <div className="app__chef-sign">
        <p>Dr Manda</p>
        <p className="p__opensans">The Healer you can trust</p>
      </div>
    </div>
  </div>
);

export default Chef;
