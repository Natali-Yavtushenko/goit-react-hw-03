
import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value); 
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBox;
