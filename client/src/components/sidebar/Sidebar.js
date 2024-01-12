import React, { useEffect, useState } from 'react';
import "./Sidebar.css"
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect (() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  }, [])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          About Me
        </span>
        <img className="sidebarImg" src="https://images.unsplash.com/photo-1527963841590-34ea3172750d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores blanditiis tenetur vel earum, soluta officiis sunt ducimus reprehenderit veniam mollitia architecto porro error eos odit, in enim! Dolore, ea.</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">
          CATEGORIES
        </span>
        <ul className="sidebarList">
          {cats.map(c=>(
            <Link to={`/?cat=${c.name}`} className='link'>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">
          FOLLOW US
        </span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
      <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
