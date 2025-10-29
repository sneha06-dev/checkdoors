import React from 'react'
import Image from 'next/image'
export default function Design() {
  return (
    <div className='design'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Image src='/design.png' width={441} height={443} alt='design image'/>

          </div>
          <div className='col-md-6'>
            <p className='design-title1'>How to design your site footer like we did</p>
            <p className='design-title2'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='design-btn'>Learn More</button>
          </div>

        </div>

      </div>
      
    </div>
  )
}
