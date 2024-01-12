import React from 'react';
import "./Single.css"
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePst from '../../components/singlePost/SinglePst';

export default function Single() {
  return (
    <div className='single'>
      <SinglePst />
      <Sidebar />
    </div>
  )
}
