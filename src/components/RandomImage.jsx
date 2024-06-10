import { useState, useEffect } from 'react';
import propType from 'prop-types';
import { useApiContext } from "../Context";

const RandomImage = ({height = 50, width = 100}) => {
  const { imageUrl , fetchImage } = useApiContext();

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div style={{ width: `100%`, height: `${height}vh` , overflow: 'hidden' }}>
      {imageUrl && (
        console.log(imageUrl),
        <img
          src={imageUrl}
          alt="Random Image"
          style={{ width: `${width}%`, height: 'auto' , objectFit: 'cover' , objectPosition: 'center'}}
        />
      )}
    </div>
  );
};

export default RandomImage;

RandomImage.propTypes = {
  height: propType.number,
  width: propType.number,
};

RandomImage.defaultProps = {
  height: 50,
  width: 100,
};