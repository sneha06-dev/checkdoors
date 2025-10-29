import React from 'react'

import Lesson from './components/Lesson'
import Client from './components/Client'
import Manage from './components/Manage'
import Unseen from './components/Unseen'
import Business from './components/Business'
import Design from './components/Design'
import Airpods from './components/Airpods'
import Caring from './components/Caring'
import Libary from './components/Libary'






export default function page() {
  return (
    <div>
      <Lesson/>
      <Client/>
      <Manage/>
      <Unseen/>
      <Business/>
      <Design />
      <Airpods/>
      <Caring/>
      <Libary/>
      </div>
  )
}
