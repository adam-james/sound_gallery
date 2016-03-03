import React, { PropTypes } from 'react';

const Gallery = React.createClass({
  render: function() {
    const { errorMessage, imagesData } = this.props;

    const images = imagesData.map(function(item, index) {
      return (
        <a href={item.link} target='_blank' key={index}>
          <img src={item.media.m} alt={item.title}></img>
        </a>
      );
    });

    return (
      <section id='gallery'>
        { errorMessage &&
          <p>{errorMessage}</p> ||
          images }
      </section>
    );
  }
});

Gallery.propTypes = {
  errorMessage: PropTypes.string,
  imagesData: PropTypes.array.isRequired
};

export default Gallery;
