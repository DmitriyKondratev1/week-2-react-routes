import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'


const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div id="title">Dashboard</div> 
        <div><Link to='/dashboard/profile/d40f9ccc-df5f-4e63-9880-1b4dff6b2b06'>Go To Profile </Link></div>
        <div><Link to='/dashboard/main'>Go To Main </Link></div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
