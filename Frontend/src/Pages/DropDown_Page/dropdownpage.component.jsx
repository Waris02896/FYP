import React from 'react'
import ReactDOM from 'react-dom'
import './dropdown.styles.css';
import Dropdown from '../../Component/DropDown/Dropdown.component';
import { useState } from "react";


export default function Dropdowncomp() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="DropDown">
        <Dropdown selected={selected} setSelected={setSelected}/>
    </div>
  );
}

