import React from 'react'
import Image from 'next/image'
export default function Client() {
  return (
    <div className='client '>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <p className='client-title-1'>Our Clients</p>
                    <p className='client-title-2'>We have been working with some Fortune 500+ clients</p>
                 </div>
            <div className='col-md-2 col-sm-4'>
            <Image src='/logo1.png' width={48} height={48} className="img-fluid client-image" alt='client '/>
            </div>
              <div className='col-md-2 col-sm-4'>
            <Image src='/logo2.png' width={48} height={48} className="img-fluid client-image" alt='client image'/>
            </div>
              <div className='col-md-2 col-sm-4'>
            <Image src='/logo3.png' width={48} height={48} className="img-fluid client-image" alt='client image'/>
            </div>
              <div className='col-md-2 col-sm-4'>
            <Image src='/logo4.png' width={48} height={48} className="img-fluid client-image"  alt='client image'/>
            </div>
              <div className='col-md-2 col-sm-4'>
            <Image src='/logo5.png' width={48} height={48} className="img-fluid client-image" alt='client image'/>
            </div>
              <div className='col-md-2 col-sm-4'>
            <Image src='/logo6.png' width={48} height={48} className="img-fluid client-image" alt='client image'/>
            </div>
                </div>

            </div>

        </div>
      
    
  )
}
