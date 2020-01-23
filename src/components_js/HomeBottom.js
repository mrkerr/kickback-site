import React from 'react';
import sam_image from '../images/sam-train-pic.jpg';
import {BIO_TEXT as BIO_TEXT} from "../Constants"
import '../components_css/HomeBottom.css';

class HomeBottom extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div className='sam-image-container'>
          <div className='sam-bio'>{BIO_TEXT}</div>
          <img src={sam_image}/>
        </div>
    )};
}

export default HomeBottom;
