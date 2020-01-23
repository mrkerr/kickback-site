import React from 'react';
import {Link} from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import '../components_css/Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Menu className='mobile-menu-button'>
        <div>VIDEO</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>DESIGN</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>CLOTHING</div>
      </Menu>
    )};
}

export default Header;
