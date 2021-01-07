import React from 'react';

const Link = ({ href, src, description }) =>
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={description} />
  </a>

export default Link;
