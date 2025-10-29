import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <div className='header mt-5' >
      <div className='container'>
        <div className='row'>
            <div className='col-md-2'>
               <Image className='header-img' src='/Logo.png' width={154} height={24} alt='logo'/> 
           </div>
           <div className='col-md-6'>
              <ul className='header-list'>
                <li className='list'><Link className='link' href='/'>Home</Link> </li>
                  <li className='list'><Link className='link' href='service'>Service</Link> </li>
                    <li className='list'><Link className='link' href='feature'>Feature</Link> </li>
                      <li className='list'><Link className='link' href='testimonial'>Testimonial</Link> </li>
                        <li className='list'><Link className='link' href='FAQ'>FAQ</Link> </li>
              </ul>

           </div>
           <div className='col-md-4'>
                   <ul className='header-list-1'>
                    <Link  className='link1' href='login'>Login</Link>
                     <Link  className='link1' href='sign up'>Sign up</Link>
                   </ul>
           </div>
            </div> 
      </div>
    </div>
  )
}
