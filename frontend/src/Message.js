import React from 'react';
import './style.css';

export default ({ name, message }) =>
  <p>
    <strong>{name}</strong>: <em>{message}</em>
  </p>
