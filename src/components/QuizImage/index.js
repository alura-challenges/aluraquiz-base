import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageBase = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

export default function QuizImage({ src, ...props }) {
  return (
      <ImageBase
        src={src}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
  );
}

QuizImage.propTypes = {
  src: PropTypes.string.isRequired,
};