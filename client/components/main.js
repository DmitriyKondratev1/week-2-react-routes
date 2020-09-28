import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div id='title'>
          Main 
          <div><Link to='/dashboard/profile/d40f9ccc-df5f-4e63-9880-1b4dff6b2b06'>Go To Profile </Link></div>
          <div><Link to='/dashboard'>Go To Root </Link></div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
