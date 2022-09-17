import React from 'react';
import style from './myselect.module.css';
const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} className={style.select} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
