import React from 'react';
import style from './index.module.scss';

const Index = (props) => {
  return (
    <button
      className={` ${style[props.level]}  ${style[props.size]} ${
        style[props.className]
      }`}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default Index;
