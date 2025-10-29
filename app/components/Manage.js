
import React from 'react'
import Image from 'next/image'
export default function Manage() {
  return (
    <div className='manage mt-5'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <p className='manage-title1'>Manage your entire community<br/>in a single system</p>
                <p className='manage-sub'>Who is Nextcent suitable for?</p>

            </div>
        <div className='col-md-4'>
            <Image src='/manage1.png' width={48} height={48} alt='manage image'/>
            <p className='manage-title'>Membership</p> 
            <p className='manage-title3'>Organisations</p>
            <p className='manage-sub1'>Our membership management software provides full automation of membership renewals and payments</p>

        </div>
        <div className='col-md-4'>
            <Image src='/manage2.png' width={48} height={48} alt='manage image'/>
            <p className='manage-title'>National </p>
            <p className='manage-title3'>Associations</p>
            <p className='manage-sub1'>Our membership management software provides full automation of membership renewals and payments</p>

        </div>
        <div className='col-md-4'>
            <Image src='/manage3.png' width={48} height={48} alt='manage image'/>
            <p className='manage-title'>Clubs And</p>
            <p className='manage-title3'> Groups</p>
            <p className='manage-sub1'>Our membership management software provides full automation of membership renewals and payments</p>

        </div>
        </div>

      </div>
    </div>
  )
}
