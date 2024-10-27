import React from 'react';
import dropDown from './dropdown.module.css';

export default function dropdown() {
  return (
    <div className={dropDown.dropdown}>
        <div className={dropDown.dropdownContent}>
            <button className={dropDown.dropdownItem}>Lagos</button>
            <button className={dropDown.dropdownItem}>Ogun</button>
            <button className={dropDown.dropdownItem}>Oyo</button>
            <button className={dropDown.dropdownItem}>Osun</button>
            <button className={dropDown.dropdownItem}>Abuja</button>
            <button className={dropDown.dropdownItem}>Abia</button>
        </div>
    </div>
  )
}
