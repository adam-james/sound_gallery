import React, { PropTypes } from 'react';

const Gallery = React.createClass({
  render: function() {
    const { errorMessage, imagesData } = this.props;

    const images = imagesData.map(function(item, index) {
      return (
        <a href={item.link} target='_blank'>
          <img src={item.media.m} alt={item.title} key={index}></img>
        </a>
      );
    });

    return (
      <section>
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
