import React, { PropTypes } from 'react';

const Gallery = React.createClass({
  render: function() {
    const { errorMessage, imagesData } = this.props;

    const images = imagesData.map(function(item, index) {
      return <img src={item.edmPreview} alt={item.title} key={index}></img>;
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
