import React from 'react';
import {Link} from 'react-router-dom';
import '../components_css/HomeTop.css';
import Clock from 'react-live-clock';
import GlitchClip from 'react-glitch-effect/core/Clip';



const HomeTop = () => (
  <div class='home-grid-wrapper'>
    <div className='title-wrapper' id='title-div'>
      <div class='background-title-text-huge'>KICK<br/>BACK</div>
      <div className='mobile-clock'>
      <GlitchClip duration={'3s'}><h1><Clock format="HH:mm:ss" ticking={true} interval={1000}/></h1></GlitchClip>
      </div> 
    </div>
    <div className='sections-wrapper'>
      <div className='section-button'><GlitchClip onHover={true} duration={'3s'} iterationCount={'5'}>VIDEO</GlitchClip></div>
      <div className='section-button'><GlitchClip onHover={true} duration={'3s'} iterationCount={'5'}>DESIGN</GlitchClip></div>
      <div className='section-button'><GlitchClip onHover={true} duration={'3s'} iterationCount={'5'}>CLOTHING</GlitchClip></div>
      <div className='location'>springfeld il</div>
    </div>
  </div>
);

export default HomeTop;
