import React from 'react';
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>Tubonge...</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src="https://images.unsplash.com/photo-1698703302438-0e90680207ca?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}
