import React from 'react';

const Footer = React.createClass({
  render: function() {
    return (
      <footer id='footer'>
        <a href='http://adamjames.herokuapp.com/' target='_blank'>
          <small>Made by &copy; Adam James</small>
        </a>
        <br></br>
        <br></br>
        <a href='https://github.com/adam-james' target='_blank'>
          <i className='fa fa-github'></i>
        </a>
        {'     '}
        <a href='https://www.linkedin.com/' target='_blank'>
          <i className='fa fa-linkedin-square'></i>
        </a>
      </footer>
    );
  }
});

export default Footer;
