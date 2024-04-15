import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import './Search.css'

export default function Search() {
  return (<>
    <div className='search-container'>

      <div className='search-box'>
        <div id='search-icon'><IoSearchOutline /></div>

        <div id='search-input'>
          <input id='input' type='text' placeholder='Search Songs' />
        </div>

      </div>


    </div>
  </>

  )
}
