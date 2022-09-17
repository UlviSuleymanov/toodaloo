import React from 'react';
import style from './myinput.module.css';
const MyInput = (props) => {
  return <input className={style.inp} {...props} />;
};

export default MyInput;
