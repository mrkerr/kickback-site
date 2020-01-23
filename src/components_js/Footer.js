import React from 'react';
import '../components_css/Footer.css';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div className='footer'>some people say life is like a party... i say it's a lot more like a <span className='footer-kickback'>kickback</span></div>
    )};
}

export default Footer;
